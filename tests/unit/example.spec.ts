import { mount } from '@vue/test-utils'
import CadastrarVeiculo from '@/views/CadastrarVeiculo.vue'

describe('CadastrarVeiculo.vue', () => {
  it('renders tab 1 Tab1Page', () => {
    const wrapper = mount(CadastrarVeiculo)
    expect(wrapper.text()).toMatch('Tab 1 page')
  })
})
