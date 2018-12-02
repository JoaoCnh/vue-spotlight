<template>
  <div class="search-bar">
    <div class="search-icon">
      <font-awesome-icon icon="search" size="2x"/>
    </div>
    <input
      type="text"
      class="search-input"
      placeholder="Spotlight Search"
      autofocus
      @input="debounceSearch"
    >
  </div>
</template>

<script>
import { debounce } from "lodash-es";

export default {
  name: "search-bar",
  methods: {
    debounceSearch: debounce(function(e) {
      if (!e.target.value) {
        this.$store.commit("reset");
        return;
      }

      this.$store.dispatch("search", e.target.value);
    }, 500)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-bar {
  z-index: 10;
  height: 55px;
  position: relative;
  background-color: rgba(0, 21, 41, 0.97);
}

.search-icon {
  float: left;
  width: 22px;
  height: 22px;
  margin: 16.5px;
  position: static;
  background-size: cover;
}

.search-icon > svg {
  color: #a6a6a6;
}

.search-input {
  margin: 0;
  padding: 0;
  float: left;
  height: 55px;
  color: #ffffff;
  font-size: 1.7em;
  font-weight: 100;
  padding-left: 55px;
  padding-right: 50px;
  width: 400px !important;
  box-sizing: content-box;
  border: none !important;
  outline: none !important;
  max-width: 350px !important;
  background-color: transparent;
}

.search-input:-ms-input-placeholder {
  color: #a6a6a6;
}
.search-input:-moz-placeholder {
  color: #a6a6a6;
}
.search-input::-moz-placeholder {
  color: #a6a6a6;
}
.search-input::-webkit-input-placeholder {
  color: #a6a6a6;
}
</style>
