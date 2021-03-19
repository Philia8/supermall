<template>
    <div class="goods"> 
        <!-- {{goods}} -->
        <goods-list-item v-for="(item,index) in goods" :key="item.iid" :goodsItem="item"></goods-list-item>
    </div>
</template>

<script>
    import GoodsListItem from './GoodsListItem'
    export default {
        name: 'GoodsList',
        components: {
            GoodsListItem
        },
        props: {
            goods: {
                type: Array,
                default () {
                    return [];
                }
            }
        }
    }
</script>

<style scoped>
    .goods {
        display: flex;
        background-color: #f3f3f3;
        padding: 8px 2px;
        flex-wrap: wrap;
        justify-content: space-around;
    }
</style>