<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-menu
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template slot="title">我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" disabled><i class="icon-31wangwang"></i>消息中心</el-menu-item>
          <el-menu-item index="7" class="nav-top-right"><i class="icon-xinlang"></i></el-menu-item>
          <el-menu-item index="6" class="nav-top-right"><i class="icon-weixin"></i></el-menu-item>
          <el-menu-item index="5" class="nav-top-right">注册</el-menu-item>
          <el-menu-item index="4" class="nav-top-right"><i class="icon-geren"></i>登录</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    <div class="line"></div>
  </div>
</template>

<script>
  /* 页面顶端导航模块*/
  export default {
    name: "NvaTop",
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>
  .nav_left {
    margin-left: 6%;
  }
  .nav_right {
    margin-right: 6%;
  }
  .nav-top-right{
    float: right;
  }
</style>
