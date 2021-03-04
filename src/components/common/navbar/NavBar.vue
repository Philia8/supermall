<template>
   <div class="nav-bar">
       <div class="left"><slot name="left"></slot></div>
       <div class="center"><slot name="center"></slot></div>
       <div class="right"><slot name="right"></slot></div>
   </div>
</template>

<script>
    export default {
        name: 'NavBar'
    }
</script>

<style>
    .nav-bar {
        display: flex;
        height: 44px;
        line-height: 44px;
    }
    /* 左侧部分设置固定宽度 */
    
    .right .left {
        width: 60px;
        background-color: green;
    }
    
    .center {
        flex: 1;
        background-color: hotpink;
    }
</style>