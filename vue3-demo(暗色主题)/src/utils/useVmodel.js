
export function useVmodel(props, propsName, emits, computed) {
    return computed({
        get() {
            return new Proxy(props[propsName], {
                set(obj, name, val) {
                    console.log("emit", name, val)
                    emits('update:' + propsName, {
                        ...obj,
                        [name]: val
                    })
                    return true;
                }
            })
        },
        set(val) {
            emits('update:' + propsName, val)
        }
    })
}