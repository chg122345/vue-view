<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <nav-top></nav-top>
        <nav-head></nav-head>
      </el-col>
      <div class="line"></div>
      <div class="hidden-sm-and-down">
        <el-col :span="20" :offset="2">
          <el-row :gutter="20">
            <el-col :span="16">

              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>置顶</span>
                </div>
                <div v-for="(post,index) in topPost" :key="index" class="text item">
                  <el-row :gutter="20">
                    <el-col :span="4">
                      <img src="../../assets/logo.png" width="50px;" height="50px;"/>
                    </el-col>
                    <el-col :span="20">
                     <div>
                       <el-tag size="mini"  type="success" v-text="post.type"></el-tag>
                       <router-link :to="'/post/'+post.id" v-text="post.title"></router-link>
                       <el-tag size="mini"  type="danger" style="float: right">精贴</el-tag>
                     </div>
                     <div>
                      {{post.user.name}}
                       <el-tag type="warning" size="mini" icon="el-icon-delete" round v-text="post.user.title"></el-tag>
                        {{post.created}}
                       <i style="float: right;font-size: 18px; color: #f0f0f0" class="icon-31wangwang">{{post.commentCount}}</i>
                     </div>
                    </el-col>
                  </el-row>
                </div>
              </el-card>
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span style="color:#30B08F">综合</span>
                  <el-button style="float: right; padding: 3px 0" type="text">按热议</el-button>
                </div>
                <div v-for="(post,index) in topPost" :key="index" class="text item">
                  <el-row :gutter="20">
                    <el-col :span="4">
                      <img src="../../assets/logo.png" width="50px;" height="50px;"/>
                    </el-col>
                    <el-col :span="20">
                      <div>
                        <el-tag size="mini"  type="success" v-text="post.type"></el-tag>
                        <router-link :to="'/post/'+post.id" v-text="post.title"></router-link>
                        <el-tag size="mini"  type="danger" style="float: right">精贴</el-tag>
                      </div>
                      <div>
                        {{post.user.name}}
                        <el-tag type="warning" size="mini" icon="el-icon-delete" round v-text="post.user.title"></el-tag>
                        {{post.created}}
                        <i style="float: right;font-size: 18px; color: #f0f0f0" class="icon-31wangwang">{{post.commentCount}}</i>
                      </div>
                    </el-col>
                  </el-row>
                </div>

                <el-pagination
                  background
                  layout="prev, pager, next"
                  :total="1000" style="margin-top: 10px;">
                </el-pagination>
              </el-card>

            </el-col>
            <el-col :span="8">
              <nva-right></nva-right>
            </el-col>
          </el-row>
        </el-col>
      </div>
      <div class="hidden-md-and-up">
        <el-col :span="24">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>置顶</span>
            </div>
            <div v-for="(post,index) in topPost" :key="index" class="text item">
              <el-row :gutter="20">
                <el-col :span="4">
                  <img src="../../assets/logo.png" width="50px;" height="50px;"/>
                </el-col>
                <el-col :span="20">
                  <div>
                    <el-tag size="mini"  type="success" v-text="post.type"></el-tag>
                    <a type="text" v-text="post.title"></a>
                    <el-tag size="mini"  type="danger" style="float: right">精贴</el-tag>
                  </div>
                  <div>
                    {{post.user.name}}
                    <el-tag type="warning" size="mini" icon="el-icon-delete" round v-text="post.user.title"></el-tag>
                    {{post.created}}
                    <i style="float: right;font-size: 18px; color: #f0f0f0" class="icon-31wangwang">{{post.commentCount}}</i>
                  </div>
                </el-col>
              </el-row>
            </div>
          </el-card>

          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>综合</span>
              <el-button style="float: right; padding: 3px 0" type="text">按热议</el-button>
            </div>
            <div v-for="(post,index) in topPost" :key="index" class="text item">
              <el-row :gutter="20">
                <el-col :span="4">
                  <img src="../../assets/logo.png" width="50px;" height="50px;"/>
                </el-col>
                <el-col :span="20">
                  <div>
                    <el-tag size="mini"  type="success" v-text="post.type"></el-tag>
                    <a type="text" v-text="post.title"></a>
                    <el-tag size="mini"  type="danger" style="float: right">精贴</el-tag>
                  </div>
                  <div>
                    {{post.user.name}}
                    <el-tag type="warning" size="mini" icon="el-icon-delete" round v-text="post.user.title"></el-tag>
                    {{post.created}}
                    <i style="float: right;font-size: 18px; color: #f0f0f0" class="icon-31wangwang">{{post.commentCount}}</i>
                  </div>
                </el-col>
              </el-row>
            </div>

            <el-pagination
              background
              small
              layout="prev, pager, next"
              :total="1000" style="margin-top: 10px;">
            </el-pagination>
          </el-card>

          <nva-right></nva-right>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
  import NavTop from '../public/NvaTop'
  import NavHead from '../public/NvaHead'
  import NvaRight from '../public/NvaRight'

  export default {
    name: "Home",
    components: {
      NavTop,
      NavHead,
      NvaRight
    },
    data() {
      return {
        topPost: [
          {id:1,title:'这是标题',type:'分类',created:'2018-10-30',commentCount:50,user:{name:'JL',title:'VIP9'}},
          {id:2,title:'这是标题02',type:'分类02',created:'2018-10-31',commentCount:28,user:{name:'JL02',title:'VIP8'}},
        ],
      }
    }
  }
</script>

<style scoped>
  .avatar {
    width: 50px;
    height: 50px;
    background-color: #26a2ff;
  }
</style>
