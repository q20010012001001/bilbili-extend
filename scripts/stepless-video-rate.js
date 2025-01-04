/**
 * 键盘倍速shift 1~9
 */
document.addEventListener('keydown', function (event) {
  let video = document.querySelector('video');

  if (event.shiftKey) {
    switch (event.key) {
      case '#':
        video.playbackRate = 3;
        break;
      case '$':
        video.playbackRate = 4;
        break;
      case '%':
        video.playbackRate = 5;
        break;
      case '^':
        video.playbackRate = 6;
        break;
      case '&':
        video.playbackRate = 7
        break;
      case '*':
        video.playbackRate = 8;
        break;
      case '(':
        video.playbackRate = 9;
        break;
    }
  }
});