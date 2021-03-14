<template>
   <div id="RecommendItem">
        <slot></slot>
   </div>
</template>

<script>
    export default {
        name: 'RecommendItem',
        props: {
            recommedns: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    #recommendItem {
        width: 100px;
        height: 100px;
        background-color: #bfbfbf;
        flex: 1;
    }
    
    img {
        width: 65px;
        height: 65px;
        border-radius: 50%;
        margin-bottom: 10px;
    }
</style>