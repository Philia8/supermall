<template>
    <div class="back-top">
        <img src="~assets/img/common/top.png" alt="">
    </div>
</template>

<script>
    export default {
        name: 'BackTop'
    }
</script>

<style scoped>
    .back-top {
        z-index: 100;
        position: fixed;
        bottom: 55px;
        right: 8px;
        overflow: hidden;
        width: 50px;
        height: 50px;
    }
    
    .back-top img {
        width: 100%;
    }
</style>