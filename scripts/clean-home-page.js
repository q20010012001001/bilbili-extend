/**
 * 去除大屏推荐轮播图
 */
let recommendedSwipe = document.getElementsByClassName('recommended-swipe')[0];
if (recommendedSwipe) {
    recommendedSwipe.remove();
}

let loadMoreAnchor = document.querySelector('.load-more-anchor');
if (loadMoreAnchor) {
    loadMoreAnchor.classList.add('biliplus-load-more-anchor');
    const scroll = new Event('scroll');
    dispatchEvent(scroll);
    loadMoreAnchor.classList.remove('biliplus-load-more-anchor');
}