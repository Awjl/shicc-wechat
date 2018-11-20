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
    return `${new Date(value).getFullYear()}年${new Date(value).getMonth() + 1}月${new Date(value).getDate()}日`
  }
});