<script>
import AppSearch from './components/AppSearch.vue';
import CharacterList from './components/CharacterList.vue';
import ResultMessage from './components/ResultMessage.vue';
import axios from 'axios';
import { store } from './store';

export default {
  data() {
    return {
      store,
    }
  },

  components: {
    AppSearch,
    CharacterList,
    ResultMessage,
  },

  methods: {
    filteredArchetypes() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
        params: {
          num: 20,
          offset: 0,
          archetype: this.store.searchArchetypes,
        }
      })
        .then(response => (this.store.CharacterList = response.data.data));
    },

    reset() {
      axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
        .then(response => (this.store.CharacterList = response.data.data));
      this.store.searchArchetypes = ''
    },
  },

  created() {
    axios.get('https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0')
      .then(response => (this.store.CharacterList = response.data.data));

    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then(response => (this.store.archetypes = response.data));
  },
}
</script>


<template>
  <h1> Yu-Gi-Ho API</h1>

  <main>
    <AppSearch @performSearch="filteredArchetypes" @resetSearch="reset" />
    <CharacterList />
    <ResultMessage />
  </main>
</template>


<style lang="scss"></style>