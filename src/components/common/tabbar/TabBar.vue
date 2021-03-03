<template>
   <div class="tab-bar">
        <slot></slot>
   </div>
</template>

<script>
    export default {
        name: 'TabBar'
    }
</script>

<style>
    /* tab-bar */
    
    .tab-bar {
        display: flex;
        height: 49px;
        background-color: #f6f6f6;
        /* 底部定位 */
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        box-shadow: 0 -2px 1px rgba(100, 100, 100, .1);
    }
</style>