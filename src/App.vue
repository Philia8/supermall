<template>
    <div id="app">
        <!-- 设置某个组件不用保存状态 exclude -->
        <keep-alive exclude="detail">
            <router-view></router-view>
        </keep-alive>
        <main-tab-bar></main-tab-bar>
    </div>
</template>

<script>
    import MainTabBar from 'components/content/mainTabBar/MainTabBar'
    export default {
        name: 'app',
        components: {
            MainTabBar
        }
    }
</script>

<style>
    /* 引入通用样式 */
    
    @import "assets/css/base.css";
</style>