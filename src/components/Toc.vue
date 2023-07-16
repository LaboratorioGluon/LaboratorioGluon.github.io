<template>
    <div ref="slotref"  class="w-full sticky top-20">

    </div>
</template>


<script setup >
import { nextTick, onMounted, ref } from 'vue';

const slotref = ref();


/*function onScroll(){
    console.log("scroll");
}*/

onMounted(() => {
    
    //document.addEventListener('scroll', onScroll);
    const styles={
        "h1": 'w-full text-lg font-bold border-b-2 border-dotted border-slate-400 border-solid',
        "h2": 'pl-2',
        "h3": 'text-sm pl-4'
    }

    nextTick(() => {
        const matches = document.querySelectorAll("main h2, main h3, main h1");
        matches.forEach(value => {
            const ul = document.createElement('ul');
            const li = document.createElement('il');
            const a = document.createElement('a');
            a.innerHTML =  value.textContent;
            a.href = `#${value.id}`;
            

            li.appendChild(a);
            li.classList.value= styles[value.tagName.toLowerCase()];
            //li.classList.add(styles["h1"]);
            ul.classList.value="w-full flex"
            ul.appendChild(li);
            slotref.value.appendChild(ul)
        });
        console.log(matches)
    })
});
</script>

<style scoped>
</style>