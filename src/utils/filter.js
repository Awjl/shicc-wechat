import Vue from 'vue'

Vue.filter('formatFee', function (value) {
  if (value) {
    return (value / 100).toFixed(2);
  } else {
    return 0;
  }
});
Vue.filter('formatDate', function (value) {
  if (value) {
    let time = value.split('T')[0]
    return `${new Date(time.replace(new RegExp(/-/gm), '/')).getFullYear()}/${new Date(time.replace(new RegExp(/-/gm), '/')).getMonth() + 1}/${new Date(time.replace(new RegExp(/-/gm), '/')).getDate()}`
  }
});

Vue.filter('timefliters', function (value) {
  if (value) {
    let secondTime = parseInt(value)
    let minuteTime = 0
    let hourTime = 0
    if (secondTime > 60) {
      minuteTime = parseInt(secondTime / 60)
      secondTime = parseInt(secondTime % 60)
      if (minuteTime > 60) {
        hourTime = parseInt(minuteTime / 60)
        minuteTime = parseInt(minuteTime % 60)
      }
    }
    let result = '' + parseInt(secondTime) + '秒'

    if (minuteTime > 0) {
      result = '' + parseInt(minuteTime) + '分' + result
    }
    if (hourTime > 0) {
      result = '' + parseInt(hourTime) + '小时' + result
    }
    return result
  }
});