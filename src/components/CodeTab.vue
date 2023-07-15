<template>
    <div class="mx-[10ex]">
        <div ref="buttonDiv">
            <div class="ml-3 bg-gluOrange-50 inline-block p-2 px-4 rounded-t-lg border-t-2 border-l-2 border-r-2 border-gluOrange-500 font-mono	" 
                v-for="(file, index) in (props.fileNames.split('|'))" 
                @click="change(index)">
                {{ file }}
            </div>
        </div>
        
        <div ref="slotref">

<slot />
        </div>
    </div>
</template>

<script setup>
import { useSlots, onMounted,  ref} from 'vue';

const props = defineProps([
    'fileNames',
    'language'
])

const slotref = ref(null);
const visible = ref(0);
const buttonDiv = ref(null);

let listRef = ref(null);

onMounted(() => {
    listRef = slotref._value.children[0].children;
    listRef[visible.value].classList.remove('hidden');
    listRef[visible.value].classList.add('block');
    console.log(slotref._value.children[0].children[0].classList)
});


function change(t) {
    listRef[visible.value].classList.remove('block');
    listRef[visible.value].classList.add('hidden');

    visible.value = t
    
    listRef[visible.value].classList.remove('hidden');
    listRef[visible.value].classList.add('block');
}

</script>
