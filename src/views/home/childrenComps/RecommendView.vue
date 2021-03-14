<template>
    <!-- 推荐列表 -->
   <div id="home-recommend-view">
        <recommend-item v-for="(item,index) in items" :key="index">
            <a :href="item.link">
                <img :src="item.image">
                <div>{{item.title}}</div>
            </a>
        </recommend-item>
   </div>
</template>

<script>
    import RecommendItem from './RecommendItem';
    import {
        getHomeMultidata
    } from 'network/home'

    export default {
        name: 'HomeRecommendView',
        components: {
            RecommendItem
        },
        props: {
            items: {
                type: Array
            }
        }
    }
</script>

<style scoped>
    #home-recommend-view {
        padding: 10px 0 20px;
        border-bottom: 10px solid #eee;
        width: 100%;
        display: flex;
        justify-content: space-around;
        font-size: 12px;
        text-align: center;
    }
</style>