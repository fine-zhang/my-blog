<template>
  <div class="wrapper">
    <el-container>
      <el-header style="height: 4rem;">
        <Hother />
      </el-header>
      <el-main>
          <el-col :span="6">
            <Mleft/>
          </el-col>
          <el-col :span="18" class="other-page">
            <router-view></router-view>
          </el-col>
      </el-main>
      <el-footer>
        <Footer />
      </el-footer>
    </el-container>
  </div>
</template>
<script>
import Hother from '@/components/header/h-other.vue'
import Mleft from '@/components/main/mleft.vue'
import Footer from '@/components/footer/footer.vue'
export default {
  components: {
    Hother,
    Mleft,
    Footer
  }
}
</script>
<style lang="scss">
@import "@/assets/css/layout/noindex.scss";
</style>
