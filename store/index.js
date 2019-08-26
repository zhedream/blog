export const state = () => ({
  pageIndex: '/'
})

export const mutations = {
  setPageIndex (state, index) {
    let a = index+'';
    console.log('set',a);
    state.pageIndex = a;
  }
}

export const getters = {
  getPageIndex (state) {
    console.log('get',state.pageIndex);
    
    return state.pageIndex
  }
}
