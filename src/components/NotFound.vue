<template>
    <div class="message">
      <div class="text" v-html="message"></div>
    </div>
</template>

<script>
export default {
    name: 'NotFound',
    props: {
        message: String,
    },
}
</script>

<style>
    .message {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 32px;
        font-size: 18px;
    }
    .message div.text{
        width: 600px;
        text-align: center;
    }

</style>
