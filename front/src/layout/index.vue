<template>
  <div class="wrapper">
    <el-container>
      <el-header style="height: 24rem;">
        <el-row>
          <Slider />
        </el-row>
        <el-row>
          <top />
        </el-row>
      </el-header>
      <el-main>
        <el-col :span="6" class="Mleft">
          <Mleft />
        </el-col>
        <el-col :span="18" class="Recommend">
          <Recommend />
        </el-col>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Top from "@/components/header/top.vue";
import Slider from "@/components/header/slider.vue";
import Footer from "@/components/footer/footer.vue";
import Mleft from "@/components/main/mleft.vue";
import Recommend from "@/components/main/recommend.vue";
export default {
  components: {
    Top,
    Slider,
    Footer,
    Mleft,
    Recommend
  }
};
</script>
<style lang="scss">
@import "@/assets/css/layout/index.scss";
</style>
