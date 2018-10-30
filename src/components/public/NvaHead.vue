<template>
  <div style="background-color: white; margin-bottom: 10px;">
    <el-row :gutter="20">
      <div class="hidden-xs-only">
        <el-col :span="20" :offset="2">
          <el-button type="text" v-for="(menu,index) in menus" :index="menu.index" :key="index" class="nav-head">{{menu.name}}</el-button>
          <el-button type="primary" icon="el-icon-edit" circle style="float: right; margin-right: 5px;"></el-button>
          <el-input style="max-width: 200px; max-height: 30px; float: right;"
                    placeholder="请输入内容" v-model="input" >
            <i slot="suffix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </el-col>
      </div>
      <div class="hidden-sm-and-up">
        <el-col :span="24">
          <el-button type="text" v-for="(menu,index) in menus" :index="menu.index" :key="index" class="nav-head">{{menu.name}}</el-button>
          <el-input class="nav-head"
                    placeholder="请输入内容" v-model="input">
            <i slot="suffix" class="el-input__icon el-icon-search" @click.native="toSearch"></i>
          </el-input>
          <el-button type="primary" icon="el-icon-edit" circle style="float: right; margin-right: 5px;"></el-button>
        </el-col>
      </div>
    </el-row>
    <div class="line"></div>
  </div>
</template>

<script>
  /* 页面顶端导航模块*/
  export default {
    name: "NvaTop",
    data(){
      return {activeNum:'1',
      input: '',
        menus: [{name: "首页", index: '1'},
          {name: "提问", index: '2'},
          {name: "分享", index: '3'}
        ],
      }
    },
    methods: {
      toSearch(){
        alert(this.input)
      }
    }
  }
</script>

<style scoped>
  .nav-head {
    color: #000000;
    height: 40px;
    padding-right: 10px;
    margin-bottom: 5px;
  }
  .nav-top-right{
    float: right;
  }
</style>
