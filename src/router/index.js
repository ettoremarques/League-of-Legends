import Vue from "vue";
import VueRouter from "vue-router";
import ChampionList from "@/views/ChampionList.vue";
import ChampionDetails from "@/views/ChampionDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Champions List",
    component: ChampionList,
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
