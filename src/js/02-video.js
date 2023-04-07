import Player from '@vimeo/player'; 
import throttle from 'lodash.throttle'; 

const iframe =document.querySelector('#vimeo-player'); 
const player = new Player(iframe); 

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(function(data) {
  const time = data.seconds;
  localStorage.setItem(VIDEO_CURRENT_TIME, time);
}, 1000));

const savedTime = localStorage.getItem(VIDEO_CURRENT_TIME);
if (savedTime) {
  player.setCurrentTime(savedTime);
}