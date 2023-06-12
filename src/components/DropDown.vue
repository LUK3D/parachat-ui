<script setup lang="ts">
import {ChevronDownIcon, Cog8ToothIcon, HashtagIcon } from "@heroicons/vue/24/outline"
import { Component, PropType, ref } from 'vue';

export interface IDropDownItem{
    label:Component|string,
    data:any
}

const toggleDropdown = ref<boolean>(false);

const showOnLogs = ()=>{
    console.log("Teste basico");
}

defineSlots<{
  label():any,
  body():Component,
}>();

defineProps({
   label:{
    type:String,
    required:false
   },
   items:{
    type:Array as PropType<Array<IDropDownItem>>,
    default:[],
    required:false
   }
});

</script>


<template >
     <ul class="flex flex-col text-gray-600">
            <li class="flex flex-col w-full p-2  ">
            <button 
                @click="toggleDropdown = !toggleDropdown"
                class="w-full flex justify-between items-center px-2 p-2 group hover:bg-black-300 rounded-full text-sm active:text-gray-500"
            >
                <div class="flex items-center transform">
                    <ChevronDownIcon :class="`w-6 h-6 mr-2 transition-transform group-hover:text-white ${toggleDropdown?'rotate-180':'rotate-0'} `"></ChevronDownIcon>
                    <p v-if="label">{{label}}</p>
                    <slot name="label" v-if="$.slots.label"></slot>
                </div>
                <button @click.stop="showOnLogs">
                    <Cog8ToothIcon class="w-6 h-6"></Cog8ToothIcon>
                </button>
            </button>

            <ul class="flex flex-col w-full " v-show="toggleDropdown">
                <li class="flex w-full " v-if="$.slots.body">
                    <slot name="body" ></slot>
                </li>
                <li v-else class="flex w-full my-1 hover:bg-black-300 rounded-full" v-for="(item, index) in items" :key="`item_${index}`">
                    <button @click="$.emit('intem-clicked', item)" class="flex items-center w-full text-sm pl-4 py-2 active:text-gray-500">
                        <HashtagIcon  class="w-6 h-6"></HashtagIcon>
                        <div>
                            {{ item.label }}
                        </div>
                    </button>
                </li>
            </ul>
        </li>
    </ul>
</template>
