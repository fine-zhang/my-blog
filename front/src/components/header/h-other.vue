<template>
  <div class="h-other">
    <div class="M-title">张正好。</div>
    <ul class="nav">
      <router-link class="nav-item" tag="li" :to="{name:'home'}">主页</router-link>
      <router-link class="nav-item" tag="li" :to="{name:'article'}">文章</router-link>
      <router-link class="nav-item" tag="li" :to="{name:'about'}">关于</router-link>
      <router-link class="nav-item" tag="li" :to="{name:'comment'}">留言</router-link>
    </ul>
    <ul class="menu" @mouseenter="showMenu" @mouseleave="hideMenu">
      <li class="icon"> <img src="/static/image/header/menu.svg" ></li>
      <router-link v-show="canShow" class="menu-item" tag="li" :to="{name:'home'}">主页</router-link>
      <router-link v-show="canShow" class="menu-item" tag="li" :to="{name:'article'}">文章</router-link>
      <router-link v-show="canShow" class="menu-item" tag="li" :to="{name:'about'}">关于</router-link>
      <router-link v-show="canShow" class="menu-item" tag="li" :to="{name:'comment'}">留言</router-link>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      canShow: false
    };
  },
  methods: {
    showMenu() {
      this.canShow = true;
    },
    hideMenu() {
      this.canShow = false;
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/header/h-other.scss";
</style>
