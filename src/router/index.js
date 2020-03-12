import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../components/user/user.vue";
import UserStart from "../components/user/UserStart.vue";
import UserDetail from "../components/user/UserDetail.vue";
import UserEdit from "../components/user/UserEdit.vue";
import NavBar from "../components/header/Header.vue";
import NotFound from "../views/NotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      "header-top": NavBar
    }
  },
  {
    path: "/user",
    name: "User",
    component: User,
    children: [
      { path: "/", name: "UserStart", component: UserStart },
      {
        path: ":id",
        name: "UserDetail",
        component: UserDetail,
        beforeEnter: (to, from, next) => {
          console.log("this is private content");
          next();
        }
      },
      { path: ":id/edit", name: "UserEdit", component: UserEdit }
    ]
  },
  {
    path: "/redirect-me",
    redirect: { name: "Home" }
  },
  {
    path: "/404",
    name: "Not Found",
    component: NotFound
  },
  {
    path: "*",
    redirect: { name: "Not Found" }
  }
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
];

const router = new VueRouter({
  mode: "history",
  scrollBehavior(to, from, savedPostion) {
    if (savedPostion) {
      return savedPostion;
    }
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 }
  },
  base: process.env.BASE_URL,
  routes
});

// eslint-disable-next-line no-unused-vars
router.beforeEach((to, from, next) => {
  console.log("dddddddddddddddd");
  next();
});
export default router;
