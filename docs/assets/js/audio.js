

//variable for if audio is on
var audioOn = true;

function setAudio(audioOnNew) {
	audioOn = audioOnNew;
	if(audioOn) {
		document.getElementById('audio_toggle').innerHTML = '<a onClick="setAudio(false)" class="button special small" >Website Audio: ON</a>';
	} else {
		document.getElementById('audio_toggle').innerHTML = '<a onClick="setAudio(true)" class="button small" >Website Audio: OFF</a>';
	}
}
function onPlayClick(id) {
    var el = document.getElementById(id);
    if(el && el.volume == 0) {
        return;
    }
    var vids = document.querySelectorAll('[play_on_click]');
    for (const obj of vids) {
        obj.play();
        obj.volume = 0;
        obj.controls = false;
    }
    el.volume = 1;
}

function mouseoverBox(mousingIn, id, fade = true) {
    setMute(!mousingIn, id, fade);
    setLightBox(mousingIn, id);
}

function setMute(mute, id, fade = true) {
    if(mute == false && !audioOn) {
        return;
    }
    var el = document.getElementById(id);
    if(!fade) {
        el.muted = mute;
    }
    else if(mute) { //fade & mute
        const $audio = $(el);
        $audio.stop();
        $audio.animate({volume: 0}, 500);
    }
    else { //fade & unmute
        el.muted = false;
        const $audio = $(el);
        $audio.stop();
        $audio.animate({volume: 1}, 500);
    }
}

function setLightBox(lit, id) {
    var el = document.getElementById(id);
    var box = el.parentElement;
    const $box = $(box);
    if(lit) {
        $box.stop(false, true);
        $box.addClass("selected", 500);
    } else {
        $box.stop(false, true);
        $box.removeClass("selected", 500);
    }
}

$(document).ready(function () {

    $.fn.animateHighlight = function (highlightColor, duration) {
        var highlightBg = highlightColor || "#FFFF9C";
        var animateMs = duration || "fast"; // edit is here
        var originalBg = this.css("background-color");

        if (!originalBg || originalBg == highlightBg)
            originalBg = "#FFFFFF"; // default to white

        jQuery(this)
            .css("backgroundColor", highlightBg)
            .animate({ backgroundColor: originalBg }, animateMs, null, function () {
                jQuery(this).css("backgroundColor", originalBg); 
            });
    };
});
