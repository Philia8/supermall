<template>
    <div class="detail">
        <detail-nav-bar></detail-nav-bar>
        <detail-swiper :banners="topImages"></detail-swiper>
    </div>
</template>

<script>
    import DetailNavBar from './childComps/DetailNavBar';
    import DetailSwiper from './childComps/DetailSwiper';

    // 网络请求
    import {
        getDetailData
    } from 'network/detail.js'

    export default {
        name: 'detail',
        data() {
            return {
                iid: null, // 商品id
                topImages: [] //轮播图
            }
        },
        components: {
            DetailNavBar,
            DetailSwiper
        },
        created() {
            // 1、获取传递的商品id
            this.iid = this.$route.params.iid;
            // 2、请求数据
            getDetailData(this.iid).then(res => {
                console.log(res);
                // 1、顶部轮播图数据
                this.topImages = res.result.itemInfo.topImages;
            }).catch(err => {
                console.log(err);
            })
        },
        methods: {}
    }
</script>

<style scoped>

</style>