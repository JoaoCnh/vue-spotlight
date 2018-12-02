import Vuex from "vuex";
import { groupBy } from "lodash-es";

export default () => {
  return new Vuex.Store({
    state: {
      hits: {},
      flatHits: [],
      isOpen: false,
      selectedResultIndex: 0
    },
    getters: {
      isHitSelected: state => index => {
        return state.selectedResultIndex === index;
      },
      getHitByGroup: state => group => {
        return state.hits[group];
      },
      currentHitProp: state => prop => {
        return state.flatHits[state.selectedResultIndex][prop];
      }
    },
    mutations: {
      reset(state) {
        state.hits = [];
        state.flatHits = [];
      },
      closeAndReset(state) {
        state.isOpen = false;
        this.commit("reset");
      },
      toggle(state) {
        state.isOpen = !state.isOpen;
      },
      goUp(state) {
        if (!state.isOpen) {
          return;
        }

        if (state.selectedResultIndex > 0) {
          state.selectedResultIndex--;
          return;
        }

        state.selectedResultIndex = state.flatHits.length - 1;
      },
      goDown(state) {
        if (!state.isOpen) {
          return;
        }

        if (state.selectedResultIndex < state.flatHits.length - 1) {
          state.selectedResultIndex++;
          return;
        }

        state.selectedResultIndex = 0;
      },
      selectHit(state, payload) {
        state.selectedResultIndex = payload.index;
      },
      updateHits(state, payload) {
        state.hits = payload.hits;
        state.flatHits = payload.flatHits;
      }
    },
    actions: {
      async search({ commit }, term) {
        const res = await fetch(
          `https://api.magicthegathering.io/v1/cards?name=${term}`
        );
        const json = await res.json();

        // because magic api has no group feature
        // adding the flatIndex property will come in handy later
        const flatHits = json.cards.map((card, index) => {
          return {
            ...card,
            flatIndex: index
          };
        });

        commit("updateHits", {
          flatHits: flatHits,
          hits: groupBy(flatHits, "rarity")
        });
      }
    }
  });
};
