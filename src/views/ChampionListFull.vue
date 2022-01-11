<template>
  <div class="list">
    <div class="card" v-for="champion in champions" :key="champion.id">
      <ChampionsDetailsShort :name="champion.id" />
    </div>
  </div>
</template>

<script>
import champions from "@/assets/champion.json";

import ChampionsDetailsShort from "@/views/ChampionDetailsShort.vue";

export default {
  name: "ChampionList",
  components: {
    ChampionsDetailsShort,
  },
  data() {
    return {
      champions: champions,
    };
  },
  methods: {
    getImgContext(name) {
      if (name) {
        const img = require.context("../assets/img/champion", false, /\.png$/);
        return img("./" + name + ".png");
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  margin: 24px 0;
  .card {
    width: fit-content;
    display: flex;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 16px;
    align-items: center;
    justify-content: center;

    img {
      max-width: 60px;
    }
  }
}

// @media screen and (min-width: 768px) {
//   .list {
//     grid-template-columns: repeat(2, 1fr);
//   }
// }
// @media screen and (min-width: 992px) {
//   .list {
//     grid-template-columns: repeat(3, 1fr);
//   }
// }
// @media screen and (min-width: 1200px) {
//   .list {
//     grid-template-columns: repeat(6, 1fr);
//   }
// }
</style>
