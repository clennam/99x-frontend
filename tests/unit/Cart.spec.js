import { shallowMount } from '@vue/test-utils'
import Cart from '@/views/Cart.vue'

describe('Cart.vue', () => {
  it('should correctly calculate the bill', () => {
    const wrapper = shallowMount(Cart, {
      data() {
        return {
          detailList: [{
            price: 4000,
            title: 'Test'
          }]
        };
      }
    })
    expect(wrapper.text()).toContain("Final Total 3763.2")
  })
})
