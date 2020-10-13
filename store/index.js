export const state = () => ({
  widgetItems: [
    {
      id: 'simple-solid-icon',
    },
  ],
})

export const getters = {
  getWidgetItems(state) {
    return state.widgetItems
  },
}
