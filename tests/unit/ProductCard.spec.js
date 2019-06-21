import { shallowMount } from '@vue/test-utils'
import ProductCard from '@/components/ProductCard.vue'

describe('ProductCard.vue', () => {
  it('should point to the right details page', () => {
    const id = 2
    const wrapper = shallowMount(ProductCard, {
      propsData: { id }
    })
    console.log(wrapper.html())
    expect(wrapper.html()).toContain("/product/"+id)
  })
})
