<template>
    <button type="submit">
        <!-- //默认插槽 -->
            <!-- <slot>
                submit
            </slot> -->
            <!-- 具名插槽 -->
            <slot name="header">
                具名header
            </slot>
</button>

<button type="submit">
        <!-- //默认插槽 -->
            <!-- <slot>
                submit
            </slot> -->
            <!-- 具名插槽 -->
      
    <slot name="body">
                具名body
            </slot>
</button>
</template>

<script>

</script>

<style scoped>

</style>
