<template>
    <div class="loading">
      <div class="text">Loading...</div>
    </div>
</template>

<script>
export default {
    name: 'Loading',
}
</script>

<style>
    .loading {
        display: flex;
        width: 100%;
        justify-content: center;
        margin-top: 32px;
    }
    .loading div.text{
        animation: blinker 1s linear infinite;
        width: 75px;
    }
    @keyframes blinker {
        50% {
            opacity: 0;
        }
    }
</style>