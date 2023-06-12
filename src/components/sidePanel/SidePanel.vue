<script lang="ts" setup>
import {UserIcon, MicrophoneIcon, ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/vue/24/outline"
import UserAvatar from "../userAvatar.vue";
import DropDown from "../DropDown.vue";
import ServersList from "./ServersList.vue";

import marioChatting from "../../assets/avatars/Mario Chatting.png"
import proPlayer from "../../assets/avatars/proPlayer.png"
import { IVoiceChannels } from "./types"

let channels: Array<IVoiceChannels> = [{image:marioChatting, label:'Mario Chatting', active:true}, {image:proPlayer, label:'Pró Player'}];

const logToConsole = (e:any)=>{
    console.warn(e);
}
</script>


<template lang="">
     <div class="min-w-[70px] h-full bg-black-300 flex flex-col">
        <div class="h-header w-full border-b border-black-400 flex flex-col items-center justify-center ">
            <div class="w-10 h-10 rounded-full bg-black-100 flex justify-center items-center text-white">
                <h1 class="text-white font-black text-2xl">P<span class="text-primary text-sm">R</span></h1>
            </div>
        </div>
       <ServersList></ServersList>
    </div>
    <div class="w-full h-full flex flex-col">
        <div class="h-header w-full border-b border-black-400 flex   items-center px-4">
            <div class="flex">
                <div class="w-10 h-10 rounded-full bg-gray-500 flex justify-center items-center text-white">
                    <div class="w-full h-full flex flex-col items-center justify-center text-black-100">
                    <UserIcon class="h-6 w-" />
                    </div>
                </div>
                <div class="flex flex-col ml-3  items-start text-sm">
                    <h3 class="text-white">Filipe Lukebana</h3>
                    <p class="px-2  text-primary bg-primary bg-opacity-25 rounded-full">@luk3d</p>
                </div>
            </div>
        </div>
        <div class="w-full h-full overflow-y-auto flex flex-col">
            <DropDown 
                label="📃 Updates"
                :items="[
                    {label:'Trailer'},
                    {label:'OuDemoste', data:'Teste basico'},
                ]"

                @intem-clicked="logToConsole"
            >
                
            </DropDown>
            <DropDown 
                label="🎮 Gameplays"
                :items="[
                    {label:'Streaming'},
                    {label:'Competitions', data:'Teste basico'},
                ]"

                @intem-clicked="logToConsole"
            >
            </DropDown>

            <DropDown 
                label="🎙️ Voice Channel"

                @intem-clicked="logToConsole"
            >
            <template v-slot:body>
                <ul class="w-full flex flex-col text-sm mt-2">
                    <li 
                        v-for="(item, index) in channels" :key="index"
                        class="w-full flex hover:bg-black-300 rounded-full pl-4 mt-2 pr-2 items-center py-1"
                    >
                        <button class="flex items-center justify-between w-full  active:text-gray-500">
                            <div class="flex items-center ">
                                <UserAvatar :image="item.image" :radius="35" :isActive="item.active">
                                </UserAvatar>
                                <p class="ml-2">{{item.label}}</p>
                            </div>
                            <div class="flex items-center">
                                <button>
                                    <MicrophoneIcon class="w-5 h-5"></MicrophoneIcon>
                                </button>
                                <button class="ml-2">
                                    <ChatBubbleOvalLeftEllipsisIcon class="w-5 h-5"></ChatBubbleOvalLeftEllipsisIcon>
                                </button>
                            </div>
                        </button>
                    </li>
                </ul>
            </template>
            </DropDown>
        </div>
    </div>
</template>
<style lang="">
    
</style>