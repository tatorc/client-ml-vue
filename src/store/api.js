import axios from 'axios'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default ({
    namespaced: true,
    state: {
        categories: null,
        items: null,
        itemDetail: null,
        loading: false
    },

    getters:{
        categories(state){
            return state.categories
        },
        items(state){
            return state.items
        },
        itemDetail(state){
            return state.itemDetail
        },
        loading(state){
            return state.loading
        },
    },

    mutations: {
        SET_CATEGORIES(state, categories) {
            state.categories = categories
        },
        SET_ITEMS(state, items) {
            state.items = items
        },
        SET_ITEM_DETAIL(state, items) {
            state.itemDetail = items
        },
        SET_LOADING(state, data) {
            state.loading = data
        },
    },

    actions: {
        async getItems({dispatch, commit}, term ) {
            dispatch('setLoading')
            try {
                let response = await axios.get(`/items?q=${term}`)
                commit('SET_ITEMS', response.data.data)
                commit('SET_CATEGORIES', response.data.data.categories)
            } catch (e) {
                throw Error;
            } finally{
                dispatch('clearLoading')
            }
        },

        async getDetailItem({dispatch, commit}, id ) {
            dispatch('setLoading')
            try {
                let response = await axios.get(`/items/${id}`)
                commit('SET_ITEM_DETAIL', response.data.data)
            } catch (e) {
                throw Error;
            } finally{
                dispatch('clearLoading')
            }
        },

        signOut({commit}) {
            return axios.post('auth/logout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            })
        },

        setLoading({commit}) {
            commit('SET_LOADING', true)
        },

        clearLoading({commit}) {
            commit('SET_LOADING', false)
        }
    }
})

