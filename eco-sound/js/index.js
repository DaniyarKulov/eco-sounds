const playBtn = document.querySelector('.main-button');
const nightingale = document.querySelector('.nightingale');
const thrush = document.querySelector('.thrush');
const robin = document.querySelector('.robin');
const lark = document.querySelector('.lark');
const warbler = document.querySelector('.warbler');
const logo = document.querySelector('.header-logo');
const main = document.querySelector('.main');

const audio = new Audio();

function playAudio() {
	audio.src = '/assets/audio/drozd.mp3';
	audio.currentTime = 0;
	audio.play();
	isPlay = true;
}
let isPlay = false;

function pauseAudio() {
	audio.pause();
	isPlay = false;
}

function toggleBtn() {
	playBtn.classList.toggle('pause');

}
playBtn.addEventListener('click', toggleBtn);

playBtn.onclick = function () {
	isPlay === false ? playAudio() : pauseAudio();
}

function playNightingale() {
	audio.src = '/assets/audio/solovey.mp3';
	audio.currentTime = 0;
	audio.play();
	isPlay = true;
	playBtn.classList.add('pause');
	main.src = '/assets/img/solovey.jpg';

}
nightingale.addEventListener('click', playNightingale);


function playThrush() {
	audio.src = '/assets/audio/drozd.mp3';
	audio.currentTime = 0;
	audio.play();
	isPlay = true;
	playBtn.classList.add('pause');
}
thrush.addEventListener('click', playThrush);

function playRobin() {
	audio.src = '/assets/audio/zarynka.mp3';
	audio.currentTime = 0;
	audio.play();
	isPlay = true;
	playBtn.classList.add('pause');
}
robin.addEventListener('click', playRobin);

function playLark() {
	audio.src = '/assets/audio/javoronok.mp3';
	audio.currentTime = 0;
	audio.play();
	isPlay = true;
	playBtn.classList.add('pause');
}
lark.addEventListener('click', playLark);

function playWarbler() {
	audio.src = '/assets/audio/slavka.mp3';
	audio.currentTime = 0;
	audio.play();
	isPlay = true;
	playBtn.classList.add('pause');
}
warbler.addEventListener('click', playWarbler);

function playLogo() {
	audio.src = '/assets/audio/forest.mp3';
	audio.currentTime = 0;
	audio.play();
	isPlay = true;
	playBtn.classList.add('pause');
}
logo.addEventListener('click', playLogo);