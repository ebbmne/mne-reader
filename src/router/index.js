import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/ebook"
  },
  {
    path: "/ebook",
    component: () => import("@/views/EBook"),
    children: [
      {
        path: ":fileName",
        component: () => import("@/components/EBook/Reader.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
