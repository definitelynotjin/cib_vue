<script setup lang="ts">
import Menubar from "primevue/menubar"
import WhatsappButton from "./WhatsappButton.vue";



const items = ([
    {
        label: 'Menu',
        icon: 'pi pi-home'
    },
    {
        label: 'Classes',
        icon: 'pi pi-star',
        items: [
            {
                label: 'Basic Cooking'
            },

            {
                label: 'Pastry'
            },

        ],
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    },
    {
        label: 'Prices',
        icon: 'pi pi-envelope'
    },
    {
        label: 'Contact',
        icon: 'pi pi-envelope'
    },

])


</script>

<template>

    <Menubar :model="items">
        <template #start>
            <img src="/cib-logo.png" width="40" height="40">
            <path d="..." fill="var(--primary-color)" />
            <path d="..." fill="var(--text-color)" />
        </template>
        <template #item="{ item, props, hasSubmenu, root }">
            <a v-ripple class="flex align-items-center" v-bind="props.action">
                <span :class="item.icon" />
                <span class="ml-2">{{ item.label }}</span>
                <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
                <span v-if="item.shortcut" class="ml-auto border surface-border border-round surface-100 text-xs p-1">{{
                    item.shortcut
                }}</span>
                <i v-if="hasSubmenu"
                    :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </a>
        </template>
        <WhatsappButton />
        <template #end>
            <div class="flex align-items-center gap-2">
                <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
                <Avatar image="/images/avatar/amyelsner.png" shape="circle" />
                <img src="">
            </div>
        </template>
    </Menubar>

</template>

<style lang="css"></style>
