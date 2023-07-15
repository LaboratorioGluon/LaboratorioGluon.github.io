<template>
    <a :href="Link" class="text-slate-100 px-1 py-2 font-semibold link-underline mr-4"><slot></slot></a>
</template>


<style>
.link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size .2s ease-in-out;
    
}

.link-underline-black {
    background-image: linear-gradient(0.25turn,transparent, transparent), linear-gradient(0.25turn, theme('colors.gluOrange.400'),theme('colors.gluOrange.400'))
}

.link-underline:hover {
    background-size: 100% 3px;
    background-position: 0 100%
}
</style>


<script setup>
const props = defineProps([
    "Link",
    "Icon"
])
</script>