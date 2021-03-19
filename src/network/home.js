/**
 * home.js 将所有首页相关的网络请求代码进行封装
 * 不直接通过request 进行网络请求
 */
import { request } from './request';

// 轮播图数据、推荐等数据
export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}
// 获取首页goods 数据
export function getGoods(type, page) {
    return request({
        url: 'home/data',
        params: {
            type,
            page
        }
    })
}