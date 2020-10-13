export const state = () => ({
  // ウィジェット情報をまとめたリスト
  widgetItems: [
    {
      id: 'simple-solid-icon',
      date: '2020/10/14',
      name: 'Solid Icon Set',
      desc: 'シンプルなソリッドアイコン',
    },
  ],

  // 詳細モーダルの状態
  modalStatus: false,

  // 詳細モーダルに表示する内容
  modalItems: {},
})

export const getters = {
  // ウィジェット情報を取得
  getWidgetItems(state) {
    return state.widgetItems
  },
  // モーダルの状態を取得
  getModalStatus(state) {
    return state.modalStatus
  },
  // 詳細モーダルに表示する内容を取得
  getModalItems(state) {
    return state.modalItems
  },
}

export const mutations = {
  // モーダルの状態を変更
  changeModalStatus(state) {
    state.modalStatus = !state.modalStatus
  },
  // 詳細モーダルに表示する内容を変更
  changeModalItems(state, id) {
    // モーダルの状態を変更
    state.modalStatus = !state.modalStatus
    // 引数で渡されたidと一致するオブジェクトを取得
    const result = state.widgetItems.filter((item) => item.id === id)
    // 代入
    state.modalItems = result[0]
  },
}

export const actions = {
  changeModalStatusHandler({ commit }) {
    commit('changeModalStatus')
  },
  changeModalItemsHandler({ commit }, id) {
    commit('changeModalItems', id)
  },
}
