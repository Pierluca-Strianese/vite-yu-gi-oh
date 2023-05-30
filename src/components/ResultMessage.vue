<script>
import { store } from '../store';

export default {
    data() {

        return {
            store,
        }
    },
}

</script>

<template>
    <div class="counter">Found {{ store.CharacterList.length }} Cards! </div>
</template>

<style lang="scss" scoped>
.counter {
    text-align: center;
    font-size: 2rem;
    padding: 2rem;
}
</style>