<template>
  <div class="notlogin">
    <p>瞅啥啊</p>
    <p>赶紧去登录啊</p>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
.notlogin {
  width:300px;
  height: 300px;
  background: rgba(000, 000, 000, 0.5);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  line-height: 40px;
  border-radius: 10px;
}
</style>
