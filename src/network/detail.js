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

// 将商品相关数据封装为Class
export class Goods {
    constructor(itemInfo, columns, services) {
        this.title = itemInfo.title;
        this.desc = itemInfo.desc;
        this.newPrice = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.discount = itemInfo.discountDesc;
        this.realPrice = itemInfo.lowNowPrice;
        this.columns = columns;
        this.services = services;
    }
}

// 将店铺相关信息封装集成
export class Shop {
    constructor(shopInfo) {
        this.name = shopInfo.name;
        this.logo = shopInfo.shopLogo;
        this.sells = shopInfo.cSells;
        this.goodsCount = shopInfo.cGoods;
        this.score = shopInfo.score;
    }
}