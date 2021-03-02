<template>
  <div id="app">
      <div id="tab-bar">
        <div class="tab-bar-item">首页</div>
        <div class="tab-bar-item">分类</div>
        <div class="tab-bar-item">购物车</div>
        <div class="tab-bar-item">我的</div>
      </div>
  </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    /* 引入通用样式 */
    
    @import "assets/css/base.css";
    /* tab-bar */
    
    #tab-bar {
        display: flex;
        height: 49px;
        background-color: #f6f6f6;
        /* 底部定位 */
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
    }
    
    .tab-bar-item {
        text-align: center;
        flex: 1;
    }
</style>