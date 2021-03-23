<template>
    <div class="detail-swiper">
        <div class="swiper" @touchstart="touchstart" @touchmove="touchmove" @touchend="touchend">
            <!-- 设置组件高度、前后翻页箭头是否显示nerver/hover/awlways、指示器显示位置、自动滚动等 -->
            <el-carousel height="300px"
                arrow="never" 
                ref="detailCarousel" 
                indicator-position="none"
                :autoplay="autoplay"> 
                <el-carousel-item v-for="(item,index) in banners" :key="index">
                    <img :src="item" alt="">
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailSwiper',
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
                autoplay: false //自动播放
            }
        },
        components: {},
        methods: {
            touchstart(event) {
                this.touchSt = event.touches[0].pageX;
            },
            touchmove(event) {},
            touchend(event) {
                this.touchEn = event.changedTouches[0].pageX;
                this.touchSt > this.touchEn ? this.$refs.detailCarousel.prev() : this.$refs.detailCarousel.next();
            },
            imgLoad() {
                console.log("imgLoad");
            }
        }
    }
</script>
<style scoped>
    .swiper {
        width: 100%;
        height: 300px;
        overflow: hidden;
    }
    
    .swiper img {
        /* 设置width 宽度，height 按比例自适应 */
        width: 100%;
    }
</style>