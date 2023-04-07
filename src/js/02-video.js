import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle'; 

const iframe =document.querySelector('#vimeo-player'); 
const player = new Player(iframe); 

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(data) {
  const time = data.seconds;
  const deleyTime = 1000;
  localStorage.setItem(VIDEO_CURRENT_TIME, time);
}, deleyTime));

const savedTime = localStorage.getItem(VIDEO_CURRENT_TIME);
if (savedTime) {
  player.setCurrentTime(savedTime);
}