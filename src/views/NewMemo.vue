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
  <textarea v-model="textInput" required />
  <div class="form_buttons">
    <button @click="clickAdd" class="add_button">add</button>
  </div>
</template>
