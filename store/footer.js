export default {
    state: {
        iconList: null,
        info: null,
        links: null
    },
    getters: {
        data: state => {
            return {
                iconList: state.iconList,
                info: state.info,
                links: state.links
            }
        }
    },
    mutations: {
        updateiconList(state, payload) {
            state.iconList = payload;
        },
        updateInfo(state, payload) {
            state.info = payload;
        },
        updateLinks(state, payload) {
            state.links = payload;
        }
    },
    actions: {
        async loadData({ commit }, payload) {
            // axios
            commit('updateLinks', payload = [
                {
                    label: 'Index',
                    link: '/'
                },
                {
                    label: 'About us',
                    link: '/about'
                },
                {
                    label: 'Home',
                    link: '/home'
                },
                {
                    label: 'About us',
                    link: '/home'
                },
                {
                    label: 'About us',
                    link: '/home'
                }
            ])
            commit('updateInfo', payload = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur.')
            commit('updateiconList', payload = [
                {
                    icon: 'fb-ic',
                    link: 'facebook.com',
                    iclass: 'fa-facebook',
                },
                {
                    icon: 'tw-ic',
                    link: 'facebook.com',
                    iclass: 'fa-twitter',
                },
                {
                    icon: 'gplus-ic',
                    link: 'facebook.com',
                    iclass: 'fa-google-plus',
                },
                {
                    icon: 'li-ic',
                    link: 'facebook.com',
                    iclass: 'fa-linkedin-in',
                },
                {
                    icon: 'ins-ic',
                    link: 'facebook.com',
                    iclass: 'fa-instagram',
                },
                {
                    icon: 'pin-ic',
                    link: 'facebook.com',
                    iclass: 'fa-pinterest',
                }
            ]);
        }
    }
};