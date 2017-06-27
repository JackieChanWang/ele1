/**
 * Created by wangtao on 2017/6/27.
 */
window.addEventListener('orientationchange', setRem)
window.addEventListener('resize', setRem)
setRem()
function setRem () {
  let html = document.querySelector('html')
  let width = html.getBoundingClientRect().width
  html.style.fontSize = width / 16 + 'px'
}
