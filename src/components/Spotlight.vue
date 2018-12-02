<template>
  <div>
    <GlobalEvents
      @keydown.up="goUp"
      @keydown.down="goDown"
      @keydown.esc="closeAndReset"
      @keydown.ctrl.space="toggle"
    />
    <div class="overlay" v-if="isOpen">
      <search-bar/>
      <hits/>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
import GlobalEvents from "vue-global-events";

import Hits from "./Hits.vue";
import SearchBar from "./SearchBar.vue";

export default {
  name: "spotlight",
  components: { Hits, SearchBar, GlobalEvents },
  props: { apiUrl: String },
  computed: { ...mapState(["isOpen"]) },
  methods: { ...mapMutations(["toggle", "goUp", "goDown", "closeAndReset"]) }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.overlay {
  top: 20%;
  left: 50%;
  width: 680px;
  z-index: 100;
  font-size: 12px;
  overflow: hidden;
  border-radius: 6px;
  position: absolute;
  margin-left: -340px;
  letter-spacing: 0.3px;
  font-family: Verdana, "Lucida Sans Unicode", sans-serif;
  box-shadow: 0 12px 15px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}
</style>
