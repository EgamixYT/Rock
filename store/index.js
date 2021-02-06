export const state = () => ({
    user: []
  });
  
  export const mutations = {};
  
  export const actions = {
    async nuxtServerInit({dispatch}) {
      await dispatch('footer/loadData');
    }
  };
  
  export const getters = {};