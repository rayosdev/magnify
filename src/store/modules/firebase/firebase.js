import firebase from 'firebase'
import auth from 'firebase/auth'


export default {
    namespace: true,
    state: {
        user: {name:"bob"}
    },

    getters: {
        // user (state) {
        //     return state.user
        // },

        // isAuth (state) {
        //     return state.user
        // }
    },

    mutations: {
        // SET_USER (state, payload){
        //     let user = payload
        //     state.user = user
        // },
        // RESET_USER (state){
        //     state.user = null
        // }
    },

    actions: {
        // async signIn (store, payload){
        //     let email = payload.email
        //     let password = payload.password

        //     await firebase.auth().signInWithEmailAndPassword(email, password)
        //         .then(user => {
        //             store.commit('SET_USER', user)
        //         })
        //         .catch(err => {
        //             return err
        //         })
        // },
    }
}