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

  created() {
    // Richiesta API tramite AXIOS
    axios
      .get('https://db.ygoprodeck.com/api/v7/cardinfo.php', {
        params: {
          num: 20,
          offset: 0,
          fname: this.store.inputValue,
        }
      })
      .then(response => this.store.cards = response.data.data).catch((error) => {
        this.store.cards = []
      });

    // Richiesta API tramite AXIOS per archetypes
    axios.get('https://db.ygoprodeck.com/api/v7/archetypes.php')
      .then((response) => {
        this.store.archetypes = response.data;
      })
  },
}
</script>


<template>
  <h1> Yu-Gi-Ho API</h1>

  <main>
    <AppSearch />
    <CharacterList />
    <ResultMessage />
  </main>
</template>


<style lang="scss"></style>