<template>
    <div class="tab-control">
        <div class="tab-control-item" v-for="(item,index) in titles"
            @click="itemClick(index)">
            <span :class="{active:index === currentIndex}">{{item}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TabControl',
        props: {
            titles: {
                type: Array,
                default () {
                    return [];
                }
            }
        },
        data() {
            return {
                // 该值是如何改变的？
                // 通过点击事件，将当前活跃的index 赋值给该值，使其添加活跃的class
                currentIndex: 0 //记录当前被选中的列表项的索引
            }
        },
        methods: {
            itemClick(index) {
                this.currentIndex = index;
                // console.log(this.currentIndex);
                // 子组件向父组件传递数据
                this.$emit('tabClick', index);
            }
        }
    }
</script>

<style scoped>
    .tab-control {
        display: flex;
        text-align: center;
        justify-content: space-around;
        font-size: 14px;
    }
    
    .tab-control-item {
        height: 40px;
        line-height: 40px;
    }
    
    .tab-control-item span {
        padding: 0 5px 5px;
    }
    
    .active {
        border-bottom: 3px solid var(--color-tint);
        color: var(--color-high-text);
    }
</style>