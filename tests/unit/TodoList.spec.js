/* eslint-env node, vitest */

import { mount } from '@vue/test-utils'
import TodoList from '../../src/components/TodoList.vue'

describe('TodoList.vue', () => {
  it('adds a todo', async () => {
    const wrapper = mount(TodoList)
    const input = wrapper.get('input')
    await input.setValue('Read book')
    await wrapper.get('button').trigger('click')
    expect(wrapper.html()).toContain('Read book')
  })

  it('removes a todo', async () => {
    const wrapper = mount(TodoList)
    const input = wrapper.get('input')
    await input.setValue('Test remove')
    await wrapper.get('button').trigger('click')
    expect(wrapper.html()).toContain('Test remove')
    await wrapper.findAll('button')[1].trigger('click') // 2nd button = remove
    expect(wrapper.html()).not.toContain('Test remove')
  })
})
