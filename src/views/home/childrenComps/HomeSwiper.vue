<template>
   <div id="HomeSwiper">
    <!-- 轮播图 -->
        <div class="banner" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
            <!-- 设置组件高度、前后翻页箭头是否显示nerver/hover/awlways -->
            <el-carousel height="167px" arrow="never" ref="homeCarousel" autoplay="autoplay"> 
                <el-carousel-item v-for="(item,index) in banners" :key="index">
                    <!-- <a :href="item.link"> -->
                    <a href="javascript:;">
                        <img :src="item.image" @load="imgLoad">
                    </a>
                </el-carousel-item>
            </el-carousel>
        </div>
   </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        props: {
            banners: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        data() {
            return {
                isLoad: false, //轮播图片是否有一张已加载完成
                autoplay: true, //是否自动轮播
            }
        },
        components: {},
        methods: {
            touchstart(event) {
                this.touchSt = event.touches[0].pageX;
                // 手动切换时，停止自动轮播
                this.isAutoplay = false;
            },
            touchmove(event) {},
            touchend(event) {
                this.touchEn = event.changedTouches[0].pageX;
                this.touchSt > this.touchEn ? this.$refs.homeCarousel.prev() : this.$refs.homeCarousel.next();
                setTimeout(() => {
                    this.isAutoplay = true;
                }, 2000);
            },
            // 轮播图图片加载事件监听
            imgLoad() {
                // console.log("load=" + isLoad);
                if (!this.isLoad) {
                    // 事件分发只进行一次，后续无需再次发送
                    this.$emit("swiperImgLoad");
                    this.isLoad = true;
                }
            }
        }
    }
</script>

<style scoped>
    /* 轮播图 */
    
    .banner img {
        width: 100%;
        height: inherit;
    }
</style>