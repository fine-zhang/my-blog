<template>
    <div class="comment-wrap">
        <el-row>
            <div class="comment-top">
            <div class="comment-title">留言</div>
            <img src="/static/image/other/留言.jpg" alt="">
        </div>
        </el-row>
        <el-row>
            <CommentArea :id="0" />
        </el-row>
    </div>
</template>
<script>
import CommentArea from '@/components/other/commentArea.vue'
export default {
  components: {
    CommentArea
  }
}
</script>
<style lang="scss">
@import "@/assets/css/page/comment.scss";
</style>
