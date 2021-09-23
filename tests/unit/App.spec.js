import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import App from '@/App.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    loading: false
  },
  getters: {
    'api/loading': (state) => state.loading
  }
})

describe('App', () => {
    it('Mount the component correctly', () => {
        const wrapper = shallowMount(App, {
            store,
            localVue,
            stubs: ['router-link', 'router-view']
        })

        const input = wrapper.find('input')

        expect(wrapper.find('button').exists()).toBe(true)
        expect(input.attributes("type")).toEqual("text")

    })
})
