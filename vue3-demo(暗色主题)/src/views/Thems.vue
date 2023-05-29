<template>
    <div class="main">
        {{ name }}
        <div>当前的主题是： {{ theme }}</div>
        <el-select v-model="theme" class="m-2" placeholder="Select" size="large">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
        </el-select>
    </div>
</template>

<script>
import { ref } from 'vue'
import useTheme from '../utils/useTheme'
export default {
    setup() {
        const name = ref('测试主题')
        const { theme, options } = useTheme()
        return {
            theme,
            name,
            options
        }
    }
}




</script>
<style scoped>
.main {
    height: 100vh;
    background: linear-gradient(to bottom, var(--bg1), var(--bg2));
    color: var(--text-color)
}
</style>
