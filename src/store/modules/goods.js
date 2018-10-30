import {getGoods,getGoodsById} from '../../api/goodsApi'

const goods = {
  state: {
    //相当于初始化数据
    goodsList : [],
    goods : {}
   /* id: '',
    name: '',
    price: '',
    type: '',
    abstracts: '',
    img: ''*/
  },
  mutations: {
    //相当于数据赋值
    SET_GOODS_INFO : (state, goodsList) =>{
      state.goodsList = goodsList
    },
    SET_GOODS : (state, goods) =>{
      state.goods = goods
    }
   /* SET_ID: (state, id) => {
      state.id = id
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_PRICE: (state, price) => {
      state.price = price
    },
    SET_TYPE: (state, type) => {
      state.type = type
    },
    SET_ABSTRACTS: (state, abstracts) => {
      state.abstracts = abstracts
    },
    SET_IMG: (state, img) => {
      state.img = img
    }*/
  },
  actions: {
    // 获取新数据
    goodsList ({ commit }) {
      return new Promise((resolve, reject) => {
        getGoods().then(res => {
          console.log(res);
          if (res.code === 200) {
            const goodsList = res.data.goodsInfo
            commit('SET_GOODS_INFO', goodsList)
           /* commit('SET_ID', id)
            commit('SET_NAME', name)
            commit('SET_PRICE', price)
            commit('SET_TYPE', type)
            commit('SET_ABSTRACTS', abstracts)
            commit('SET_IMG', img)*/
          }
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    },
    goods ({ commit },id){
      return new Promise((resolve, reject) =>{
        getGoodsById(id).then(res =>{
          console.log('getById -->'+ JSON.stringify(res));
          if (res.code === 200){
            commit('SET_GOODS',res.data.goodsInfo)
          }
        })
      })
    }
  }
}
export default goods
