import { ref, watchEffect } from 'vue'

const LOCAL_KEY = '__theme__';


const match = matchMedia('(prefers-color-scheme:dark)')


const theme = ref(localStorage.getItem(LOCAL_KEY) || 'light')

console.log(typeof window !== 'undefined' && window.console)
//如果当前浏览器支持监听的话，初次选中会打印，否则不支持监听
var first = true
function followOs() {
    if (first) {
        console.log("当前浏览器支持动态监听主题改变！")
        first = false
    }
    if (match.matches) {
        document.documentElement.dataset.theme = 'dark'
    } else {
        document.documentElement.dataset.theme = 'light'
    }
}

const options = ref([
    {
        value: 'light',
        label: '亮色',
    },
    {
        value: 'dark',
        label: '暗色',
    },
    {
        value: 'OS',
        label: '跟随系统',
    }
])




watchEffect(() => {
    //如果当前主题是跟随系统
    if (theme.value === 'OS') {
        //将主题设置为系统主题
        followOs();
        //添加监听事件，防止用户不刷新页面，手动改变系统主题
        match.addEventListener('change', followOs)
        //如果不是跟随系统
    } else {
        //移除监听事件
        match.removeEventListener('change', followOs)
        document.documentElement.dataset.theme = theme.value;
        localStorage.setItem(LOCAL_KEY, theme.value)
    }
})


export default function useTheme() {
    return {
        theme,
        options
    }
}
