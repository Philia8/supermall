<template>
   <div id="Home">
       <nav-bar class="home-nav">
           <div slot="center">购物街</div>
       </nav-bar>
       <!-- <h2>首页</h2> -->
       <!-- 
            父组件向子组件传值，在子组件上设置props 属性，
            在父组件也就是子组件的实例中，通过v-bind 指令，
            动态绑定子组件的属性，属性值为父组件中的data
        -->
       <home-swiper :banners="banners"></home-swiper>
   </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import HomeSwiper from './childrenComps/HomeSwiper'
    import {
        getHomeMultidata
    } from 'network/home'

    export default {
        name: 'Home',
        components: {
            NavBar,
            HomeSwiper
        },
        data() {
            return {
                banners: [],
                recommends: [],
                touchSt: 0, //触摸起点
                touchEnS: 0 //触摸终点
            }
        },
        created() {
            // 1、请求多个数据
            getHomeMultidata().then(res => {
                // 保存网络请求的数据
                this.banners = res.data.banner.list;
                this.recommends = res.data.recommend.list;
            }).catch(err => {
                console.log(err);
            })
        },
        methods: {

        },
        computed: {

        }
    }
</script>

<style scoped>
    .home-nav {
        /* 使用base.css 中定义的变量 */
        background-color: var(--color-tint);
        color: #fff;
    }
</style>
<!-- 覆盖原组件上的样式 -->
<style>

</style>