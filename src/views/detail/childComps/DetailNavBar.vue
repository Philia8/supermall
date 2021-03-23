<template>
    <div>
        <nav-bar class="detail-nav-bar">
            <div slot="left" class="back" @click="backClick">
                <img src="~assets/img/common/back.svg" alt="">
            </div>
            <div slot="center" class="titles">
                <div v-for="(item,index) in titles"
                    class="title-item"
                    :class="{active:currentIndex === index}"
                    @click="itemClick(index)" >
                    {{item}}
                </div>
            </div>
        </nav-bar>
    </div>
</template>

<script>
    import NavBar from 'components/common/navbar/NavBar'
    export default {
        name: 'DetailNavBar',
        data() {
            return {
                titles: ["商品", "详情", "评论", "推荐"], // nav-bar 切换选项
                currentIndex: 0, //当前选项

            }
        },
        components: {
            NavBar
        },
        methods: {
            // 点击切换
            itemClick(index) {
                this.currentIndex = index;
            },
            // 返回上一个页面
            backClick() {
                this.$router.back();
            }
        }
    }
</script>

<style scoped>
    .detail-nav-bar {
        color: #000;
    }
    
    .back {
        position: relative;
    }
    
    .back img {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        margin-top: 10px;
    }
    
    .titles {
        display: flex;
        justify-content: space-around;
        font-size: 13px;
    }
    
    .active {
        color: var(--color-tint);
    }
</style>