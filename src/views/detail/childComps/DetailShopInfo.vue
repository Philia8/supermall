<template>
    <div class="shopContainer" v-if="Object.keys(shop).length !== 0">
        <div class="shop-top">
            <img :src="shop.logo">
            <div class="shop-name">{{shop.name}}</div>
        </div>
        <div class="shop-detail">
            <div class="detail-left">
                <div class="left-sells">
                    <div>{{getSells}}万</div>
                    <div>总销量</div>
                </div>
                <div class="left-goods">
                    <div>{{shop.goodsCount}}</div>
                    <div>全部宝贝</div>
                </div>
            </div>
            <div class="detail-right">
                <ul>
                    <li v-for="(item,index) in shop.score">
                        <span class="score-name">{{item.name}}</span>
                        <span class="item-score" :class="{'score-color':item.isBetter}">{{item.score}}</span>
                        <span v-if="item.isBetter" :class="{better:item.isBetter}">高</span>
                        <span v-else :class="{badder:!item.isBetter}">低</span>
                    </li>
                </ul>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'DetailShopInfo',
        props: {
            shop: {
                type: Object,
                default () {
                    return {};
                }
            }
        },
        computed: {
            // 计算销售量保留两位小数，以万为单位
            getSells() {
                return parseFloat(this.shop.sells / 10000, 1).toFixed(1);
            }
            // 计算当前评分的优劣
        }
    }
</script>

<style scoped>
    .shopContainer {
        width: 100%;
        /* background-color: khaki; */
        border-bottom: 3px solid #f4f4f4;
        padding: 10px;
    }
    
    .shop-name {
        margin-left: 10px;
    }
    
    .shop-top {
        display: flex;
        font-size: 16px;
        line-height: 50px;
        margin-bottom: 20px;
    }
    
    .shop-top img {
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    
    .shop-detail {
        display: flex;
        height: 100px;
        justify-content: space-around;
    }
    /* 销量、宝贝数 */
    
    .detail-left {
        height: 30px;
        display: flex;
        text-align: center;
        font-size: 14px;
        /* background-color: pink; */
        margin-top: 20px;
        border-right: 2px solid #f1f1f1;
        padding: 0 20px;
    }
    
    .left-sells {
        margin-right: 12px;
    }
    
    .left-sells div {
        margin-bottom: 10px;
    }
    
    .left-goods div {
        margin-bottom: 10px;
    }
    
    .detail-right {
        color: green;
        font-size: 14px;
        padding-right: 10px;
    }
    
    .detail-right li {
        list-style: none;
        display: flex;
        justify-content: space-between;
        margin: 8px 0;
    }
    
    .item-score {
        margin: 0 5px;
    }
    
    .score-name {
        color: #000;
    }
    /* 评分相关字体颜色 */
    
    .score-color {
        color: red;
    }
    
    .better {
        color: #fff;
        background-color: red;
    }
    
    .badder {
        color: #fff;
        background-color: green;
    }
</style>