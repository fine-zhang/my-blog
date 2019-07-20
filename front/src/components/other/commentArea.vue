<template>
  <div class="comment-area">
    <div class="show-tip" v-if="curComments.length === 0">即使不成功，也不至于空白。 ————三毛</div>
    <div class="comment-item" v-for="(item,index) in curComments" :key="index">
      <div class="info">
        <img src="/static/image/other/用户.svg" alt />
        <div class="user-info">
          <div class="name">
            {{item.username}}
            <div class="reply" v-if="item.parent > 0">回复 {{item.parentname}}</div>
          </div>
          <div class="time">发表于 {{item.ctime}}</div>
        </div>
      </div>
      <div class="text">{{item.comment}}</div>
      <div class="reply-wrapper">
        <div class="btn">
          <a href="#write" @click="reply(item)">回复</a>
        </div>
      </div>
    </div>
    <toPage :dataLen="comments.length" @getCurIndex="getCurIndex" ref="topage" v-if="this.flag" />
    <div class="write-area" id="write">
      <div class="reply">to:{{parentname}}</div>
      <textarea v-model="content"></textarea>
      <div class="input-wrapper">
        <label for="name">
          <img src="/static/image/other/nickname.svg" alt />
        </label>
        <input type="text" id="name" v-model="name" placeholder="昵称" />
      </div>
      <div class="input-wrapper">
        <label for="email">
          <img src="/static/image/window/email.svg" alt />
        </label>
        <input type="text" id="email" v-model="email" placeholder="邮箱" />
      </div>
      <div class="send-wrapper">
        <div class="send" @click="checkEmail">首次评论需要邮箱验证</div>
        <div class="send" @click="sendComment()">发表评论</div>
      </div>
    </div>
  </div>
</template>
<script>
import toPage from "@/components/other/toPage.vue";
export default {
  components: {
    toPage
  },
  props: { id: Number },
  data() {
    return {
      parent: 0,
      parentname: "张正好。",
      content: "",
      name: "",
      email: "",
      curIndex: 1,
      curComments: [],
      comments: [],
      flag: false
    };
  },
  watch: {
    curIndex(curIndex) {
      const pre = (this.curIndex - 1) * 6;
      const next = this.curIndex * 6;
      this.curComments = this.comments.slice(pre, next);
    },
    id: function(newVal, oldVal) {
      this.id = newVal;
      this.getComment(this.id);
    }
  },
  computed: {
    dataLen() {
      return this.comments.length;
    }
  },
  methods: {
    getCurIndex(curIndex) {
      this.curIndex = curIndex;
    },
    sendComment(id, parent, parentname, name, email, content, ctime) {
      id = this.id;
      parent = this.parent;
      parentname = this.parentname;
      name = this.name;
      email = this.email;
      content = this.content;
      ctime = new Date().toLocaleString();
      var lock = this.checkFormat();
      if (lock === true) {
        this.axios({
          method: "get",
          url: "http://94.191.61.155:8081/getVisitor?email=" + email
        }).then(resp => {
          if (resp.data.data.length === 0) {
            alert("请先验证邮箱");
          } else {
            this.axios({
              method: "get",
              url:
                "http://94.191.61.155:8081/sendComment?id=" +
                id +
                "&parent=" +
                parent +
                "&parentname=" +
                parentname +
                "&username=" +
                name +
                "&email=" +
                email +
                "&content=" +
                content +
                "&ctime=" +
                ctime
            }).then(resp => {
              if (resp.data.status === "success") {
                this.parent = 0;
                this.parentname = "张正好。";
                this.getComment(this.id).then(() => {
                  this.curIndex = Math.ceil(this.comments.length / 6);
                  this.getCurIndex(this.curIndex);
                  this.pageMove(this.curIndex);
                });
              }
            });
          }
        });
      } else {
        alert(lock);
      }
    },
    getComment(id) {
      return this.axios({
        method: "get",
        url: "http://94.191.61.155:8081/getComment?id=" + id
      })
        .then(resp => {
          this.comments = resp.data.data;
          this.curComments = this.comments.slice(
            (this.curIndex - 1) * 6,
            this.curIndex * 6
          );
          this.flag = true;
        })
        .catch(resp => {
          console.log(resp);
        });
    },
    pageMove(curIndex) {
      this.$refs.topage.pageMove(curIndex);
    },
    reply(parent) {
      this.parent = parent.id;
      this.parentname = parent.username;
    },
    checkEmail(name, email) {
      name = this.name;
      email = this.email;
      this.axios({
        method: "get",
        url: "http://94.191.61.155:8081/getVisitor?email=" + email
      }).then(resp => {
        if (resp.data.data.length === 0) {
          this.axios({
            method: "get",
            url:
              "http://94.191.61.155:8081/sendEmail?name=" +
              name +
              "&email=" +
              email
          });
          setTimeout(function() {
            alert("邮件已发送到您的邮箱，请及时验证");
          }, 2000);
        } else {
          alert("已验证过邮箱");
        }
      });
    },
    checkFormat() {
      var lock = true;
      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
      var arr = [this.content, this.name, this.email];
      var email = this.email;
      arr.forEach((item, index, arr) => {
        arr[index] = item.replace(/(^\s*)|(\s*$)/g, "");
      });
      if (arr[0] == null || arr[0] == "") {
        lock = "评论不能为空";
        return lock;
      }
      if (arr[1] == null || arr[1] == "") {
        lock = "昵称不能为空";
        return lock;
      }
      if (arr[2] == null || arr[2] == "") {
        lock = "邮箱不能为空";
        return lock;
      } else {
        if (!reg.test(this.email)) {
          lock = "邮箱格式不正确";
          return lock;
        }
      }
      return lock;
    }
  },
  created() {
    this.getComment(this.id);
  }
};
</script>
<style lang="scss">
@import "@/assets/css/other/commentArea.scss";
</style>
