<template>
  <div class="champion">
    <div class="img-name-title">
      <img :src="getImgContext(champ.id)" alt="" />
      <div class="name-title">
        <span class="name">{{ champ.name }}</span>
        <span class="title">{{ champ.title }}</span>
      </div>
    </div>
    <p class="lore">
      <span>Lore:</span> <br />
      {{ champ.lore }}
    </p>

    <div class="spells">
      <h1>Habilidades</h1>
      <div class="spell" v-for="spell in champ.spells" :key="spell.id">
        <img :src="getSpellContext(spell.id)" alt="" />
        <p class="description">{{ spell.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChampionDetails",
  mounted() {
    const champName = this.$route.params.championName;
    let data = this.getJsonContext(champName);
    this.champ = data.data[champName];
  },
  data() {
    return {
      champ: {},
    };
  },
  methods: {
    getJsonContext(name) {
      if (name) {
        const json = require.context("../assets/champion", false, /\.json$/);
        return json("./" + name + ".json");
      }
    },
    getImgContext(name) {
      if (name) {
        const img = require.context("../assets/img/champion", false, /\.png$/);
        return img("./" + name + ".png");
      }
    },
    getSpellContext(name) {
      if (name) {
        const img = require.context("../assets/img/spell", false, /\.png$/);
        return img("./" + name + ".png");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.champion {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-content: flex-start;

  .img-name-title {
    display: flex;
    align-items: center;
    margin-bottom: 24px;

    img {
      margin-right: 24px;
    }

    .name-title {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }
  }

  .lore {
    font-size: 16px;
    line-height: 24px;
    margin-bottom: 24px;

    span {
      font-size: 20px;
      font-weight: 700;
    }
  }

  .spells {
    h1 {
      margin-bottom: 24px;
      text-align: center;
    }
    .spell {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;

      img {
        min-width: 150px;
        margin-right: 24px;
        margin-bottom: 20px;
      }

      p {
        font-size: 24px;
        line-height: 24px;
        text-align: center;
      }
    }
  }
}

@media screen and (min-width: 576px) {
  .champion {
    .spells {
      h1 {
        text-align: left;
      }
      .spell {
        flex-direction: row;
        align-items: flex-start;

        p {
          text-align: left;
        }
      }
    }
  }
}
</style>
