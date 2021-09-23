import { mount } from '@vue/test-utils'
import ListItem from '@/components/ListItem.vue'

describe('ListItem', () => {
    it('displays the component correctly', () => {
        const wrapper = mount(ListItem,{
            propsData:{
                id: "MLA1104377882",
                title: "Apple iPhone 11 (128 Gb) - Morado",
                picture: "http://http2.mlstatic.com/D_872905-MLA46115014432_052021-I.jpg",
                condition: "new",
                price: {
                    currency: "$",
                    amount: 178999,
                    decimals: 2
                },
                free_shipping: true,
                state_name: "Capital Federal",
            },
            stubs: ['router-link']
        })

        const title = wrapper.find('h2')
        const image = wrapper.find('img');
        const currency = wrapper.find('.price span.sign');
        const price = wrapper.find('.price span.amount');
        const decimals = wrapper.find('.price span.decimals');
        const state_name = wrapper.find('.list-item-state');

        expect(title.text()).toContain('Apple iPhone 11 (128 Gb) - Morado')
        expect(image.attributes("src")).toEqual("http://http2.mlstatic.com/D_872905-MLA46115014432_052021-I.jpg")
        expect(image.attributes("alt")).toEqual("Apple iPhone 11 (128 Gb) - Morado")
        expect(currency.text()).toContain('$')
        expect(price.text()).toContain('178.999')
        expect(decimals.text()).toHaveLength(2)
        expect(state_name.text()).toContain('Capital Federal')
    })
})
