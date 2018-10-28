import ajax from '../util/ajaxUtils'

export function getGoods () {
  return ajax({
    url: '/goodsInfo',
    method: 'get'
  })
}
