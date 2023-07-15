<template>
    <button @click="toggleDiv()" value="Hola">Hola1</button>
    <div class="app">
      <div slot="my-slot">
        <div class="div1">Div 1</div>
        <div class="div2">Div 2</div>
        <div class="div3">Div 3</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import {ref, inject, provide} from 'vue'
  
  const activeDiv = ref(1);

  // Provide the document object
    provide('document', document);

  const document = inject('document');

  function toggleDiv() {
  // Get the active div
  const activeDivEl = document.querySelector(`.div${activeDiv.value}`);

  // Toggle the class on the active div
  activeDivEl.classList.toggle('active');

  // Update the active div number
  activeDiv.value = (activeDiv.value + 1) % 3;
}
  </script>