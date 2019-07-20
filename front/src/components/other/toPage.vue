<template>
  <div class="toPage-wrapper" v-if="dataLen > 6">
    <div class="btn">
      <img src="/static/image/other/prev.svg" @click="pageMove('prev')" alt>
    </div>
    <ul class="page-box">
      <li
        :class="index + 1 === curIndex ? 'cur-item' : 'page-item'"
        v-for="(item, index) in curPageNum"
        :key="item"
        @click="pageMove(item)"
      >{{item}}</li>
    </ul>
    <div class="btn">
      <img src="/static/image/other/next.svg" @click="pageMove('next')" alt>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      curIndex: 1,
      curPageNum: 1
    }
  },
  props: { dataLen: Number },
  created () {
    this.curPageNum = Math.ceil(this.dataLen / 6)
  },
  watch: {
    dataLen (curLen) {
      this.curPageNum = Math.ceil(curLen / 6)
    },
    curIndex (curIndex) {
      this.$emit('getCurIndex', curIndex)
    }
  },
  methods: {
    pageMove (flag) {
      if (flag === 'prev') {
        if (this.curIndex > 1) {
          this.curIndex--
        }
      } else if (flag === 'next') {
        if (this.curIndex < this.curPageNum) {
          this.curIndex++
        }
      } else {
        this.curIndex = flag
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/other/toPage.scss";
</style>
