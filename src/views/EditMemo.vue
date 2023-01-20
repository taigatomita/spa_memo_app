<script setup>
import { onMounted, ref } from "vue";

let textInput = ref("");
const props = defineProps(["memo", "id"]);
const emits = defineEmits(["editMemo", "deleteMemo"]);
const id = parseInt(props.id);

onMounted(() => {
  textInput.value = props.memo;
});

const clickEdit = () => {
  emits("editMemo", textInput.value, id);
};

const clickDelete = () => {
  emits("deleteMemo", id);
};
</script>

<template>
  <div>
    <textarea v-model="textInput" required></textarea>
    <button @click="clickEdit">save</button>
    <button @click="clickDelete">delete</button>
  </div>
  <router-link :to="{ path: '/' }">end</router-link>
</template>
