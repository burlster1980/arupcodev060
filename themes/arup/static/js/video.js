
        var tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
 

var playingVideo = false;
var done = false;
var iterator = 0;
var pausedVideo = "";

function fnIsAppleMobile()
{
    if (navigator && navigator.userAgent && navigator.userAgent != null)
    {
        var strUserAgent = navigator.userAgent.toLowerCase();
        var arrMatches = strUserAgent.match(/(iphone|ipod|ipad|android)/);
        if (arrMatches != null)
             return true;
    } // End if (navigator && navigator.userAgent)

    return false;
} // End Function fnIsAppleMobile


window.onYouTubeIframeAPIReady = function() {
    $('.youtube-video').each(function(){
        var getYtID = $(this).data('video-id');
        var getHeight = $(this).data('video-height');
        var getAutoPlay = $(this).data('video-autoplay');
        if(!getHeight || getHeight % 1 !== 0 || getHeight < 200 ){
            getHeight =  "390";
        }

        iterator++;
        $(this).attr('id', 'player'+iterator);
        players.push(createPlayer({
            id: 'player'+iterator,
            height: getHeight,
            width: '100%',
            videoId: getYtID,
            events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
            }
        }));

    });
    if(players.length === $('.youtube-video').length){
        if(!fnIsAppleMobile()){
            $('.youtube-video').each(function(){
            var that = $(this);
            $(window).scroll(function() {
                if(isElementInViewport(that)){
                    $('.youtube-video').each(function (i) {
                        var getAutoPlay = $(this).data('autoplay');
                        if($(this).attr('id') === $(that).attr('id') && $(this).attr('id') !== pausedVideo && getAutoPlay == "1"){
                            players[i].playVideo();
                            players[i].mute();
                        }else{
                            //players[i].stopVideo();
                            players[i].pauseVideo();
                        }
                    });
                }
            });
        });
        }
    }else{
        console.log("videos not loaded");
    }

}
var players = new Array();
function createPlayer(playerInfo) {
    // Uncomment to play the first video if it is already in the viewport. This is different from data-autoplay!
    /*
    if(playerInfo.id.slice(-1)=='1')
        playerVars = { 'autoplay': 1, 'controls': 0, 'rel': 0, 'showinfo': 0, 'loop': 1, 'modestbranding': 1 };
    else
        playerVars = { 'autoplay': 0, 'controls': 0, 'rel': 0, 'showinfo': 0, 'loop': 1, 'modestbranding': 1 };
    */

    playerVars = { 'autoplay': 0, 'controls': 0, 'rel': 0, 'showinfo': 0, 'loop': 1, 'modestbranding': 1 };

    return new YT.Player(playerInfo.id, {
        height: playerInfo.height,
        width: playerInfo.width,
        videoId: playerInfo.videoId,
        playerVars,
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
            }
    });
}

function onPlayerReady(event) {
    // Play/pause video's which do not auto play for seamless playback
    if(event.target.a.src.search('autoplay=0')) {
        event.target.playVideo();
        event.target.pauseVideo();
    }
}

function onPlayerStateChange(event) {
    if(event.data === 2){
        pausedVideo = event.target.a.id;
    }
    if(event.data === 1){
        pausedVideo =  "";
    }
    if (event.data == YT.PlayerState.PLAYING && !done) {
        done = true;
    }
}

function isElementInViewport(el) {
    if (typeof jQuery === "function" && el instanceof jQuery) {
    // since im using jquery
        el = el[0];
    }
    var rect = el.getBoundingClientRect();
 return rect.bottom > 0 &&
        rect.right > 0 &&
        rect.left < (window.innerWidth || document.documentElement.clientWidth) &&
        rect.top < (window.innerHeight || document.documentElement.clientHeight);
}
