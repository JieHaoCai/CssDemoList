import {
    defineStore
} from 'pinia'



/**
 * 使用defineStore创建store，接收两个参数，name:为一个字符串，为该store的唯一id，另一个是options，用于配置store
 */

const useUsersStore = defineStore('users', {
    //其他配置项
    state: () => {
        return {
            name: '小猪课堂',
            age: 25,
            sex: '男',
        }
    },

    getters: {
        getAddAge: (state) => {
            return state.age + 100;
        },
    },
    actions: {
        saveName(name) {
            this.name = name;
        },
    },
    persist: {
        key: 'user',
        storage: sessionStorage,
    },

})


export default useUsersStore
