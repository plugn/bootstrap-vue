import dropdownMixin from '../../mixins/dropdown'

export default {
  mixins: [dropdownMixin],
  render (h) {
    const toggle = h(
      'a',
      {
        ref: 'toggle',
        class: 'dropdown-item dropdown-toggle',
        href: '#',
        on: {
          click: this.toggle, // click
          keydown: this.toggle // enter, space, down
        }
      },
      [this.text]
    )

    const menu = h(
      'div',
      {
        ref: 'menu',
        class: this.menuClasses,
        attrs: {
          role: this.role
        }
      },
      [this.$slots.default]
    )

    return h(
      'div',
      {
        ref: 'submenu',
        class: 'dropdown-submenu'
      },
      [toggle, menu]
    )
  },
  props: {
    role: {
      type: String,
      default: 'submenu'
    },
    text: {
      type: String,
      default: 'labelText'
    }
  },
  computed: {
    menuClasses () {
      return [
        'dropdown-menu',
        {
          'show': this.visible
        },
        this.menuClass
      ]
    }
  },
  methods: {
    onClick (e) {
      console.log('ddSubMenu.onClick()', e)
    },
    onFocusOut (e) {
      console.log('ddSubMenu.onFocusOut()', e)
    },
    toggle (evt) {
      // Called only by a button that toggles the menu
      evt = evt || {}
      const type = evt.type
      if (type !== 'click' && !(type === 'keydown')) {
        // We only toggle on Click, Enter, Space, and Arrow Down
        return
      }
      if (this.disabled) {
        this.visible = false
        return
      }
      this.$emit('toggle', evt)
      if (evt.defaultPrevented) {
        // Exit if canceled
        return
      }
      evt.preventDefault()
      evt.stopPropagation()
      // Toggle visibility
      this.visible = !this.visible
    },
    click (evt) {
      // Calle only in split button mode, for the split button
      if (this.disabled) {
        this.visible = false
        return
      }
      this.$emit('click', evt)
    }
  }
}
