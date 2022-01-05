<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: black;
  font-family: "Arial";
  font-weight: 400;
  font-size: 1.6rem;
}

#app {
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
}

@media screen and (min-width: 576px) {
  #app {
    max-width: 540px;
    padding: 0;
  }
}
@media screen and (min-width: 768px) {
  #app {
    max-width: 720px;
  }
}
@media screen and (min-width: 992px) {
  #app {
    max-width: 960px;
  }
}
@media screen and (min-width: 1200px) {
  #app {
    max-width: 1140px;
  }
}
@media screen and (min-width: 1400px) {
  #app {
    max-width: 1320px;
  }
}
</style>
