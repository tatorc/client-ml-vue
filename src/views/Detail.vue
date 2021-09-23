<template>
    <div class="container" v-if="!loading">
        <div v-if="notFound()" class="result-box">
            <NotFound v-bind:message="detail"/>
        </div>
        <div v-else class="result-box">

            <BreadCrumb/>

            <div class="detail-container">
                <div class="detail-main">

                    <div class="detail-main-img">
                        <img :src="detail.picture" :alt="detail.title" height="680" width="680">
                    </div>

                    <div class="detail-main-info">
                        <div class="condition">
                            <span v-if="detail.condition === 'new'">Nuevo</span>
                            <span v-else>Usado</span> - <span>{{detail.sold_quantity}} vendidos</span>
                        </div>

                        <h1>{{detail.title}}</h1>
                            <Price
                                v-bind:amount="detail.price.amount"
                                v-bind:currency="detail.price.currency"
                                v-bind:decimals="detail.price.decimals"/>

                        <button>Comprar</button>
                    </div>

                </div>

                <div class="detail-description">
                    <h3>Descripcion del Producto</h3>
                    <div>{{detail.description}}</div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import Price from '../components/Price.vue'
import BreadCrumb from '../components/Breadcrumb.vue'
import NotFound from '../components/NotFound.vue'

export default {
    name: 'Detail',
    beforeMount(){
        this.getDetail(this.$route.params.id)
    },
    data() {
        return {
                term: ''
        }
    },
    components:{
        NotFound, Price, BreadCrumb
    },
    computed: {
        ...mapGetters({
            detail: 'api/itemDetail',
            loading: 'api/loading',
        }),
    },
    watch:{
        '$route.params.id'() {
            let item_id = this.$route.params.id
            this.getDetail(item_id);
        }
    },
    methods: {
        ...mapActions({
            getDetailItem: 'api/getDetailItem',
        }),
        getDetail(item_id) {
            this.getDetailItem(item_id)
        },
        notFound() {
            if (typeof this.detail != "object") return true
            else return false
        },
    }
}
</script>
