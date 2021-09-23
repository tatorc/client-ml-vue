import mutations from './mutations'
import actions from './actions'


export default function createStoreConfig() {
    const state = {
        loading: false
    }

    const getters = {
        'api/loading': (state) => state.loading
    }

    return {
        state
        actions,
        mutations,
        getters
    }
}