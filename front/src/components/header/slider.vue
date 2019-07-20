<template>
  <div class="slider">
    <el-carousel height="20rem">
      <el-carousel-item v-for="(item,index) in imagelist" :key="index">
        <img :src="item.src" class="img">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import img from "../../../static/json/json.json"
export default {
  data () {
    return {
      imagelist: img.images
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/header/slider.scss";
</style>
