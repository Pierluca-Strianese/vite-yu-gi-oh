<script>
import CharacterCard from './CharacterCard.vue';
import { store } from '../store';

export default {
    data() {
        return {
            store,
        };

    },

    components: {
        CharacterCard,
    },

};
</script>

<template>
    <div class="container">
        <CharacterCard v-for="character in store.CharacterList" :key="character.id" class="card"
            :characterData="character" />
    </div>
</template>

<style lang="scss" scoped></style>