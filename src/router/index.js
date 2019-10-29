import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/ebook/:bookName"
  },
  {
    path: "/ebook",
    component: () => import("@/views/EBook.vue"),
    children: [
      {
        path: ":catagory/:bookName",
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
