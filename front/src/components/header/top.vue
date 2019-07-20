<template>
  <div>
    <ul>
      <router-link :to="{name:'home'}" tag="li" class="list-item">
        <div class="wrapper">
          <img src="/static/image/header/主页.svg" class="image">
          <div>
            <span>主页</span>
          </div>
        </div>
      </router-link>

      <router-link :to="{name:'article'}" tag="li" class="list-item">
        <div class="wrapper">
          <img src="/static/image/header/写文章.svg" class="image">
          <div>
            <span>文章</span>
          </div>
        </div>
      </router-link>

      <router-link :to="{name:'about'}" tag="li" class="list-item">
        <div class="wrapper">
          <img src="/static/image/header/关于我.svg" class="image">
          <div>
            <span>关于</span>
          </div>
        </div>
      </router-link>

      <router-link :to="{name:'comment'}" tag="li" class="list-item">
        <div class="wrapper">
          <img src="/static/image/header/留言.svg" class="image">
          <div>
            <span>留言</span>
          </div>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {}
</script>
<style lang="scss">
@import "@/assets/css/header/top.scss";
</style>
