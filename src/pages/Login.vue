<template>
    <q-page>
        <div class="container">
            <div id="link-target-recognition" style="position:relative; top: -150px"></div>
            <div class="content-container">

                <div class="content-container__center">

                        <div class="login-info__container">
                            <h1 class="login-info__header">LOGG iN</h1>
                            <p class="login-info__paragraph">
                                Denne tjenesten er tilgjengelig for MAGNIFY sine kunder  
                            </p>
                        </div>
                        
                        <form 
                            class="login__container" 
                            action="" 
                            method="submit"
                            @submit.prevent="executeLogin"
                            @reset="onReset"
                        >
                            <q-input
                                class="login__username"
                                dark
                                outlined 
                                v-model="email" 
                                filled 
                                type="text" 
                                hint="Skriv in navn *" 
                            />

                            <q-input
                                class="login__name"
                                dark
                                outlined 
                                v-model="password" 
                                filled 
                                type="password" 
                                hint="Skriv in passord *" 
                            />
                            
                            

                            <BaseButton
                                class="login__send-button"
                                color="#8F2D27"
                                bgColor="#fff"
                                hoverColor="#FF948D"
                                lipColor="#8F2D27"
                                text="Login"
                                type="submit"
                            />
                        </form>
                    
                    <img class="decoration-blocks" src="~assets/contact-support/block-decorations.svg" alt="">
                    
                        
                </div>

            </div>
        </div>
        
        <Footer />
    </q-page>
</template>

<script>
import Footer from "../components/Footer"
import BaseButton from "../components/BaseButton"

// import store from "../store"
import firebase from 'firebase'
import { mapGetters } from 'vuex'
import { setTimeout } from 'timers';


export default {
    name: "Login",
    components: {
        
        BaseButton,
        Footer,
    },
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        executeLogin(e) {
            // console.log(this.$store.getters['firebase'])
            this.$q.loading.show()
            this.loginAttempt()
            // this.$store.
            
        },
        loginAttempt: function(e) {
            // e.preventDefault()
            
            // __ Error checks

            if(this.email == "" || this.newPassword =="" || this.retypedPassword == "" || this.accessCode == ""){
                this.$q.notify({
                    color: 'red-4',
                    textColor: 'black',
                    icon: 'warning',
                    message: "Fyll ut alle feltene",
                    position: 'right',
                    timeout: 8000
                })
                return
            }
            if(this.accessCode != this.acceptedAccessCode){
                this.$q.notify({
                    color: 'red-4',
                    textColor: 'black',
                    icon: 'warning',
                    message: "Adgangs koden er ikke korrekt, kontakt support om problemet vedvarer",
                    position: 'bottom-right',
                    timeout: 8000
                })
                return
            }



            // console.log("sign in attempt")
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then( user =>{
                
                this.email = ""
                this.password = ""
                
                console.log("user on signin: ", user)

                firebase.firestore().collection('users').doc(user.uid).get()
                .then( function(resp) {
                    
                    if(resp.data().userRole == "admin"){
                        // console.log(this.$rou)
                        // this.$router.push("/app/admin-home")
                        console.log("IS ADMIN")
                        
                        router.push("/app/admin-home")
                    }

                })
            })
            .catch( err =>{
                
                if(err.message.includes('CollectionReference')){return}

                this.$q.notify({
                    color: 'red-4',
                    textColor: 'black',
                    icon: 'warning',
                    message: err.message,
                    position: 'right',
                    timeout: 8000
                })
            })
        },
        onReset(){
            this.email = ""
            this.password = ""
        }
    },
    computed: {
        ...mapGetters('firebase', ['user']),
    },
    created() {

        // console.log("user",firebase.auth().currentUser.email)
        firebase.auth().signOut()

    },
    beforeDestroy(){
        this.$q.loading.hide()
    }
}
</script>

<style lang="stylus" scoped>


.content-container
  min-height 1200px
  background: linear-gradient(180deg, #8F2D27 63.45%, #B63830 100%)
  background #333333
  padding-bottom 100px
  padding-top 150px

  &__center
    margin 0 auto
    max-width $big-desktop-width
    display grid
    margin-top -100px
    color: #FFFFFF;

.login-info
    
    &__container
        justify-self center
        display grid

    &__header
        font-family: Montserrat;
        font-weight: bold;
        font-size: 35.1808px;
        line-height: 146.91%;text-align: center;
        letter-spacing: 0.14em;
        text-transform: uppercase;


        justify-self center
        margin-top 120px

    &__paragraph
        font-family: Open Sans;
        font-weight: normal;
        font-size: 17px;
        line-height: 167.69%; 
        text-align: center;
        letter-spacing: 0.055em;

        max-width 612px
        margin-top 30px

.login
    
    &__container
        justify-self center
        margin-top 40px
        display grid
        grid-gap 30px

    .q-input
        margin-bottom 20px
    
    &__username
        min-width 350px

    &__send-button
        // border solid #00f 4px
        width 150px
        justify-self center
        margin-top 2s0px

.postscript-text
    justify-self center
    margin-top 0px
    max-width 525px
    text-align center

    font-family: Open Sans;
    font-style: italic;
    font-weight: normal;
    font-size: 15.905px;
    line-height: 229.69%;
    letter-spacing: 0.11em;

    color: #FFFFFF;

.decoration-blocks
    margin-left 80px

</style>