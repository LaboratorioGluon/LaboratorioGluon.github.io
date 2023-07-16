<template>
    <div ref="slotref"  class="w-full ">

    </div>
</template>


<script setup lang="ts">
import { nextTick, onMounted, ref } from 'vue';

const slotref = ref();

// {h: (h1,h2,h3 ref..), tocItem: (reference li.)}
let menuItemsDom = []
let currentHighlight = null;

function onScroll(){
    var fromTop = document.querySelector("html").scrollTop;
    menuItemsDom.map(item =>{
        //console.log(item.offset)
        if(item.h.offsetTop < fromTop)
        {
            if(item != currentHighlight)
            {
                currentHighlight.tocItem.children[0].classList.remove("text-gluOrange-500")
                item.tocItem.children[0].classList.add("text-gluOrange-500")
                currentHighlight = item;
            }
        }
    })
}

onMounted(() => {
    
    document.addEventListener('scroll', onScroll);
    const styles={
        "h1": 'w-full text-lg font-bold border-b-2 border-dotted border-slate-400',
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

            // Smooth scroll
            a.onclick = (e)=>{
                e.preventDefault();
                value.scrollIntoView({behavior: "smooth"})
            }

            li.appendChild(a);
            li.classList.value= styles[value.tagName.toLowerCase()];
            //li.classList.add(styles["h1"]);
            ul.classList.value="w-full flex"
            ul.appendChild(li);

            menuItemsDom.push(
                {
                    h: value,
                    tocItem: li
                }
            )

            slotref.value.appendChild(ul)
            currentHighlight = menuItemsDom[0]
            currentHighlight.tocItem.children[0].classList.add("text-gluOrange-500")
        });
        console.log(matches)
        console.log(menuItemsDom)
    })
});
</script>

<style>

.toc-highlight
{
    color:red !important;
}

</style>