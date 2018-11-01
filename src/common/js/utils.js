import Vue from 'vue'

Vue.filter('Date', (val) => {
  if (!val) return ''
  return val.replace(new RegExp(/-/gm), '/')
})