<template>
    <div class="wrapper" ref="wrapper">
        <div id="content" ref="content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
        name: 'Scroll',
        components: {
            BScroll
        },
        data() {
            return {
                scroll: null
            }
        },
        props: {
            // 是否监听并分发scroll事件
            probeType: {
                type: Number,
                default () {
                    return 0;
                }
            },
            // 是否上拉加载
            pullUpLoad: {
                type: Boolean,
                default () {
                    return false;
                }
            }
        },
        mounted() {
            // 1、创建BScroll 对象
            this.scrollInit();
            // 2、监听scroll 页面滚动事件
            this.scroll.on("scroll", (position) => {
                // 将子组件中的数据分发
                this.$emit("scroll", position);
            });
            // 3、监听上拉事件
            this.scroll.on("pullingUp", this.pullUpHandler);
        },
        methods: {
            // 初始化，创建Scroll 对象
            scrollInit() {
                this.scroll = new BScroll(this.$refs.wrapper, {
                    // 自动阻止原生js 的点击事件，设置为true 后，可派发click 事件
                    click: true,
                    // 鼠标滚轮滚动派发scroll 事件
                    mouseWheel: true,
                    // 是否分发滚轮事件
                    probeType: this.probeType,
                    // 上拉加载更多
                    pullUpLoad: this.pullUpLoad
                })
            },
            // 滚动区域高度更新
            refreshHeight() {
                // 判断当前scroll 对象是否创建成功，再执行相关方法，否则会报错
                this.scroll && this.scroll.scrollTo && this.scroll.refresh();

                // console.log("---");
            },
            // 返回顶部
            scrollTo(x, y, time = 500) {
                // scrollTo(x坐标,y坐标,动画执行的时长,运动函数,{修改CSS中transform 的某些属性});
                this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x, y, time);
            },
            // 上拉加载
            pullUpHandler() {
                // console.log("上拉");
                this.$emit("pullingUp");
            },
            // 获取当前纵轴滚动的距离
            getScrollY() {
                // console.log(this.scroll.y);
                return this.scroll.y;
            },
        }
    }
</script>

<style scoped>

</style>