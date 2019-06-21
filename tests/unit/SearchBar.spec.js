import { mount } from '@vue/test-utils'
import SearchBar from '@/components/SearchBar.vue'

describe('SearchBar.vue', () => {
  it('should update the search href properly', () => {
    const search = 'new search'
    const wrapper = mount(SearchBar, {
      data() { return { search: search } }
    })
    
    console.log(wrapper.html());
    expect(wrapper.html()).toContain(search)
  })
})