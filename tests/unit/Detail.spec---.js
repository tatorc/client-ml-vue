import { mount, createLocalVue } from '@vue/test-utils'
import Detail from '@/views/Detail.vue'

const notFound = {"texto"}

describe('Detail', () => {
  let wrapper

  beforeEach(() => {
    const localVue = createLocalVue()
    wrapper = mount(Detail, {
      localVue,
      propsData: {
        loading: false
      },
      mocks: {
        $route: {
          params: {
            id: 'MLA1103930410'
          }
        }
      }
    })
  })

  it('displays the component with not found message', () => {
    const title = wrapper.find('.message')
    expect(title.text()).toContain('texto')
})
})

// // import { mount } from '@vue/test-utils'
// import { shallowMount, createLocalVue } from '@vue/test-utils'
// import Vuex from 'vuex'
// import VueRouter from 'vue-router'
// import Detail from '@/views/Detail.vue'

// const localVue = createLocalVue()
// const $route = {
//     path: '/items/id'
// }
// const notFound = "texto";
// const item = {
//     id: "MLA1103930410",
//     title: "Apple iPhone 11 (64 Gb) - Blanco",
//     price: {
//         currency: "$",
//         amount: 172999,
//         decimals: 2
//     },
//     picture: "http://http2.mlstatic.com/D_809326-MLA46115014340_052021-O.jpg",
//     condition: "new",
//     free_shipping: true,
//     sold_quantity: 1,
//     description: "texto"
//   };

// describe('Detail', () => {
//     localVue.use(VueRouter)
//     localVue.use(Vuex)
//     let actions
//     let store

//     beforeEach(() => {
//         actions = {
//             getDetailItem: jest.fn(),
//         }
//         store = new Vuex.Store({
//             actions
//         })
//     })

//     const router = new VueRouter()


//     it('displays the component with not found message', () => {
//         const wrapper = shallowMount(Detail,{
//             propsData: notFound,
//             localVue,
//             router,
//             mocks: {
//               $route
//             }
//         })

//         const title = wrapper.find('.message')
//         expect(title.text()).toContain('texto')
//     })

//     it('displays the component correctly', () => {
//         const wrapper = shallowMount(Detail,{
//             propsData: item
//         })

//         const title = wrapper.find('.message')
//         expect(title.text()).toContain('texto')
//     })
// })
