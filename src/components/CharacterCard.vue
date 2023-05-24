<script>
export default {
    props: {
        characterData: Object,
    },

}
</script>

<template>
    <div class="card">
        <img :src="characterData.card_images[0].image_url" alt="">
        <h2>{{ characterData.name }}</h2>
        <div class="species">{{ characterData.type }}</div>
    </div>
</template>

<style lang="scss" scoped>
.card {
    width: calc(100% / 6 - 30px);
    margin: 20px 15px;
    background-color: #CA9249;

    img {
        width: 100%;
    }

    h2 {
        font-size: 1.2rem;
    }
}
</style>