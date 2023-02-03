<script setup>
import { onMounted, ref } from "vue";

const props = defineProps({
  memos: Array,
  id: String,
});
const emits = defineEmits(["editMemo", "deleteMemo"]);

let textInput = ref("");
const id = parseInt(props.id);

onMounted(() => {
  const memo = props.memos.find((memo) => memo.id === id);
  textInput.value = memo.text;
});

const clickEdit = () => {
  emits("editMemo", textInput.value, id);
};

const clickDelete = () => {
  emits("deleteMemo", id);
};
</script>

<template>
  <textarea v-model="textInput" required />
  <div class="form_buttons">
    <button @click="clickEdit" class="edit_button">save</button>
    <button @click="clickDelete" class="delete_button">delete</button>
  </div>
</template>

<style>
* {
  width: 300px;
}
textarea {
  resize: none;
  margin-top: 30px;
  height: 300px;
  border-radius: 8px;
  font-size: 15px;
  background-color: #cccccc;
}
.form_buttons {
  display: flex;
}
button {
  width: 140px;
  height: 40px;
  background-color: #89bde8;
  font-size: 18px;
  color: white;
  border-radius: 8px;
  border: none;
}
.delete_button {
  background-color: red;
  width: 70px;
}
</style>
