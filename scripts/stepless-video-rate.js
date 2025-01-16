/**
 * 键盘倍速shift 1~9
 */
document.addEventListener('keydown', function (event) {
    let video = document.querySelector('video');

    if (event.shiftKey) {
        switch (event.key) {
            case '~':
                video.playbackRate = 0.5;
                break;
            case '!':
                video.playbackRate = 1;
                break;
            case '@':
                video.playbackRate = 2;
                break;
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

    // 复制视频时间到剪贴板
    if (event.ctrlKey) {
        switch (event.key) {
            case '/':
                const baseUrl = window.location.origin + window.location.pathname;
                navigator.clipboard.writeText(baseUrl + "?t=" + video.currentTime)
                window.videoCurrentTime = video.currentTime
                break;
        }
    }

    // 回到具体时间
    if (event.key === 'b' || event.key === 'B') {
        if (video) {
            if (window.videoCurrentTime) {
                video.currentTime = videoCurrentTime
            } else {
                video.currentTime = 0
            }
        }
    }
});

