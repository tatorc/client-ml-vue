<template>
    <div class="container" v-if="!loading">
        <div v-if="notFound()" class="result-box">
            <NotFound v-bind:message="registers"/>
        </div>
        <div v-else class="result-box">
            <BreadCrumb/>
            <div class="list-container">
                <ol class="list">
                    <ListItem v-for="(reg, index) in registers.items" :key="index" 
                        v-bind:id="reg.id"
                        v-bind:title="reg.title"
                        v-bind:picture="reg.picture"
                        v-bind:price="reg.price"
                        v-bind:free_shipping="reg.free_shipping"
                        v-bind:state_name="reg.state_name"
                        v-bind:condition="reg.condition">
                    </ListItem>
                </ol>

            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import ListItem from '../components/ListItem.vue'
import BreadCrumb from '../components/Breadcrumb.vue'
import NotFound from '../components/NotFound.vue'

export default {
    name: 'Items',
    beforeMount(){
        this.search(this.$route.query.search)
    },
    data() {
        return {
            term: '',
        }
    },
    components:{
        NotFound, ListItem, BreadCrumb
    },
    computed: {
        ...mapGetters({
            registers: 'api/items',
            loading: 'api/loading',
        }),
    },
    watch:{
        '$route.query.search'() {
            let search = this.$route.query.search
            this.search(search);
        }
    },
    methods: {
        ...mapActions({
            getItems: 'api/getItems',
        }),
        notFound() {
            if (typeof this.registers != "object") return true
            else return false
        },
        search(search) {
            this.getItems(search)
        },
    }
}
</script>