<template>
    <div id="app">
        <header>
            <div class="container">
                <router-link to="/" exact tag="div" class="header-logo">
                    <a class="logo"></a>
                </router-link>
                <input type="text" v-model="term" class="search-input" placeholder="Nunca dejes de buscar">
                <button class="search-button" tabindex="4" @click="searchItem">
                    <div role="img" aria-label="Buscar" class="search-button-icon"></div>
                </button>
            </div>
        </header>
        <main>
            <Loading v-if="loading"/>
            <!-- <div v-else class="container"> -->
                <router-view/>
            <!-- </div> -->
        </main>
    </div>
</template>

<script>

import Loading from './components/Loading.vue'
import { mapGetters } from 'vuex'

export default {
    mounted: function () {
        window.addEventListener('keydown', this.keyboardEvents)
    },
    data() {
        return {
                term: ''
        }
    },
    components:{
        Loading
    },
    computed: {
        ...mapGetters({
            loading: 'api/loading',
        }),
    },
    methods: {
        keyboardEvents(event) {
            if(event.keyCode === 13){
                this.searchItem()
            }
        },
        searchItem(){
            if ( this.term ) {
                this.$router.push({name: 'items', query:{search: this.term}})
                this.term = ''
            }
        }
    }
}
</script>

<style>
    @import '../assets/css/app.css';
</style>


