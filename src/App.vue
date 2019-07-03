<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import AOS from "aos";
import "aos/dist/aos.css"
import firebase, { functions } from 'firebase'

// import firebase from 'firebase/app';
// import 'firebase/auth';
// import 'firebase/database';


export default {
  name: 'App',
  created() {
    AOS.init()
    
    const router = this.$router

    firebase.auth().onAuthStateChanged(function(user) {
      
      
      if (user) {
        // User is signed in.
        console.log(user.email, "is loged in at the moment")
        
          firebase.firestore().collection('users').doc(user.uid).get()
          .then( function(resp) {
            
            if(router.currentRoute.path == '/login' || router.currentRoute.path == '/app/new-admin-user'){

              
              if(resp.data().userRole == "admin"){
                // console.log(this.$rou)
                  // this.$router.push("/app/admin-home")
                console.log("IS ADMIN")
                router.push("/app/admin-home")
                  

                }
              }

            console.log(resp.data())
          })

        } else {
          // No user is signed in.
        }
    })
  },
  methods: {
    test: function(){
      console.log("test funker")
    }
  },
}


</script>

<style>
</style>
