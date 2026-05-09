function pausePlayAudio(num) {
	var audios = [
		document.getElementById('audio1'),
		document.getElementById('audio2'),
		document.getElementById('audio3')
	];
	
	if (audios[num].paused) {
		audios[num].play();
		audios.forEach((audio, index) => {
			if(index !== num && !audio.paused) {
				audio.pause();
			}
		});
	} else {
		audios[num].pause();
	}
}