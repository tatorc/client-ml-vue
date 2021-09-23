<template>
    <h3>
        <span class="sign">{{ currency }}</span>
        <span class="amount">{{ parseAomunt(amount) }}</span>
        <span class="decimals">{{ parseAomunt(amount, false) }}</span>
        <span v-if="shipping" class="icon">
            <i class="free-shipping"></i>
        </span>
    </h3>
</template>

<script>
export default {
    name: 'Price',
    props: {
        amount:   Number,
        currency: String,
        decimals: Number,
        shipping: Boolean,
    },
    methods: {
        parseAomunt(value, intPart = true){
            let val = (value/1).toFixed(this.decimals).replace('.', ',').toString().split(",")
            if (!intPart) return val[1]
            else return val[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    }
}
</script>
