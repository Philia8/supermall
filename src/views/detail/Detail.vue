<template>
    <div class="detail">
        <!-- 顶部导航 -->
        <detail-nav-bar class="detail-nav-bar"></detail-nav-bar>
        <!-- 商品轮播图 -->
        <detail-swiper :banners="topImages"></detail-swiper>
        <!-- 商品详情信息 -->
        <detail-base-info :goods="goods"></detail-base-info>
        <!-- 店铺信息 -->
        <detail-shop-info :shop="shop"></detail-shop-info>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar';
    import DetailSwiper from './childComps/DetailSwiper';
    import DetailBaseInfo from './childComps/DetailBaseInfo';
    import DetailShopInfo from './childComps/DetailShopInfo';


    // 网络请求
    import {
        getDetailData
    } from 'network/detail'
    import {
        Goods
    } from 'network/detail';
    import {
        Shop
    } from 'network/detail'

    export default {
        name: 'detail',
        data() {
            return {
                iid: null, // 商品id
                topImages: [], //轮播图
                goods: {}, //商品详情信息
                shop: {} //店铺详情信息
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo,
            DetailShopInfo
        },
        created() {
            // 1、获取传递的商品id
            this.iid = this.$route.params.iid;
            // 2、请求数据
            getDetailData(this.iid).then(res => {
                console.log(res);
                const data = res.result;
                // 1、顶部轮播图数据
                this.topImages = data.itemInfo.topImages;
                // 2、商品详情信息
                this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services);
                // console.log(this.goods);
                // 3、店铺详情信息
                this.shop = new Shop(data.shopInfo);
                console.log(this.shop);
            }).catch(err => {
                console.log(err);
            })
        },
        methods: {}
    }
</script>

<style scoped>
    /* 详情页设置相对定位，为了遮住在app.vue 中的MainTabBar */
    
    .detail {
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
    /* 顶部导航 */
    
    .detail-nav-bar {
        background-color: #fff;
    }
    /* 商品信息 */
    
    .detail-goods-info {
        width: 100%;
        height: 200px;
        background-color: #bfa;
    }
</style>