import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/layout/index.vue'
import NoIndex from '@/layout/noindex.vue'
import Article from '@/page/article.vue'
import About from '@/page/about.vue'
import Comment from '@/page/comment.vue'
import Tags from '@/components/main/tags.vue'
import ArticleId from '@/page/articleId.vue'



Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [

    {
      path: '/',
      name: 'home',
      component: Index,
    },
    {
      path: '/home',
      name: 'home',
      component: Index,
    },
    {
      path: '/other',
      name: 'NoIndex',
      component: NoIndex,
      children: [{
        path: '/article',
        name: 'article',
        component: Article,
        children: [{
          path: '/article/:tagname',
          name: 'tags',
          component: Tags
        }]
      }, {
        path: '/article/:tagname/:id',
        name: 'articleId',
        component: ArticleId
      }, {
        path: '/about',
        name: 'about',
        component: About
      }, {
        path: '/comment',
        name: 'comment',
        component: Comment
      }]
    }

  ]
})
