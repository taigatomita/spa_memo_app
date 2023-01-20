<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from "vue";

let memos = ref([]);

onMounted((memos.value = JSON.parse(localStorage.getItem("MemoList")) || []));

const saveMemos = () => {
  localStorage.setItem("MemoList", JSON.stringify(memos.value));
};

const addMemo = (textInput) => {
  memos.value.push(textInput);
  saveMemos();
};

const editMemo = (textInput, id) => {
  memos.value[id] = textInput;
  saveMemos();
};

const deleteMemo = (id) => {
  memos.value.splice(id, 1);
  saveMemos();
};
</script>

<template>
  <ul v-if="memos.length > 0">
    <li v-for="(memo, index) in memos" :key="memo.id">
      <router-link
        :to="{
          name: 'edit',
          params: { id: index },
        }"
        >{{ memo.split(/\n/)[0] }}</router-link
      >
    </li>
  </ul>
  <p v-else>No memos.</p>

  <router-link :to="{ name: 'new' }">+</router-link>

  <router-view @addMemo="addMemo" name="new" />
  <router-view @editMemo="editMemo" @deleteMemo="deleteMemo" name="edit" />
</template>
