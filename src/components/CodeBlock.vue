<template>
    <!--<div>{{ props.filename }}</div>-->
    <div class="overflow-hidden rounded-lg border-[2px] bg-clip-border border-gluOrange-500 shadow-2xl z-40 p-5 hidden">
        <pre :class=props.class >
<slot />
        </pre>
    </div>
</template>

<script setup>
const props = defineProps([
    'class'
])

</script>