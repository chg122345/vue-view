<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="24">
        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>温馨通道<i class="el-icon-view"></i></span>
          </div>
          <ul class="fly-panel-main fly-list-static">
            <li  v-for="o in 2" :key="o">
              <el-button href="https://github.com/chg122345/leopard" type="text" target="_blank">JLeopard 的 GitHub 仓库，欢迎Star</el-button>
            </li>

          </ul>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>本周热议<i class="icon-huo"  style="font-size: 18px;"></i></span>
          </div>
          <div v-for="o in 8" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>

        <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>友情连接 <i class="icon-lianjie" style="font-size: 18px;"></i></span>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{'列表内容 ' + o }}
          </div>
        </el-card>
      </el-col>
    </el-row>
    <div class="line"></div>
  </div>
</template>

<script>
  /* 页面顶端导航模块*/
  export default {
    name: "NvaTop",
    data(){
      return {

      }
    }
  }
</script>

<style scoped>

</style>
