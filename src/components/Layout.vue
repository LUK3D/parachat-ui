<script lang="ts" setup>

</script>
<template lang="">
     <div class="w-screen h-screen flex">
        <div class="w-3/12 h-full bg-black-200 flex">
           <slot name="left"></slot>
        </div>
        <div class="w-6/12 bg-black-100 flex flex-col">
            <slot name="midle"></slot>
        </div>
        <div class="w-3/12 h-full bg-black-200 flex flex-col">
            <slot name="right"></slot>
        </div>
        <!-- <div></div> -->
    </div>
</template>

<style lang="">
</style>