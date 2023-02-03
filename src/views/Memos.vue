<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
let memos = ref([]);

onMounted(() => {
  memos.value = JSON.parse(localStorage.getItem("MemoList")) || [];
});

const saveMemos = () => {
  localStorage.setItem("MemoList", JSON.stringify(memos.value));
  router.push({ path: "/" });
};

const addMemo = (textInput) => {
  const memo = {
    text: textInput,
    id: Date.now(),
  };
  memos.value.push(memo);
  saveMemos();
};

const editMemo = (textInput, id) => {
  memos.value.map((memo) => {
    memo.text = memo.id === id ? textInput : memo.text;
  });
  saveMemos();
};

const deleteMemo = (id) => {
  memos.value = memos.value.filter((memo) => memo.id !== id);
  saveMemos();
};
</script>

<template>
  <ul v-if="memos.length > 0">
    <li v-for="memo in memos" :key="memo.id">
      <router-link
        :to="{
          name: 'edit',
          params: { id: memo.id },
        }"
        >{{ memo.text.split(/\n/)[0] }}</router-link
      >
    </li>
  </ul>
  <p v-else>No memos</p>

  <router-link :to="{ name: 'new' }" class="link_to_new">+</router-link>

  <router-view
    :memos="memos"
    :key="$route.params.id"
    @editMemo="editMemo"
    @deleteMemo="deleteMemo"
    name="edit"
  />
  <router-view @addMemo="addMemo" name="new" />
</template>

<style>
* {
  width: 300px;
  margin: auto;
}
p {
  font-size: 25px;
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
}
ul {
  padding-top: 20px;
  padding-bottom: 20px;
}
li {
  list-style-type: none;
  font-size: 20px;
  text-align: left;
}
.link_to_new {
  font-size: 30px;
  text-decoration: none;
}
</style>
