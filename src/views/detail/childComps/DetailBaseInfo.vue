<template>
    <div class="detail-base-info" v-if="Object.keys(goods).length > 0">
        <div class="itemInfo">
            <div class="item-title">{{goods.title}}</div>
            <div class="price-container">
                <div class="newPrice">{{goods.newPrice}}</div>
                <div class="oldPrice">{{goods.oldPrice}}</div>
                <div v-if="goods.discount" class="discount">{{goods.discount}}</div>
            </div>
        </div>
        <ul class="columns">
            <li>{{goods.columns[0]}}</li>
            <li>{{goods.columns[1]}}</li>
            <li>{{goods.services[0].name}}</li>
        </ul>
        <ul class="services">
            <!-- 商家服务中的第一个作为columns 的最后一个,在该列表中不再显示 -->
            <li v-for="index in goods.services.length-1" :key="index">
                <img :src="goods.services[index].icon" alt="">
                <span>{{goods.services[index].name}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'DetailBaseInfo',
        props: {
            goods: {
                type: Object,
                defaul() {
                    return null;
                }
            }
        }
    }
</script>

<style scoped>
    .detail-base-info {
        border-bottom: 5px solid #f8f8f8;
        padding: 5px;
        padding-top: 10px;
    }
    
    .itemInfo .item-title {
        color: #000;
        font-size: 16px;
    }
    /* 新旧price 及优惠活动 */
    
    .price-container {
        display: flex;
        height: 25px;
        line-height: 25px;
        margin-top: 8px;
    }
    
    .price-container div {
        margin-right: 6px;
    }
    
    .price-container .newPrice {
        font-size: 20px;
        color: var(--color-tint);
    }
    
    .price-container .oldPrice {
        font-size: 12px;
        color: var(--color-text);
        text-decoration: line-through;
        vertical-align: baseline;
    }
    
    .discount {
        width: auto;
        color: #fff;
        background-color: var(--color-tint);
        font-size: 14px;
        text-align: center;
        border-radius: 5px;
        padding: 2px;
    }
    /* 销量、收藏等 */
    
    .columns {
        display: flex;
        justify-content: space-between;
        color: var(--color-text);
        font-size: 10px;
        margin-top: 18px;
        list-style: none;
        border-bottom: 3px solid #f6f6f6;
        padding-bottom: 4px;
    }
    /* 商家服务 */
    
    .services {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
        height: 45px;
        line-height: 45px;
    }
    
    .services li {
        list-style: none;
    }
    
    .services img {
        width: 13px;
        height: 13px;
    }
</style>