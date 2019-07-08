<template>
    <q-page>
        <div class="container">
            <div id="link-target-recognition" style="position:relative; top: -150px"></div>
            <div class="content-container">
                <div class="content-container__center">

                        <div class="login-info__container">
                            <h1 class="login-info__header">Etabler bruker</h1>
                            <p class="login-info__paragraph">
                                Det er her du etablerer brukernavn og passord
                            </p>
                        </div>
                        
                        <form 
                            class="login__container" 
                            action="" 
                            method="submit"
                            @submit="trySignup"
                        >
                            <q-input
                                class="login__username"
                                light
                                outlined 
                                v-model="email" 
                                filled 
                                type="email" 
                                hint="Skriv in epost *" 
                            />

                            <q-input
                                class="login__one-time-code"
                                light
                                outlined 
                                v-model="accessCode" 
                                filled 
                                type="text" 
                                hint="Skriv in adgangs code *" 
                            />

                            <q-input
                                class="login__new-pwd"
                                light
                                outlined 
                                v-model="newPassword" 
                                @change="checkPassword()" 
                                filled 
                                type="password" 
                                hint="Skriv in passord *" 
                            />
                            <q-input
                                class="login__new-pwd"
                                light
                                outlined 
                                v-model="retypedPassword"
                                @change="checkPassword()" 
                                filled 
                                type="password" 
                                hint="Skriv in passord igjen *" 
                            />
                            

                            <BaseButton
                                class="login__send-button"
                                color="#fff"
                                bgColor="#333"
                                hoverColor="#FF948D"
                                lipColor="#8F2D27"
                                text="Login"
                            />
                            
                        </form>
                    
                    <img class="decoration-blocks" src="~assets/contact-support/block-decorations.svg" alt="">
                    
                        
                </div>

            </div>
        </div>

    </q-page>
</template>

<script>
import BaseButton from "../components/BaseButton"
import firebase from 'firebase'

export default {
    components:{
        BaseButton
    },
    data() {
        return {
            email: "",
            accessCode:"",
            newPassword: "",
            retypedPassword:"",

            acceptedAccessCode:"AD123"
        }
    },
    methods: {
        trySignup: function(e) {
            e.preventDefault()
            
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
                    position: 'right',
                    timeout: 8000
                })
                return
            }

            console.log("signup attempt Que2")
            firebase.auth().createUserWithEmailAndPassword(this.email, this.newPassword)
            .then( cred =>{
                firebase.firestore().collection('users').doc(cred.user.uid).set({
                    username:this.email,
                    userRole:"admin"
                })
                
                this.email = ""
                this.accessCode = ""
                this.newPassword = ""
                this.retypedPassword = ""

            })
            .catch( err =>{

                this.$q.notify({
                    color: 'red-4',
                    textColor: 'black',
                    icon: 'warning',
                    message: err.message,
                    position: 'bottom-right',
                    timeout: 8000
                })
            })
        },
        checkPassword: function(e) {
            if(this.retypedPassword == ""){
                return
            }
            if(this.retypedPassword !== this.newPassword){
                this.$q.notify({
                    color: 'red-3',
                    textColor: 'black',
                    icon: 'warning',
                    message: 'Obs, pass på at begge passord feltene er like',
                    position: 'bottom-right',
                    timeout: 8000
                })
            }
        }
    }
}
</script>

<style lang="stylus" scoped>

.content-container
  min-height 1200px
  background #fff
  padding-bottom 100px
  padding-top 150px

  &__center
    margin 0 auto
    max-width $big-desktop-width
    display grid
    margin-top -100px
    color: #333;

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

    color: #333;

.decoration-blocks
    margin-left 80px


</style>