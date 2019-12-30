<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/index">index</router-link> |
      <router-link to="/bar_charts">bar_charts</router-link> |
      <router-link to="/mapChart">mapChart</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

body, html {
  height: 100%;
}

.fl {
  float: left;
}

.fr {
  float: right;
}

.clearfix::after {
  content: "";
  height: 0;
  display: block;
  clear: both;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
