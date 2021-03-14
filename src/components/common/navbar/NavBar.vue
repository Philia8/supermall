<template>
   <div class="nav-bar">
       <div class="left"><slot name="left"></slot></div>
       <div class="center"><slot name="center"></slot></div>
       <div class="right"><slot name="right"></slot></div>
   </div>
</template>

<script>
    export default {
        name: 'NavBar',
    }
</script>

<style>
    .nav-bar {
        display: flex;
        justify-content: space-between;
        height: 44px;
        line-height: 44px;
        /* background-color: hotpink; */
        box-shadow: 0 1px 1px rgba(100, 100, 100, .1);
        color: #fff;
    }
    /* 左侧部分设置固定宽度 */
    /* 使用并集选择器，以逗号分隔 */
    
    .left,
    .right {
        height: 44px;
        width: 60px;
    }
    
    .center {
        flex: 1;
        text-align: center;
    }
</style>