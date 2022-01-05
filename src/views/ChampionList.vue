<template>
  <div class="list">
    <router-link
      tag="div"
      :to="'/champion/' + champion.name"
      class="card"
      v-for="champion in champions"
      :key="champion.id"
    >
      <img :src="getImgContext(champion.id)" alt="" />
      <div class="nome-title">
        <span class="champ-name">{{ champion.name }}</span>
        <span class="champ-title">{{ champion.title }}</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import champions from "@/assets/champion.json";

export default {
  name: "ChampionList",

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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  padding: 20px 0;

  .card {
    display: flex;
    width: 100%;
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 16px;
    cursor: pointer;
    align-items: center;
    img {
      margin-right: 16px;
      max-width: 60px;
    }

    .nome-title {
      display: flex;
      flex-direction: column;

      .champ-name {
        font-size: 20px;
      }
      .champ-title {
        font-size: 14px;
        white-space: nowrap;
      }
    }
  }
}

@media screen and (min-width: 768px) {
  .list {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media screen and (min-width: 992px) {
  .list {
    grid-template-columns: repeat(3, 1fr);
  }
}
@media screen and (min-width: 1200px) {
  .list {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
