
export default {

  render (h) {
    const submenu = h(
      'div',
      {
        ref: 'submenu',
        class: 'dropdown-submenu'
      }
    )

    const toggle = h(
      'a',
      {
        class: 'dropdown-item dropdown-toggle',
        href: '#'
      },
      [this.$slots.default]
    )

    return h(
      submenu,
      [toggle]
    )
  },
  props: {
    role: {
      type: String,
      default: 'submenu'
    }
  }
}
