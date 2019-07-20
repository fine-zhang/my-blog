<template>
  <div class="tags">
    <router-link tag="div" v-for="(item,index) in tagsList" :key="index" :to="{name:'tags',params:{tagname:item.type}}" class="tag-item">{{item.tag}}</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      tagsList: []
    }
  },
  created () {
    this.axios({
      method: 'get',
      url: 'http://94.191.61.155:8081/getTags'
    }).then((resp) => {
      this.tagsList = resp.data.data
    }).catch((resp) => {
      console.log(resp)
    })
  }
}
</script>
<style lang="scss">
@import "@/assets/css/main/tags.scss";
</style>
