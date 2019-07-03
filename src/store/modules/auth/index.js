import firebase from 'firebase'
import auth from 'firebase/auth'




// const config = {
//     apiKey: "AIzaSyAOdh21lL7vwK48hdfftYoa11WtYFX8PWQ",
//     authDomain: "stanm-dd7e0.firebaseapp.com",
//     databaseURL: "https://stanm-dd7e0.firebaseio.com",
//     projectId: "stanm-dd7e0",
//     storageBucket: "stanm-dd7e0.appspot.com",
//     messagingSenderId: "399756352964",
//     appId: "1:399756352964:web:adeec1a9dc5103b4"
// }

// firebase.initializeApp(config)

//             // firebase.auth().createUserWithEmailAndPassword("te@te.te", "123123")
//             // .then(res => {
//             //     console.log(res)
//             // })



// firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       // User is signed in.
//         console.log(user.email, "is loged in at the moment")
        
//         // firebase.firestore().collection('users').doc(user.uid).get()
//         // .then( resp => {
//         //     if(resp.data().userRole == "admin"){
//         //         // this.$router.push("/app/admin-home")
//         //         console.log("IS ADMIN")
//         //     }
//         //     console.log(resp.data())
//         // })

//     } else {
//       // No user is signed in.
//     }
//   })


  export default {

    state: {
        user: {}
    },

    getters: {
        user (state) {
            return state.user
        },

        isAuth (state) {
            return state.user
        }
    },

    mutations: {
        SET_USER (state, payload){
            let user = payload
            state.user = user
        },
        RESET_USER (state){
            state.user = null
        }
    },

    actions: {
        async signIn (store, payload){
            let email = payload.email
            let password = payload.password

            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => {
                    store.commit('SET_USER', user)
                })
                .catch(err => {
                    return err
                })
        },
        async signUp (store, payload){
            let email = payload.email
            let password = payload.password

            await firebase.auth().signInWithEmailAndPassword(email, password)
                .then(user => {
                    store.commit('SET_USER', user)
                })
                .catch(err => {
                    return err
                })
        },
        async signOut(store){
            await firebase.auth().signOut()
                .then(() => {
                    store.commit('RESET_USER', {})
                })
        }
    }

}