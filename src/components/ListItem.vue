<template>
    <router-link :to="{ name: 'detail', params: { id: id } }" tag="li" class="list-item">
        <div class="list-item-image">
            <img :src="picture" :alt="title">
        </div>

        <div class="list-item-content">
            <div class="list-item-price">
                <Price class="price"
                    v-bind:amount="price.amount"
                    v-bind:currency="price.currency"
                    v-bind:shipping="free_shipping"
                    v-bind:decimals="price.decimals"/>
            </div>
            <h2 class="list-item-title">
                {{title}}
            </h2>

        </div>

        <div class="list-item-state">
            <span>{{state_name}}</span>
        </div>
    </router-link>
</template>

<script>
import { mapActions } from 'vuex'
import Price from '../components/Price.vue'

export default {
    name: 'ListItem',
    props: {
        id: String,
        title: String,
        picture: String,
        price: Object,
        condition: String,
        free_shipping: Boolean,
        state_name: String,
    },
    watch:{
        '$route.query.search'() {
            this.search(this.$route.query.search)
        }
    },
    components:{
        Price
    },
    methods: {
        ...mapActions({
            getItems: 'api/getItems',
        }),
        search(search) {
            this.getItems(search)
        },
    }
}
</script>