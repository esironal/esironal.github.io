(function () {
    var isYoutubeApiInitialized = false,
        INVALID_VIDEO_ID = 2;

	// Next event listeners are used to generate jQuery events for iframe
	function onPlayerReady(event) {
		var player = event.target, iframe = $(player.getIframe());
		iframe.trigger("ready");
		var targetVideoId = player.getVideoData().video_id;
		if (!targetVideoId) {
			targetVideoId = iframe.prop("videoId");
			player.cueVideoById(targetVideoId);
			if (iframe.prop("autoplay") > 0) {
				player.playVideo();
			}
			if (iframe.data("has-autoplay")) {
				iframe.trigger("youtubeError", [INVALID_VIDEO_ID]);
			}
		}

        if (iframe.is(":not(:visible)") && iframe.data("has-autoplay")) {
            player.mute();
        }
    }

	function isHtc4Version(){
		if (navigator.userAgent.indexOf('HTC') && navigator.userAgent.indexOf('Android 4.')){
			return true;
		}else{
			return false;
		}
	}

	function onPlayerStateChange(event) {
        var iframe = event.target.getIframe();

        var eventNames = {
            "-1": "youtubeunstarted",
            "0": "youtubeended",
            "1": "youtubeplaying",
            "2": "youtubepaused",
            "3": "youtubebuffering",
            "5": "youtubevideocued"
        };
        
        /**
         * Video with small sizes(quality) don't play in HTC version more or equal than 4.0.3
         * we force play video at list with medium quality
         */
        if ((event.data == YT.PlayerState.PLAYING) && isHtc4Version() && (event.target.getPlaybackQuality()=='small')) { 	      
    		  event.target.setPlaybackQuality('medium');
        }

        if (event.data in eventNames) {
            $(iframe).trigger(eventNames["" + event.data]);
        }
        $(iframe).trigger("youtubeStateChange", [event.data]);
    }

    function onPlayerPlaybackQualityChange(event) {
        var iframe = event.target.getIframe();
        $(iframe).trigger("youtubePlaybackQualityChange", [event.data]);
    }

    function onPlayerPlaybackRateChange(event) {
        var iframe = event.target.getIframe();
        $(iframe).trigger("youtubePlaybackRateChange", [event.data]);
    }

    function onPlayerError(event) {
        var iframe = event.target.getIframe();
        $(iframe).trigger("youtubeError", [event.data]);
    }

    function onPlayerApiChange(event) {
        var iframe = event.target.getIframe();
        $(iframe).trigger("youtubeApiChange");
    }

	// Create Player object and add event listeners to Youtube iframe.
	/* NOTE: Youtube player API (instance of YT.Player class) is stored in:
	 *   $(youtubeComponent).data("youtube-player-object")
	 * All user defined properties are located in:
	 *   $(youtubeComponent).data("youtube-player-object").playerVars
	 * Such as:
	 *   "videoId" : "wyx6JDQCslE",
	 *   "loop" : 0 or 1,
	 *   "autoplay" : 0 or 1,
	 *   "start" : number,
	 *   "end" : number.
	 *
	 * See: https://developers.google.com/youtube/iframe_api_reference
	 */
	function registerYoutubeComponentNow(elementId, /*optional*/ element) {
		var elt = element === undefined ? $("#" + elementId) : element,
			videoId = elt.attr("videoId") || elt.prop("videoId");
		if (!elt || elt.length == 0) {
			return;
		}
		var playerVars = {},
			params = elt.attr("playervars");
		if (params) {
			params = params.split(";");
			for (var i = 0; i < params.length; i++) {
				var param = params[i].split("=");
				playerVars[param[0]] = param[1];
			}
		}
		if (playerVars.loop && playerVars.loop == 1) {
			playerVars.playlist = videoId;
		}
        playerVars.wmode = "transparent";
		var player_options = {
			videoId: videoId,
			playerVars: playerVars,
			wmode: "transparent",
			enablejsapi: 1,
			events: {
				'onReady': onPlayerReady,
				'onStateChange': onPlayerStateChange,
				'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
				'onPlaybackRateChange': onPlayerPlaybackRateChange,
				'onError': onPlayerError,
				'onApiChange': onPlayerApiChange
			}
		};

		var playerObject = new YT.Player(elt[0], player_options);
		playerObject.playerVars = playerVars;
		var iframe = $(playerObject.getIframe()); //YoutTube Player replaces <div> with <iframe> in DOM
		return iframe.data("youtube-player-object", playerObject).prop("autoplay", playerVars.autoplay || 0);
	}

    // List of Youtube IFrames which are going to be initialized when Youtube API is ready.
    Appery.__uninitializedYoutubeComponents = [];

    // This global function is called by Youtube API when it's ready.
    window.onYouTubeIframeAPIReady = function () {
        isYoutubeApiInitialized = true;

        var idsList = Appery.__uninitializedYoutubeComponents;
        for (var i = 0; i < idsList.length; i++) {
            registerYoutubeComponentNow(idsList[i]);
        }

        Appery.__uninitializedYoutubeComponents = [];
    };

    Appery.registerYoutubeComponent = function (elementId, /*optional*/ element) {
        if (isYoutubeApiInitialized) {
            return registerYoutubeComponentNow(elementId, element);
        }
        else {
            Appery.__uninitializedYoutubeComponents.push(elementId);
			return element;
        }
    };

})();
