import { request } from './request';

// 通过iid 请求数据
export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid
        }
    })
}