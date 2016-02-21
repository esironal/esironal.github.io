var __GLOBAL_INNERHTML_TAGS = ['a', 'div', 'td', 'th', 'li'];
var __GLOBAL_CHECKED_TAGS = ['checkbox', 'radio'];
var __GLOBAL_ATTRIBUTES = ['style', 'onclick', 'ondblclick', 'onmouseout', 'onblur', 'onchange', 'onkeydown',
    'onkeypress', 'onkeyup', 'onmousedown', 'onmousemove', 'onmouseover', 'onmouseup'];
var __JQM_DATA_ATTRIBUTES = ['data-title', 'data-image-url'];

function str2Bool(string) {
    "use strict";
    if ((typeof string) === "string") {
        switch (string.toLowerCase()) {
            case "true":
            case "checked":
            case "yes":
            case "1":
                return true;
            case "false":
            case "no":
            case "0":
            case null:
                return false;
            default:
                return Boolean(false);
        }
    } else {
        return string;
    }
}

function toggle(id, src, value, subselector) {
    "use strict";
    var elem;
    var tag;
    if (src !== "html") {
        elem = $(document).find('[id="' + id + '"]');
        if (elem) {
            if (elem.attr("apperytype") === "marker") {
                // Hide marker on the map
                elem.attr("rendered", value);
                if (elem.find("[reRender]").size() === 1) {
                    var parentMap = Apperyio(elem.find("[reRender]").attr("reRender"));
                    if (parentMap !== undefined && parentMap.refresh !== undefined) {
                        parentMap.refresh();
                    }
                }
                return;
            }
            if (subselector !== undefined) {
                elem = elem.find(subselector);
                if (elem.size() === 0) return;

            }
            switch (elem.prop("tagName")) {
                case "INPUT":
                    if (elem.attr("type") === "radio" || elem.attr("type") === "checkbox") {
                        elem = elem.parent().parent();
                    } else {
                        elem = elem.closest("div[data-role='fieldcontain']");
                    }
                    break;
                case "SELECT":
                case "TEXTAREA":
                    elem = elem.closest(".ui-field-contain");
                    break;
                case "A":
                    if (elem.hasClass('ui-link-inherit') || elem.hasClass('ui-icon-carat-r')) {
                        elem = elem.closest('li');
                    }
                    break;
            }
        }
    } else {
        elem = $(document).find('[id="' + id + '_comp"]');
        if (elem.size() === 0) {
            elem = $(document).find('[id="' + id + '"]');
            tag = elem.prop("tagName").toLowerCase();
            if (tag === "div" && elem.prop("class").indexOf("tabpanel") !== -1
                && elem.prop("class").indexOf("tabs-top") === -1) {
                var elem_title = elem.parent().find('[href=#' + id + ']');
                if (value === undefined || "" === value) {
                    elem_title.toggle();
                } else {
                    elem_title.toggle(str2Bool(value));
                }
                if (elem.css('display') === 'block' && !str2Bool(value)) {
                    if (elem.prop("class").indexOf("ui-tabs-hide") === -1) {
                        var elem_tab_panel = elem.parent();
                        var sel_idx = elem_tab_panel.tabs("option", "selected");
                        sel_idx++;
                        sel_idx = (sel_idx === elem_tab_panel.tabs("length")) ? 0 : sel_idx;
                        elem_tab_panel.tabs("select", sel_idx);
                    }
                }
            }
        }
    }

    if (!elem) return;

    if (value === undefined || "" === value) {
        elem.toggle();
    } else {
        if (elem.is("a") && elem.attr("data-role") === "button") {
            // mobilebutton
            if (elem.hasClass("ui-btn-inline")) {
                elem.css("display", str2Bool(value) ? "inline-block" : "none");
            } else {
                elem.css("display", str2Bool(value) ? "block" : "none");
            }
        } else if (elem.is("iframe")) {
            elem.css("display", str2Bool(value) ? "block" : "none");
        } else {
            // default
            elem.toggle(str2Bool(value));
        }
    }
}

function setText(id, text, src) {
    "use strict";
    var elem = $("#" + id);
    if (!elem.length) {
        return;
    }
    var attr = "value";
    var tag = elem.prop("tagName").toLowerCase();
    if (jQuery.inArray(tag, __GLOBAL_INNERHTML_TAGS) > -1) {
        attr = "innerHTML";
    } else if (tag === "img") {
        attr = "src";
    } else if (tag === "input" && jQuery.inArray(elem.prop("type").toLowerCase(), __GLOBAL_CHECKED_TAGS) > -1) {
        attr = "innerHTML";
        elem = $("#" + id + "_label");
    }
    if ($("#" + id + " .ui-btn-text:first").length) {
        $("#" + id + " .ui-btn-text:first").text(text);
    } else if ($("#" + id + " .ui-collapsible-heading-toggle:first").length) {
        $("#" + id + " .ui-collapsible-heading-toggle:first").text(text);
    } else {
        elem.prop(attr, text);
    }
}


function getText(id, src) {
    var elem = $(document).find('[id=' + id + ']');
    if (elem.size() === 0) return;
    var attr = "value";
    var tag = elem.prop("tagName").toLowerCase();
    if (jQuery.inArray(tag, __GLOBAL_INNERHTML_TAGS) > -1) {
        attr = "innerHTML";
        if (tag === "div" && elem.prop("class").indexOf("titledpanel") !== -1) {
            elem = $('[id=' + id + '_title]');
        } else if (tag === "div" && elem.prop("class").indexOf("ui-tabs-panel") !== -1) {
            elem = elem.parent().find('[href=#' + id + ']');
        } else if (tag === "a" && elem.parent().parent().parent().prop("tagName").toLowerCase() == "li" &&
            elem.parent().parent().parent().parent().attr("data-role") == 'listview') {
            elem = elem.find(".ui-li-heading");
        }
    } else if (tag === "img") {
        attr = "src";
    } else if (tag === "input" && jQuery.inArray(elem.prop('type').toLowerCase(), __GLOBAL_CHECKED_TAGS) > -1) {
        if (src === "html") {
            elem = $('[id=' + id + '_label]');
        } else {
            elem = $('[id=' + id + '_label] .ui-btn-text');
        }
        attr = "innerHTML";
    }

    if (elem.attr('data-role') === "collapsible") {
        return $('[id=' + id + '] .ui-btn-text:first').text();
    } else if ($('[id=' + id + '] .ui-btn-text').size() > 0) {
        return $('[id=' + id + '] .ui-btn-text').text();
    } else {
        if (attr === "innerHTML") {
            return $('<div />').html(elem.prop(attr)).text();
        } else {
            return elem.prop(attr);
        }

    }
}

function setEnabled(id, text) {
    "use strict";
    var elem = $(document).find('[id=' + id + ']');
    if (elem.size() === 0) return;
    var attr = "disabled";
    var tag = elem.prop("tagName").toLowerCase();
    $(elem).find('[id]').each(function () {
        __setEnabled__($(this), text);
    });
    __setEnabled__(elem, text);
    if (tag === "input" && jQuery.inArray(elem.prop('type').toLowerCase(), __GLOBAL_CHECKED_TAGS) > -1) {
        __setEnabled__($(document).find('[id=' + id + '_label]'), text);
    }
}

function __setEnabled__(elem, text) {
    "use strict";
    if (elem.size() === 0) return;
    var attr = "disabled";
    var tag = elem.prop("tagName").toLowerCase();
    text = str2Bool(text) ? "" : "disabled";
    elem.prop(attr, text);
    if (text === "disabled") {
        elem.addClass("disabled-cntrl");
    } else {
        elem.removeClass("disabled-cntrl");
    }
    if (((tag === "input" && elem.prop('type').toLowerCase() === "text") || (tag === "div"))
        && elem.prop('class').toLowerCase().indexOf("hasdatepick") !== -1) {
        if (text === "disabled") {
            elem.datepick('disable');
        } else {
            elem.datepick('enable');
        }
    }
}

function setChecked(id, text) {
    "use strict";
    var elem = $(document).find('[id=' + id + ']');
    if (elem.size() === 0) return;
    var attr = "checked";
    var tag = elem.prop("tagName").toLowerCase();
    if (tag === "input" && jQuery.inArray(elem.prop('type').toLowerCase(), __GLOBAL_CHECKED_TAGS) > -1) {
        text = str2Bool(text) ? "checked" : "";
    }
    elem.prop(attr, text);
}

/**
 * @deprecated
 */
function closePopup() {
    $.mobile.back();
}

function format(str) {
    "use strict";
    for (var i = 1; i < arguments.length; i++) {
        str = str.replace("{" + (i - 1) + "}", arguments[i]);
    }
    return str;
}

(function ($) {
    "use strict";
    $.fn.getType = function () {
        try {
            if (this.prop('type')) {
                switch ($(this).prop('type')) {
                    case 'radio':
                    case 'checkbox':
                        return "checkboxradio";
                    case 'button':
                        return "button";
                    default:
                }
            }
            if ($(this).attr('data-type')) {
                switch (this.attr('data-type')) {
                    case 'range':
                        return "slider";
                    default:
                }

            }
            if (this.attr('data-role')) {
                switch ($(this).attr('data-role')) {
                    case 'slider':
                        return "slider";
                    default:
                }

            }
            if ($(this).prop("tagName") === "SELECT") {
                return "selectmenu";
            }
            return null;
        } catch (e) {
            return null;
        }
    };
})(jQuery);


(function ($) {
    "use strict";
    $.fn.setEnabled = function (value) {
        if (value !== "") {
            var method = str2Bool(value) ? "enable" : "disable";
            var text = str2Bool(value) ? "" : "disabled";
            var s = "$(this).{0}('" + method + "');";
            this.each(function () {
                var type;
                try {
                    type = $(this).getType();
                    if (type != null) {
                        eval(format(s, type));
                    }
                    else if ($(this).prop('tagName') === 'DIV' || $(this).prop('tagName') === 'OL') {
                        if ($(this).attr('data-role') === "collapsible" || $(this).attr('data-role') === "appery_label") {
                            if (text === "disabled") {
                                $(this).addClass('ui-state-disabled');
                                this.onclick = function (event) {
                                    event.stopPropagation();
                                    event.preventDefault();
                                    return false;
                                };
                            } else {
                                $(this).removeClass('ui-state-disabled');
                                this.onclick = null;
                            }

                        }
                        $(this).find("[id]").setEnabled(value);

                    }
                    else {
                        if (text === "disabled") {
                            $(this).addClass('ui-state-disabled');
                            if ($(this).closest('li')) {
                                $(this).closest('li').addClass('ui-state-disabled');
                            }
                        } else {
                            $(this).removeClass('ui-state-disabled');
                            if ($(this).closest('li')) {
                                $(this).closest('li').removeClass('ui-state-disabled');
                            }
                        }
                        $(this).prop("disabled", text);
                    }

                } catch (e) {

                }
            });
        }
    };
})(jQuery);

(function ($) {
    "use strict";
    $.fn.refresh = function (action) {
        if (action == null)
            action = "refresh";
        return this.each(function () {
            var s = "$(this).{0}('refresh');";
            var type;
            try {
                switch (action) {
                    case "refresh":
                        type = $(this).getType();
                        if (type != null) {
                            eval(format(s, type));
                        }
                        break;
                    case "checkedRefresh":
                        $(this).click();
                        break;
                    default:
                }
            } catch (e) {

            }
        });
    };
})(jQuery);

function setAttribute_(id, name, val) {
    "use strict";
    var elem = $(document).find('[id="' + id + '"]');
    if (elem.size() === 0) return;

    if (elem.attr("apperytype") === "object") {
        if (elem.attr("name") !== undefined && Apperyio !== undefined) {
            Apperyio(elem.attr("name")).attr(name, val);
            if (Apperyio(elem.attr("name")).refresh !== undefined) {
                Apperyio(elem.attr("name")).refresh();
            }
        }
    } else if (elem.attr("apperytype") === "marker") {
        elem.attr(name, val);
        if (Apperyio(elem.attr("reRender")) !== undefined && Apperyio(elem.attr("reRender")).refresh !== undefined) {
            Apperyio(elem.attr("reRender")).refresh();
        }
    } else if (elem.data('role') === 'flipswitch' && name === 'toggled') {
        // Slider component "toggled" property must be processed through "value" property
        elem.val(val === "true" ? "on" : "off");
        elem.flipswitch("refresh");
    } else if (elem[0].tagName === "OPTION" && name === "label") {
        elem.text(val).parent().refresh();
        if (Apperyio(elem.attr("reRender")) !== undefined && Apperyio(elem.attr("reRender")).refresh !== undefined) {
            Apperyio(elem.attr("reRender")).refresh();
        }
    } else {
        if (jQuery.inArray(name, __GLOBAL_ATTRIBUTES) > -1 || jQuery.inArray(name, __JQM_DATA_ATTRIBUTES) > -1) {
            elem.attr(name, val);
            if (Apperyio(elem.attr("reRender")) != undefined && Apperyio(elem.attr("reRender")).refresh !== undefined) {
                Apperyio(elem.attr("reRender")).refresh();
            }
        } else {
            if (elem[0].tagName === "A" && name === "src" && elem.find("img:first")) {
                elem.find("img:first").prop(name, val);
            } else if (name === "checked" && elem.prop("tagName") === "INPUT" && (elem.prop("type") === "radio"
                || elem.prop("type") === "checkbox")) {
                elem.parent().parent().setAttr(name, str2Bool(val));
            } else if (name === "selectedOption" && elem.data("role") === "fieldcontain") {
                var valuesArr = [];
                try {
                    valuesArr = JSON.parse(val);
                    if ({}.toString.call(valuesArr) !== "[object Array]") {
                        valuesArr = [val];
                    }
                } catch (e) {
                    valuesArr = [val];
                }
                elem.find('.ui-controlgroup-controls input').each(function () {
                    var $this = $(this),
                        checked = jQuery.inArray($this.val(), valuesArr) >= 0;
                    $this.closest('.ui-controlgroup-controls > span').setAttr("checked", checked);
                });
            } else if (elem[0].tagName == "IFRAME" && $(document).find('[id="' + id + '"]').data("youtube-player-object")) {
                var elem = $(document).find('[id="' + id + '"]'),
                    ytObj = elem.data("youtube-player-object");
                switch (name) {
                    case 'videoId':
                        if (ytObj.cueVideoById) {
                            ytObj.cueVideoById(val);
                        } else {
                            elem.prop(name, val);
                        }
                        break;
                    default:
                        elem.prop(name, val);
                }
            } else {
                elem.prop(name, val);
            }
        }
    }
}