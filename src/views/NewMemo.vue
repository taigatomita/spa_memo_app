<script setup>
import { ref } from "vue";

const textInput = ref("");

const emit = defineEmits(["addMemo"]);

const clickAdd = () => {
  emit("addMemo", textInput.value);
  textInput.value = "";
};
</script>

<template>
  <div>
    <textarea v-model="textInput" required></textarea>
    <button @click="clickAdd">add</button>
  </div>
  <router-link :to="{ path: '/' }">end</router-link>
</template>
