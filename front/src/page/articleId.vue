<template>
  <div class="article-wrap">
    <div class="article-item">
      <div class="article-title">{{IdArticle.title}}</div>
      <div class="info-box">
        <div class="info-item">
          <img src="/static/image/recommend/表.svg" alt>
          {{IdArticle.ctime}}
        </div>
        <div class="info-item">
          <img src="/static/image/recommend/火.svg" alt>
          {{IdArticle.views}}
        </div>
        <div class="info-item">
          <img src="/static/image/recommend/喜欢.svg" alt>
          {{likesNum}}
        </div>
      </div>
      <div class="info-box">
        <div class="info-item">
          <img src="/static/image/recommend/作者.svg" alt>
          {{IdArticle.author}}
        </div>
        <div class="info-item">
          <img src="/static/image/recommend/标签.svg" alt>
          {{IdArticle.tag}}
        </div>
      </div>
      <div class="img-box">
        <img :src="IdArticle.imgsrc" alt>
      </div>
      <div class="articlecontent" >
        <div v-html="IdArticle.content"></div>
      </div>
      <div class="praise" @click="addlikes(IdArticle.id)">点赞</div>
    </div>
    <CommentArea :id="IdArticle.id" v-if="this.flag"/>
  </div>
</template>
<script>
import CommentArea from "@/components/other/commentArea.vue";
export default {
  components: {
    CommentArea
  },
  data() {
    return {
      IdArticle: {},
      likesNum: null,
      flag: false,
      lock: true
    };
  },
  created() {
    this.addViews(this.$route.params.id).then(() => {
      this.getArticleById(this.$route.params.id);
    });
  },
  watch: {
    $route(to, from) {
      this.addViews(to.params.id).then(() => {
        this.getArticleById(to.params.id);
      });
    }
  },
  methods: {
    getArticleById: function(id) {
      this.axios({
        method: "get",
        url: "http://94.191.61.155:8081/getArticleById?id=" + id
      })
        .then(resp => {
          this.IdArticle = resp.data.data[0];
          this.likesNum = this.IdArticle.likes;
          this.flag = true;
        })
        .catch(resp => {
          console.log(resp);
        });
    },
    addlikes: function(id) {
      if (this.lock) {
        this.lock = false;
        this.axios({
          method: "get",
          url: "http://94.191.61.155:8081/addLikes?id=" + id
        }).then(() => {
          this.likesNum++;
          setTimeout(() => {
            this.lock = true;
          }, 1000);
        });
      }
    },
    addViews(id) {
      return this.axios({
        method: "get",
        url: "http://94.191.61.155:8081/addViews?id=" + id
      });
    }
  }
};
</script>
<style lang="scss">
@import "@/assets/css/page/articleId.scss";
</style>
