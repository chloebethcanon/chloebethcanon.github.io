var video = document.querySelector("#player1");
var currentVolume = document.querySelector("#volume");
var muteButton = document.querySelector("#mute");
var slider = document.querySelector("#slider");

window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

// play video and update volume information
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

	console.log(video.currentTime);
	console.log("Volume is " + video.volume);
	currentVolume.innerHTML = (video.volume * 100) + "%";
});

// pause video
document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

// slow down video by 5%
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= .95;
	console.log("New video speed is " + video.playbackRate);
});

// spped up video by 5%
document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate /= .95;
	console.log("New video speed is " + video.playbackRate);
});

// set video to loop and skip ahead 15 seconds
document.querySelector("#skip").addEventListener("click", function() {
	video.loop = true;
	video.currentTime += 15;
	console.log("Current time " + video.currentTime);
});

// enable and disable mute; update button text
document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted == true) {
		video.muted = false;
		muteButton.innerHTML = "Mute";
	}
	else {
		video.muted = true
		muteButton.innerHTML = "Unmute";
	}
});

// change volumne and update volumn information
document.querySelector("#slider").addEventListener("click", function() {
	console.log(slider.value);
	video.volume = slider.value / 100;
	currentVolume.innerHTML = (video.volume * 100) + "%";
});

// add oldSchool style to video element
document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
	console.log(video.className);
});

// remove oldSchool style from video element
document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
	console.log(video.className);
});

