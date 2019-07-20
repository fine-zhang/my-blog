<template>
  <div class="article-wrap">
    <div class="article-item" v-for="(item,index) in curRecommendList" :key="index">
      <div class="article-title">{{item.title}}</div>
      <div class="info-box">
        <div class="info-item">
          <img src="/static/image/recommend/表.svg" alt />
          {{item.ctime}}
        </div>
        <div class="info-item">
          <img src="/static/image/recommend/火.svg" alt />
          {{item.views}}
        </div>
        <div class="info-item">
          <img src="/static/image/recommend/喜欢.svg" alt />
          {{item.likes}}
        </div>
      </div>
      <div class="info-box">
        <div class="info-item">
          <img src="/static/image/recommend/作者.svg" alt />
          {{item.author}}
        </div>
        <div class="info-item">
          <img src="/static/image/recommend/标签.svg" alt />
          {{item.tag}}
        </div>
      </div>
      <div class="img-box">
        <img :src="item.imgsrc" alt />
      </div>
      <div class="article-content">
        <div v-html="item.content"></div>
      </div>
      <router-link
        :to="{name:'articleId',params:{tagname:item.tag,id:item.id}}"
        tag="div"
        class="jump"
      >阅读全文</router-link>
    </div>
    <toPage :dataLen="recommendList.length" @getCurIndex="getCurIndex" v-if="this.flag" />
  </div>
</template>
<script>
import toPage from "@/components/other/toPage.vue";
export default {
  components: {
    toPage
  },
  data() {
    return {
      recommendList: [],
      curRecommendList: [],
      curIndex: null,
      flag: false
    };
  },
  created() {
    this.axios({
      method: "get",
      url: "http://94.191.61.155:8081/getArticle"
    })
      .then(resp => {
        this.recommendList = resp.data.data;
        this.curRecommendList = this.recommendList.slice(
          (this.curIndex - 1) * 6,
          this.curIndex * 6
        );
        this.curIndex = 1;
        this.flag = true;
      })
      .catch(resp => {
        console.log(resp);
      });
  },
  computed: {
    dataLen() {
      return this.articleList.length;
    }
  },
  methods: {
    getCurIndex(curIndex) {
      this.curIndex = curIndex;
    }
  },
  watch: {
    curIndex(curIndex) {

      const pre = (this.curIndex - 1) * 6;
      const next = this.curIndex * 6;
      this.curRecommendList = this.recommendList.slice(pre, next);
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/page/article.scss";
</style>
