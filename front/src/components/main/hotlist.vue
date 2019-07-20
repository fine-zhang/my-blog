<template>
  <div class="article-list">
    <router-link
      tag="div"
      :to="{name:'articleId',params:{tagname:item.tag,id:item.id}}"
      class="article-item"
      v-for="(item,index) in hotlist"
      :key="index"
    >
      <div class="num">{{item.views}}</div>
      <div class="title">{{item.title}}</div>
      <div class="date">{{item.ctime}}</div>
    </router-link>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hotlist: []
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "http://94.191.61.155:8081/getHotlist"
    }).then(res => {
      this.hotlist = res.data.data;
    });
  }
};
</script>
<style lang="scss">
@import "@/assets/css/main/hotlist.scss";
</style>
