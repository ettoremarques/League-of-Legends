import Vue from "vue";
import VueRouter from "vue-router";
import ChampionList from "@/views/ChampionList.vue";
import ChampionListFull from "@/views/ChampionListFull.vue";
import ChampionDetails from "@/views/ChampionDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Champions List",
    component: ChampionList,
  },
  {
    path: "/tudo_fodasse",
    name: "Champions List",
    component: ChampionListFull,
  },
  {
    path: "/champion/:championName",
    name: "Champion Details",
    component: ChampionDetails,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
