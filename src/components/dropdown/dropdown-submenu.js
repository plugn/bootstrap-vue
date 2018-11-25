import { mergeData } from 'vue-functional-data-merge'
import Link, { propsFactory as linkPropsFactory } from '../link/link'

export const liskProps = linkPropsFactory()

export default {

  render (h, { props, data, children }) {
    const submenu = h(
      'div',
      {
        ref: 'submenu',
        class: 'dropdown-submenu'
      }
    );

    const toggle = h(
      'a',
      {
        class: 'dropdown-item dropdown-toggle',
        href: '#'
      }
    );

    return h(
      submenu,
      mergeData(data, {
        props,
        staticClass: 'dropdown-submenu dropdown-toggle'
        // attrs: { role: 'menuitem' }
      }),
      [this.$slots.default]
    )
  },
  props: {
    role: {
      type: String,
      default: 'submenu'
    }
  }
}
