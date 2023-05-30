<script>
import { store } from '../store';
export default {
    data() {
        return {
            store,
        }
    },
    methods: {
        emitArchetypes() {
            this.$emit('performSearch');
        },
        resetArchetypes() {
            this.$emit('resetSearch');
        }
    },
}
</script>

<template>
    <nav>
        <div class="container">
            <div>
                <select v-model="store.searchArchetypes" @change="emitArchetypes">
                    <option value="">Select an Archetype</option>
                    <option v-for="archetype in store.archetypes" :key="archetype" :value="archetype.archetype_name">{{
                        archetype.archetype_name }}</option>
                </select>
                <button @click="resetArchetypes">Reset</button>
            </div>
        </div>
    </nav>
</template>