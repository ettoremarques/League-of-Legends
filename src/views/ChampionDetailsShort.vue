<template>
  <div class="champion">
    <div class="img-name-title">
      <img :src="getImgContext(champ.id)" alt="" />
    </div>

    <div class="spells">
      <div class="spell" v-for="spell in champ.spells" :key="spell.id">
        <img :src="getSpellContext(spell.id)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ChampionDetailsShort",
  props: {
    name: {
      type: String,
    },
  },
  mounted() {
    let data = this.getJsonContext(this.name);
    this.champ = data.data[this.name];
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
    justify-content: center;

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
