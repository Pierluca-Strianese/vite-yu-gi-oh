import { reactive } from 'vue';

export const store = reactive({
    CharacterList: [],
    archetypes: [],
    searchArchetypes: '',
});

export default store