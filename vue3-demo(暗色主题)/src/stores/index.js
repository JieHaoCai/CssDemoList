import useUsersStore from './module/user';


//统一管理store文件
const useStore = () => ({
    useUsersStore: useUsersStore(),
})

export default useStore;
