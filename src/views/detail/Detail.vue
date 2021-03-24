<template>
    <div class="detail">
        <!-- 顶部导航 -->
        <detail-nav-bar></detail-nav-bar>
        <!-- 商品轮播图 -->
        <detail-swiper :banners="topImages"></detail-swiper>

        <!-- 商品详情信息 -->
        <detail-base-info :goods="goods"></detail-base-info>
        
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar';
    import DetailSwiper from './childComps/DetailSwiper';
    import DetailBaseInfo from './childComps/DetailBaseInfo';


    // 网络请求
    import {
        getDetailData
    } from 'network/detail'
    import {
        Goods
    } from 'network/detail';

    export default {
        name: 'detail',
        data() {
            return {
                iid: null, // 商品id
                topImages: [], //轮播图
                goods: null //商品详情信息
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper,
            DetailBaseInfo
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
                console.log(this.goods);
            }).catch(err => {
                console.log(err);
            })
        },
        methods: {}
    }
</script>

<style scoped>
    .detail-goods-info {
        width: 100%;
        height: 200px;
        background-color: #bfa;
    }
</style>