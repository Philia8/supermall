<template>
   <div id="home">
       <nav-bar class="home-nav">
           <div slot="center">购物街</div>
       </nav-bar>
       <tab-control v-show="isTabShow"
                @tabClick="tabSwitch"
                ref="tabConTop" 
                :titles="['流行','新款','精选']"
                :class="{showtab:isTabShow}"></tab-control>
       <!-- <h2>首页</h2> -->
       <!-- 
            父组件向子组件传值，在子组件上设置props 属性，
            在父组件也就是子组件的实例中，通过v-bind 指令，
            动态绑定子组件的属性，属性值为父组件中的data
        -->
       <!-- <home-swiper :banners="banners"></home-swiper> -->
       <!-- 推荐列表 -->
       <!-- <recommend-view :items="recommends"></recommend-view> -->
       <!-- 本周流行 -->
       <!-- <feature-view></feature-view> -->
        <!-- 商品列表部分 -->
        <!-- 顶部导航 -->
        <!-- <tab-control class="tab-control" @tabClick="tabSwitch" :titles="['流行','新款','精选']"></tab-control> -->
        <!-- 商品列表 -->
        <!-- <goods-list :goods="showGoods"></goods-list> -->

        <scroll class="scroll" 
                ref="scroll"
                :probeType="3" 
                @scroll="contentScroll" 
                :pull-up-load="true"
                @pullingUp="loadMore"
        >
            <home-swiper :banners="banners" @swiperImgLoad="imgLoadHandler"></home-swiper>
            <recommend-view :items="recommends"></recommend-view>
            <feature-view></feature-view>
            <tab-control 
                @tabClick="tabSwitch"
                ref="tabConBottom" 
                :titles="['流行','新款','精选']"></tab-control>
            <goods-list :goods="showGoods" class="goodslist"></goods-list>
        </scroll>
        <!-- 修饰符：.native 在组件的根元素上绑定一个原生事件 -->
        <back-top @click.native="backClick" v-show="isBack"></back-top>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    import HomeSwiper from './childrenComps/HomeSwiper'
    import RecommendView from './childrenComps/RecommendView'
    import FeatureView from './childrenComps/FeatureView'
    import TabControl from 'components/content/TabControl/TabControl'
    import GoodsList from 'components/content/goods/GoodsList'
    import Scroll from 'components/common/Scroll/Scroll'
    import BackTop from 'components/content/backTop/BackTop'

    import {
        getHomeMultidata,
        getGoods
    } from 'network/home';

    export default {
        name: 'Home',
        components: {
            NavBar,
            HomeSwiper,
            RecommendView,
            FeatureView,
            TabControl,
            GoodsList,
            Scroll,
            BackTop
        },
        data() {
            return {
                banners: [], // 轮播图数据
                recommends: [], //推荐列表数据
                currentType: 'pop', //商品类型切换
                goods: { //商品数据
                    'pop': {
                        page: 0,
                        list: []
                    },
                    'new': {
                        page: 0,
                        list: []
                    },
                    'sell': {
                        page: 0,
                        list: []
                    }
                },
                touchSt: 0, //触摸起点
                touchEnS: 0, //触摸终点
                isBack: false, //返回顶部按钮是否显示
                offtop: 0, //tabControl 距离顶部的距离
                isTabShow: false, //决定上面的tabControl 是否显示
                saveY: 0 //保存当前的滚动距离
            }
        },
        created() {
            // 1、请求多个数据
            this.doGetMultidata();

            // 请求商品goods 数据，传入对应类型和页码数据
            this.doGetGoodsData('pop', 1);
            this.doGetGoodsData('new', 1);
            this.doGetGoodsData('sell', 1);


        },
        mounted() {
            // 1、图片加载事件监听，防抖函数处理
            const refresh = this.debounce(this.$refs.scroll.refreshHeight, 200);
            // 图片加载完成事件监听
            this.$bus.$on("itemImagaLoad", () => {
                // this.$refs.scroll && this.$refs.scroll.refreshHeight();
                refresh();
            });
        },
        methods: {
            /**
             *  网络请求相关方法
             * */
            // 获取轮播图和推荐列表数据
            doGetMultidata() {
                getHomeMultidata().then(res => {
                    // 保存网络请求的数据
                    this.banners = res.data.banner.list;
                    this.recommends = res.data.recommend.list;
                }).catch(err => {
                    console.log(err);
                });

            },
            // 商品类型数据及上拉加载更多
            doGetGoodsData(type) {
                // 第二次请求始终比上一页请求的数据页码 + 1
                let page = this.goods[type].page + 1;
                getGoods(type, page).then(res => {
                    // console.log(res);
                    // ... 扩展运算符，将参数中的数组每项逐一放入数组中
                    this.goods[type].list.push(...res.data.list);
                    this.goods[type].page += 1;

                    // 每次触发pullingUp 后，主动结束上拉加载行为，使BScroll 准备好下一次的pullingUp 钩子
                    // 该行为每次触发一次
                    this.$refs.scroll && this.$refs.scroll.scroll.finishPullUp();
                })
            },
            /**
             * 事件监听相关方法
             */
            // 监听商品类型切换点击事件
            tabSwitch(index) {
                switch (index) {
                    case 0:
                        this.currentType = 'pop';
                        break;
                    case 1:
                        this.currentType = 'new';
                        break;
                    case 2:
                        this.currentType = 'sell';
                        break;
                }
                // 通过设置当前活跃的currentIndex，使两个tabControl 的活跃type 保持一致
                this.$refs.tabConTop.currentIndex = index;
                this.$refs.tabConBottom.currentIndex = index;
            },
            // 监听回到顶部按钮点击事件
            backClick(event) {
                this.$refs.scroll.scrollTo(0, 0);
            },
            // 监听内容滚动事件
            contentScroll(position) {
                // 1、判断当前滚动距离，决定是否显示回到顶部按钮
                this.isBack = (-position.y) >= 1000 ? true : false;

                // 2、判断滚动距离，决定tabControl 是否固定
                this.isTabShow = (-position.y) >= this.offTop ? true : false;
            },
            // 上拉加载
            loadMore() {
                // console.log("上拉");
                // 获取当前类型数据，由于响应式更新，无需手动更新数据
                // 响应式更新：<good-list>上绑定的goods 数据，当其数据改变时，自动进行响应式更新
                this.doGetGoodsData(this.currentType);
            },
            // 防抖函数
            /**
             *  参数 func : 需要进行防抖操作的函数
             *       delay : 延迟执行时间
             * */
            debounce(func, delay) {
                let timer = null;
                return function(timer, ...args) {
                    // 将上一轮定时器取消
                    if (timer) {
                        clearTimeout(timer);
                    }
                    // 重新计时
                    timer = setTimeout(function() {
                        func.apply(this, args);
                    }, delay);
                }
            },
            // 监听轮播图加载完成
            imgLoadHandler() {
                this.offTop = this.$refs.tabConBottom.$el.offsetTop;
            }
        },
        computed: {
            showGoods() {
                // 切换至与当前item 对应的type 数据的list
                return this.goods[this.currentType].list;
            }
        },
        destoryed() {
            // console.log("home,destoryed");
        },
        // 被keep-alive 缓存的组件停用时调用
        deactivated() {
            this.saveY = this.$refs.scroll.getScrollY();
            this.$refs.scroll.refreshHeight();
            // console.log(this.saveY);
        },
        // 被keep-alive 缓存的组件活跃时调用
        activated() {
            this.$refs.scroll.scrollTo(0, this.saveY, 0);
            this.$refs.scroll.refreshHeight();
        }
    }
</script>

<style scoped>
    #home {
        /* padding-top: 44px; */
        height: 100vh;
        position: relative;
    }
    
    .home-nav {
        /* 使用base.css 中定义的变量 */
        background-color: var(--color-tint);
        color: #fff;
        position: relative;
        z-index: 9;
        /* 固定定位 */
        /* position: fixed;
        left: 0;
        right: 0;
        top: 0;
        z-index: 9; */
    }
    /* 原生状态下实现吸顶效果 */
    /* .tab-control {
        position: sticky;
        top: 44px;
        background-color: #fff;
    } */
    /* 隐藏的tab-control显示class */
    
    .showtab {
        /* 相对定位：保持元素原有位置 */
        position: relative;
        z-index: 9;
        background-color: #fff;
    }
    /* 滚动区域 */
    
    .scroll {
        /* height: 500px; */
        /* overflow: hidden; */
        /* 中间部分高度自适应 */
        position: absolute;
        /* nav-bar 44 */
        top: 44px;
        /* tab-bar 49 */
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>
<!-- 覆盖原组件上的样式 -->
<style>

</style>