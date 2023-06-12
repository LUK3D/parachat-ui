

<script lang="ts" setup >

 defineProps({
   image:String,
   radius:{
    type:Number||String,
    required:false,
    default:40,
   },
   isActive:{
    type:Boolean,
    default:false,
    required:false
   }
});

</script>

<template lang="">
    <button 
        @click="$.emit('clicked', image)"
        :style="`width:${radius}px; height:${radius}px`"
        :class="` rounded-full ${isActive?'bg-primary':'bg-transparent'} flex justify-center items-center text-white  p-[2px]`"
    >
        <div class="w-full h-full rounded-full bg-black-100 flex justify-center items-center text-white overflow-hidden border-2 border-black-200 relative">
            <img v-if="!this.$slots.default" :src="image" class="absolute object-cover w-full h-full">
            <slot ></slot>
        </div>
    </button>
</template>

<style lang="">
    
</style>