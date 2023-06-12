<script setup lang="ts">
import Layout from './components/Layout.vue';
import SidePanel from './components/sidePanel/SidePanel.vue'
</script>

<template >
    <Layout>
        <template v-slot:left>
            <SidePanel></SidePanel>
        </template>
        <template v-slot:midle>
            <div class="w-full h-full text-white text-4xl p-4">
                <h1>Midle Section 😊</h1>
            </div>
        </template>
        <template v-slot:right>
            <div class="w-full h-full text-white text-4xl p-4">
                <h1>Right Section 😋</h1>
            </div>
        </template>
    </Layout>
</template>
