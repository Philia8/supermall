<template>
   <div class="tab-bar-item" @click="itemClick">
       <slot v-if="!isActive" name="item-icon"></slot>
       <slot v-else name="item-icon-active"></slot>
       <div :style="activeStyle"><slot name="item-text"></slot></div>
       <!-- <img src="assets/img/tabbar/home.svg" alt="">
       <div>首页</div> -->
   </div>
</template>

<script>
    export default {
        name: 'TabBarItem',
        props: {
            path: String,
            activeColor: {
                type: String,
                default: "#FF5777"
            }
        },
        data() {
            return {

            }
        },
        computed: {
            isActive() {
                // 当前路由的path 属性中包含当前路径，则表示当前路由处于活跃
                return this.$route.path.indexOf(this.path) !== -1;
            },
            activeStyle() {
                return this.isActive ? {
                    color: this.activeColor
                } : {}
            }
        },
        methods: {
            itemClick() {
                this.$router.push(this.path)
            }
        }
    }
</script>

<style>
    .tab-bar-item {
        text-align: center;
        flex: 1;
        font-size: 12px;
    }
    
    .tab-bar-item img {
        width: 24px;
        height: 24px;
        margin-top: 3px;
        vertical-align: middle;
    }
</style>