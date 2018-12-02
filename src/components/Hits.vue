<template>
  <div class="hits" v-bind:class="{ open: isOpen }">
    <div class="hit-list-container">
      <ul>
        <li v-for="hitHeader in hitHeaders">
          <div class="hit-result-header">{{hitHeader}}</div>
          <ul>
            <li
              v-for="hit in getHitByGroup(hitHeader)"
              class="hit-result"
              v-bind:class="{ selected: isHitSelected(hit.flatIndex) }"
              @click="selectHit({ index: hit.flatIndex })"
            >{{hit.name}}</li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="hit-detail-container">
      <div class="hit-detail">
        <img class="hit-detail-image" v-bind:src="currentHitProp('imageUrl')">
        <h1 class="hit-detail-title">{{currentHitProp('name')}}</h1>
        <span>{{currentHitProp('type')}}</span>
        <span>{{currentHitProp('setName')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "hits",
  computed: {
    ...mapGetters(["getHitByGroup", "isHitSelected", "currentHitProp"]),
    hitHeaders() {
      return Object.keys(this.$store.state.hits);
    },
    isOpen() {
      return Object.keys(this.$store.state.hits).length > 0;
    }
  },
  methods: { ...mapMutations(["selectHit"]) }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hits {
  max-height: 0;
  min-height: 0;
  overflow: hidden;
  transition: all 0.3s;
  background-color: rgba(0, 20, 41, 0.97);
}

.hits.open {
  min-height: 375px;
  max-height: 400px;
  border-top: 1px solid #515253;
}

.hit-list-container {
  width: 290px;
  overflow: hidden;
  overflow-y: auto;
  user-select: none;
  position: absolute;
  height: calc(100% - 55px);
  background-color: rgba(0, 20, 41, 0.97);
  border-right: 1px solid #515253;
}

ul {
  min-height: calc(100% - 55px);
}

ul,
li {
  margin: 0;
  padding: 0;
  width: 100%;
  list-style-type: none;
}

.hit-result-header {
  color: #ffffff;
  font-size: 12px;
  padding: 4px 0 2px 25px;
  text-transform: uppercase;
  background-color: rgba(53, 75, 84, 0.97);
}

.hit-result {
  color: #ffffff;
  cursor: pointer;
  font-size: 12px;
  padding: 6px 6px 6px 25px !important;
}

.hit-result.selected {
  color: #ffffff;
  background-color: #0093f8;
}

.hit-detail-container {
  width: 390px;
  height: 375px;
  display: block;
  color: #ffffff;
  overflow-y: auto;
  margin-left: 290px;
  background-color: rgba(1, 20, 41, 0.97);
}

.hit-detail {
  padding: 8px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}

.hit-detail-image {
  height: 250px;
  border-radius: 15px;
}

.hit-detail-title {
  color: #ffffff;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
