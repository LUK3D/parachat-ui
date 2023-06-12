<script setup lang="ts">
import UserAvatar from "../UserAvatar.vue";
import avatar01 from "../../assets/avatars/avatar-01.png"
import avatar02 from "../../assets/avatars/avatar02.png"

function logToConsole(e:any){
    console.warn(e);
}

</script>

<template lang="">
    <div class="w-full h-full flex flex-col items-center overflow-y-auto pt-4">
        <UserAvatar v-for="(index) in 5" :key="index" :image="avatar01" class="mb-2" :is-active="true" @clicked="logToConsole"></UserAvatar>
        <UserAvatar :image="avatar02" class="mb-2"></UserAvatar>
        <UserAvatar :image="avatar02" class="mb-2">
            <h1>A</h1>
        </UserAvatar>
    </div>
</template>
<style >
</style>


