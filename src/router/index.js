import { createRouter, createWebHistory } from "vue-router";
import Memos from "../views/Memos.vue";
import EditMemo from "../views/EditMemo.vue";
import NewMemo from "../views/NewMemo.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: Memos,
      children: [
        {
          path: "new",
          name: "new",
          component: NewMemo,
        },
        {
          path: ":id/edit",
          name: "edit",
          component: EditMemo,
          props: (route, memo) => ({
            id: route.params.id,
            memo: memo,
          }),
        },
      ],
    },
  ],
});

export default router;
