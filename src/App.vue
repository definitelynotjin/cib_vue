<template>
    <div class=" min-h-screen bg-linear-to-br from-bg-[#C8DE5C] via-bg-[#C8DE5C] to-gray-500">
        <Navbar />
        <router-view />
    </div>
</template>

<script lang="ts">
import Navbar from "./components/Navbar.vue";
export default {
    components: {
        Navbar
    }
}
</script>


<style lang="css"></style>
