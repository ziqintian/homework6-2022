var video = document.querySelector("#player1");

// Page load
window.addEventListener("load", function() {
	console.log("Good job opening the window")
	// turn off autoplay
	video.autoplay = false;
	// turn off looping
	video.loop = false;
});

// Play Button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	// update the volume information
	document.querySelector("#volume").innerHTML = video.volume*100 + "%";
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function(){
	console.log("Pause Video");
	video.pause();
});

// Slow Down
document.querySelector("#slower").addEventListener("click", function(){
	console.log("Slower Video");
	video.playbackRate *= 0.95;
	console.log("The speed of the video is", video.playbackRate);
});

// Speed Up
document.querySelector("#faster").addEventListener("click", function(){
	console.log("Faster Video");
	video.playbackRate /= 0.95;
	console.log("The speed of the video is", video.playbackRate);
});

// Skip Ahead
document.querySelector("#skip").addEventListener("click", function(){
	console.log("Skip 15 seconds");
	video.currentTime += 15;
	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
	}
	console.log("The current location of the video is", video.currentTime);
});

// Mute
document.querySelector("#mute").addEventListener("click", function(){
	console.log("Mute Video");
	if (video.muted === true) {
		video.muted = false;
		console.log("Unmuted the Video");
		this.innerHTML = "Mute";
	} else {
		video.muted = true;
		console.log("Muted the Video");
		this.innerHTML = "Unmute";
	}
});

// Volume Slider
document.querySelector("#slider").addEventListener("click", function(){
	console.log("Select volume");
	console.log("The current volume is", this.value);
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

// Styled
document.querySelector("#vintage").addEventListener("click", function(){
	console.log("Add filter");
	video.classList.add("oldSchool");
})

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Remove filter");
	video.classList.remove("oldSchool");
})

