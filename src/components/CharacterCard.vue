<script>
export default {
    props: {
        characterData: Object,
    },

}
</script>

<template>
    <div>
        <img src="" alt="">
        <h2>{{ characterData.name }}</h2>
        <div class="species">{{ characterData.type }}</div>
    </div>
</template>

<style lang="scss" scoped></style>