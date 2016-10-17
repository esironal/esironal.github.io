/**
 * App object
 * This contains global settings
 */
webdesktop = {
    windows: {
        zIndexer: 1
    }
};

/**
 * Recalculates the windows' wrapper when the browser window is resized
 */
function recalcWindowPlayground()
{
    var oWindows = document.getElementById( 'windows' ),
        oTaskbar = document.getElementById( 'taskbar' );

    oWindows.style.height = window.innerHeight - document.getElementById( 'taskbar' ).offsetHeight + "px";
    oWindows.style.width = window.innerWidth + "px";

    document.getElementById( 'tasks' ).style.width = window.innerWidth - document.getElementById( 'sysclock' ).offsetWidth - oTaskbar.getElementsByClassName( 'start-btn' )[0].offsetWidth - 10 + "px";

    return oWindows;
}
recalcWindowPlayground();

window.onresize = function( event )
{
    recalcWindowPlayground()
}

/**
 * Updates the clock on the lower right of the desktop
 */
function updateClock()
{
    var oElem = document.getElementById( 'sysclock' );

    if( typeof oElem != 'undefined' )
    {
        var oDate = new Date(),
            oElemTime = document.createElement( 'span' ),
            oElemDate = document.createElement( 'span' );

        oElemTime.className = 'time';
        oElemTime.textContent = oDate.toTimeString().replace( /.*(\d{2}:\d{2})(:\d{2}).*/, "$1" );

        oElemDate.className = 'date';
        oElemDate.textContent = ( oDate.getDate() < 10 ? '0' : null ) + oDate.getDate() + '.' + ( oDate.getMonth() < 10 ? '0' : null ) + oDate.getMonth() + '.' + oDate.getFullYear();

        oElem.innerHTML = '';
        oElem.appendChild( oElemTime );
        oElem.appendChild( oElemDate );
    }
}
updateClock();
window.setInterval( updateClock, 999 );

var init = function() {
    // Fix: Set window to active that is in front
    window.setTimeout(
        function()
        {
            $( '#windows' ).find( '.window:last-child' ).data( 'desktopWindow' ).focus();
        },
        200 );
};