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
    console.log(value)
    // console.log(new Date(value))
    let time = value.split('T')[0]
    return `${new Date(time.replace(new RegExp(/-/gm), '/')).getFullYear()}/${new Date(time.replace(new RegExp(/-/gm), '/')).getMonth() + 1}/${new Date(time.replace(new RegExp(/-/gm), '/')).getDate()}`
  }
});