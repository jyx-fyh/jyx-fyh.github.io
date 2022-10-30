// 跟随系统时间实现自动切换黑暗模式与浅色模式
var BTXdateBTX = new Date();
var xiaoshiBAI = BTXdateBTX.getHours();
//晚上20点后早上6点之前为黑暗模式，其他情况为浅色模式
if (xiaoshiBAI >= 0 || xiaoshiBAI <= 24) {
  activateDarkMode()
  saveToLocal.set('theme', 'dark', 2)
  GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.day_to_night)
} else {
  activateLightMode()
  saveToLocal.set('theme', 'light', 2)
  GLOBAL_CONFIG.Snackbar !== undefined && btf.snackbarShow(GLOBAL_CONFIG.Snackbar.night_to_day)
}