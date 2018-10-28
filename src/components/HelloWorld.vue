<template>
  <div>
    <el-row>
      <el-col :span="20" :offset="2"> <p>{{msg}}</p>

        <el-row>
          <el-col :span="8"  v-for="(item,index) in goods.goodsInfo" :key="index">
            <el-card :body-style="{ padding: '0px' }">
              <img :src="item.img" class="image" width="100%" height="100%">
              <div style="padding: 14px;">
                <span>{{item.name}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ item.price }}</time>

                  <el-button type="text" @click.native="show(item)">查看详情</el-button>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </el-col>
    </el-row>

  </div>
</template>

<script>
  import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '商品列表',
    }
  },
  methods:{
    show (item){
      const content = '名称：'+item.name+' 单价：' + item.price+' 描述：'+item.abstracts;
      this.$alert(content, '商品详情', {
        confirmButtonText: '确定',
      });
    }
  },
  computed :{
    ...mapState(['goods']),
  },
  mounted(){
    console.log(this.goods);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
