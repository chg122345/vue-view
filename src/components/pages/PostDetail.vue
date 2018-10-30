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
                  <span>
                    <div v-text="post.title"></div>
                    <div>
                      <el-tag size="mini" type="danger">超小标签</el-tag>
                      <el-tag size="mini" type="success">超小标签</el-tag>
                      <el-tag size="mini" type="warning">超小标签</el-tag>
                      <el-tag size="mini">超小标签</el-tag>
                      <i style="float: right;font-size: 18px; color: #eee9f0" class="icon-31wangwang">{{post.commentCount}}</i>
                    </div>
                  </span>

                </div>
                <div class="text item">
                  <div style="margin-top:-18px;  margin-bottom:20px; background-color: #f0f0f0">
                    <el-row :gutter="20">
                      <el-col :span="4">
                        <img src="../../assets/logo.png" width="50px;" height="50px;"/>
                      </el-col>
                      <el-col :span="20">
                        <div>
                          {{post.user.name}}
                          <el-tag type="warning" size="mini" icon="el-icon-delete" round v-text="post.user.title"></el-tag>
                          {{post.created}}
                          <i style="float: right;font-size: 18px; color: #f0f0f0" class="icon-31wangwang">{{post.commentCount}}</i>
                        </div>
                      </el-col>
                    </el-row>
                  </div>
                  content
                </div>
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
                  <span>
                    <div v-text="post.title"></div>
                    <div>
                      <el-tag size="mini" type="danger">超小标签</el-tag>
                      <el-tag size="mini" type="success">超小标签</el-tag>
                      <el-tag size="mini" type="warning">超小标签</el-tag>
                      <el-tag size="mini">超小标签</el-tag>
                      <i style="float: right;font-size: 18px; color: #eee9f0" class="icon-31wangwang">{{post.commentCount}}</i>
                    </div>
                  </span>

            </div>
            <div class="text item">
              <div style="margin-top:-18px; margin-bottom:20px; background-color: #f0f0f0">
                <el-row :gutter="20">
                  <el-col :span="4">
                    <img src="../../assets/logo.png" width="50px;" height="50px;"/>
                  </el-col>
                  <el-col :span="20">
                    <div>
                      {{post.user.name}}
                      <el-tag type="warning" size="mini" icon="el-icon-delete" round v-text="post.user.title"></el-tag>
                      {{post.created}}
                      <i style="float: right;font-size: 18px; color: #f0f0f0" class="icon-31wangwang">{{post.commentCount}}</i>
                    </div>
                  </el-col>
                </el-row>
              </div>
              content
            </div>
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
    name: "PostDetail",
    mounted(){
      let id=this.$route.params.id
      console.log(id);
    },
    components: {
      NavTop,
      NavHead,
      NvaRight
    },
    data() {
      return {
        post: {
          title:'这是标题',
          type:'分类',
          created:'2018-10-30',
          commentCount:50,
          user:{name:'JL',title:'VIP9'}
          },
      }
    }
  }
</script>

<style scoped>

</style>
