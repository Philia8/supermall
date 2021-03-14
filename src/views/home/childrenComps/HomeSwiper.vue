<template>
   <div id="HomeSwiper">
    <!-- 轮播图 -->
    <div class="banner" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
        <!-- 设置组件高度、前后翻页箭头是否显示nerver/hover/awlways -->
        <el-carousel height="167px" arrow="never" ref="carousel"> 
            <el-carousel-item v-for="(item,index) in banners" :key="index">
                <!-- <a :href="item.link"> -->
                <a href="javascript:;">
                    <img :src="item.image">
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
        methods: {
            touchstart(event) {
                // console.log(event.touches[0].pageX);
                // return event.touches[0].pageX;
                this.touchSt = event.touches[0].pageX;
            },
            touchmove(event) {},
            touchend(event) {
                this.touchEn = event.changedTouches[0].pageX;
                this.touchSt > this.touchEn ? this.$refs.carousel.prev() : this.$refs.carousel.next();
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