<template>
    <div>
        <el-row>
            <MyWindow />
        </el-row>
        <el-row>
            <Tags />
        </el-row>
        <el-row>
            <Hotlist />
        </el-row>
    </div>
</template>
<script>
import MyWindow from '@/components/main/mywindow.vue'
import Tags from '@/components/main/tags.vue'
import Hotlist from '@/components/main/hotlist.vue'
export default {
  components: {
    MyWindow,
    Tags,
    Hotlist
  }
}
</script>
<style lang="scss">

</style>
