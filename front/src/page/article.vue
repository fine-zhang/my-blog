<template>
  <div class="recommend">
    <el-row>
      <div class="maxim">My life is brilliant!</div>
    </el-row>
    <el-row>
      <div class="r-wrap">
        <dl class="r-item" v-for="(item,index) in curArticleList" :key="index">
          <dt>
            <img :src="imgtype[item.tag]" alt>
          </dt>
          <dd>
            <router-link
              tag="div"
              :to="{name:'articleId',params:{tagname:item.tag,id:item.id}}"
              class="r-title"
            >{{item.title}}</router-link>
            <div class="article-info">
              <div class="item-info">
                <img src="/static/image/recommend/表.svg" alt>
                {{item.ctime}}
              </div>
              <div class="item-info">
                <img src="/static/image/recommend/火.svg" alt>
                {{item.views}}
              </div>
              <div class="item-info">
                <img src="/static/image/recommend/喜欢.svg" alt>
                {{item.likes}}
              </div>
            </div>
            <div class="article-info">
              <div class="item-info">
                <img src="/static/image/recommend/作者.svg" alt>
                {{item.author}}
              </div>
              <div class="item-info">
                <img src="/static/image/recommend/标签.svg" alt>
                {{item.tag}}
              </div>
            </div>
            <div class="article">
              <div v-html="item.content"></div>
              ......
            </div>
          </dd>
        </dl>
      </div>
    </el-row>
    <toPage :dataLen="articleList.length" @getCurIndex="getCurIndex" v-if="this.flag"/>
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
      articleList: [],
      curArticleList: [],
      curIndex: null,
      flag:false,
      imgtype: {
        javascript: "/static/image/recommend/js.svg",
        css: "/static/image/recommend/CSS.svg",
        html: "/static/image/recommend/HTML.svg",
        vue: "/static/image/recommend/Vue.svg",
        node: "/static/image/recommend/Nodejs.svg",
        网络: "/static/image/recommend/网络.svg",
        其它: "/static/image/recommend/Other.svg"
      }
    };
  },
  watch: {
    $route(to, from) {
      this.getArticleByTag(to.params.tagname);
    },
    curIndex(curIndex) {
      const pre = (this.curIndex - 1) * 6;
      const next = this.curIndex * 6;
      this.curArticleList = this.articleList.slice(pre, next);
    }
  },
  methods: {
    getArticleByTag: function(type) {
      this.axios({
        method: "get",
        url: "http://94.191.61.155:8081/getArticleByTag?type=" + type
      })
        .then(resp => {
          this.articleList = resp.data.data;
          this.curArticleList = this.articleList.slice((this.curIndex - 1) * 6, this.curIndex * 6);
          this.curIndex = 1;
          this.flag = true
        })
        .catch(resp => {
          console.log(resp);
        });
    },
    getCurIndex(curIndex) {
      this.curIndex = curIndex;
    }
  },
  created() {
    this.getArticleByTag(this.$route.params.tagname);
  }
};
</script>
<style lang="scss">
@import "@/assets/css/main/recommend.scss";
</style>
