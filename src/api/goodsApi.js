import ajax from '../util/ajaxUtils'

const BASE_URI = '/goodsInfo'

/**
 * 通过id获取商品详情
 * @param param 商品id
 */
export function getGoodsById(param) {
  return ajax.get('/goods', {
      params: {id: param}
    }
  )
}

/**
 * 获取商品列表
 */
export function getGoods() {
  return ajax({
    url: BASE_URI,
    method: 'GET'
  })
}

/**
 * 新增商品
 * @param data
 */
export function addGoods(data) {
  return ajax({
    url: BASE_URI,
    method: 'POST',
    data: data,
  })
}

/**
 *  更新 商品
 * @param data
 */
export function updateGoods(data) {
  return ajax({
    url: BASE_URI,
    method: 'PUT',
    data: data,
  })
}

/**
 * 删除商品
 * @param data
 */
export function deleteGoodsById(data) {
  return ajax({
    url: BASE_URI,
    method: 'DELETE',
    data: data,
  })
}
