export const state = () => ({
  // ウィジェット情報をまとめたリスト
  widgetItems: [
    {
      id: 'simple-solid-icon',
      date: '2020/10/14',
      name: 'Solid Icon Set',
      desc: `シンプルなソリッドアイコンセットです。`,
      img: 1,
    },
  ],

  // 詳細モーダルに表示する内容
  detailItems: {},
})

export const getters = {
  // ウィジェット情報を取得
  getWidgetItems(state) {
    return state.widgetItems
  },
  // 詳細モーダルに表示する内容を取得
  getModalItems(state) {
    return state.detailItems
  },
}

export const mutations = {
  // 詳細モーダルに表示する内容を変更
  changeDetailItems(state, id) {
    // 引数で渡されたidと一致するオブジェクトを取得
    const result = state.widgetItems.filter((item) => item.id === id)
    // 代入
    state.detailItems = result[0]
  },
}

export const actions = {
  changeDetailItemsHandler({ commit }, id) {
    commit('changeDetailItems', id)
  },
}
