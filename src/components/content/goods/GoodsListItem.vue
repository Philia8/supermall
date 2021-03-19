<template>
    <div class="goods-item" @click="itemClick">
        <img :src="goodsItem.show.img" alt="" @load="imageLoad">
        <div class="good-info">            
            <div class="title">{{goodsItem.title}}</div>
            <span class="price">{{goodsItem.price}}</span>
            <div class="icon-collect"><img src="~assets/img/detail/detail_bottom.png" alt=""></div>
            <span class="collect">{{goodsItem.cfav}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'GoodsListItem',
        props: {
            goodsItem: {
                type: Object,
                default () {
                    return [];
                }
            }
        },
        methods: {
            itemClick() {
                console.log("点击进入商品详情->");
            },
            // 监听图片加载完成
            imageLoad() {
                // 分发事件
                this.$bus.$emit("itemImagaLoad");
            }
        }
    }
</script>

<style scoped>
    .goods-item {
        width: 46%;
        height: auto;
        border-radius: 5px;
        background-color: #fff;
        overflow: hidden;
        margin-bottom: 10px;
    }
    
    .goods-item img {
        width: 100%;
    }
    /* 商品详情信息 */
    
    .good-info {
        font-size: 6px;
        text-align: center;
    }
    
    .good-info .title {
        /* 单行文本溢出 */
        display: block;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }
    
    .good-info .price {
        color: var(--color-tint);
        margin-right: 5px;
    }
    
    .icon-collect {
        width: 10px;
        height: 10px;
        overflow: hidden;
        display: inline-block;
        transform: translateY(1px);
        margin-right: 1px;
    }
</style>