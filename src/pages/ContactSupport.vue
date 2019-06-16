<template>
    <q-page>
        <div class="container">
            <div id="link-target-recognition" style="position:relative; top: -150px"></div>
            <div class="content-container">
                <div class="content-container__center">

                        <div class="contact__container">
                            <h1 class="contact__header">Ta kontakt</h1>
                            <p class="contact__paragraph">
                                Vi vil gjerne ha dine spørsmål. Still spørsmålet ditt under, så skal vi svare på det iløpet av en arbeidsdag. 
                            </p>
                        </div>
                        
                        <div class="support__container">
                            <img class="support__graphic-icon" src="~assets/contact-support/support-icon.svg" alt="">
                            <h3 class="support__header">Få support</h3>
                            <p class="support__paragraph">
                                Gjelder din hendvendelse support, skal vi sørge for at vi setter deg i kontakt med en av våre spesialister.
                            </p>
                        </div>

                        <div class="checkbutton__container">
                            <label class="checkbutton__label" for="">
                                Er meldingen angånde support?
                                <q-toggle
                                    v-model="isSupportMsg"
                                    color="red"
                                />
                            </label>
                        </div>
                        
                        <form 
                            class="form__container" 
                            action="" 
                            method="submit"
                            @submit="snedMsg"
                        >
                            <q-input
                                class="form__name"
                                dark
                                outlined 
                                v-model="name" 
                                filled 
                                type="text" 
                                hint="Skriv in navnet *" 
                            />
                            <q-input
                                class="form__email"
                                dark
                                outlined 
                                v-model="email" 
                                filled 
                                type="email" 
                                hint="Skriv in email *" 
                            />
                            <q-input
                                class="form__phone"
                                dark
                                outlined 
                                v-model="phoneNr" 
                                filled 
                                type="tel" 
                                hint="Skriv telefon numberet du ønskes å nå på" 
                            />
                            <q-input
                                class="form__msg"
                                dark
                                v-model="msg"
                                filled
                                type="textarea"
                                hint="Skriv melding *" 
                            />

                            <BaseButton
                                class="form__send-button"
                                color="#8F2D27"
                                bgColor="#fff"
                                hoverColor="#FF948D"
                                lipColor="#8F2D27"
                                text="Send"
                            />
                        </form>
                    
                    <img class="decoration-blocks" src="~assets/contact-support/block-decorations.svg" alt="">
                    <h2 class="postscript-text">
                        * personinformasjon brukes ikke utover kontakt angående korrespondanse eller betjening
                    </h2>
                        
                </div>

            </div>
        </div>


        <Footer />
    </q-page>
</template>

<script>
import Footer from "../components/Footer"
import BaseButton from "../components/BaseButton"

export default {
    name: "ContactSupport",
    components: {
        
        BaseButton,
        Footer,
    },
    data() {
        return {
            isSupportMsg: false,
            email: "",
            name: "",
            phoneNr: "",
            msg: "",
        }
    },
    methods: {
        snedMsg: function(e) {
            e.preventDefault()
            console.log("msg sendt")
        }
    },
}
</script>

<style lang="stylus" scoped>


.content-container
  min-height 1200px
  background: linear-gradient(180deg, #8F2D27 63.45%, #B63830 100%)
  padding-bottom 200px

  &__center
    margin 0 auto
    max-width $big-desktop-width
    display grid
    color: #FFFFFF;

.contact
    
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

.support
    
    &__container
        justify-self center
        display grid

    &__graphic-icon
        color red
        justify-self center
        margin-top 50px
    
    &__header
        font-family: Open Sans;
        font-weight: normal;
        font-size: 23px;
        line-height: 167.69%;
        text-align: center;
        letter-spacing: 0.055em;

    &__paragraph
        font-family: Open Sans;
        font-weight: normal;
        font-size: 17px;
        line-height: 167.69%;
        text-align: center;
        letter-spacing: 0.055em;

        max-width 612px

.checkbutton
    
    &__container
        justify-self center
        margin-top 100px

    &__label
        font-family: Open Sans;
        font-weight: bold;
        font-size: 15.313px;
        line-height: 167.69%;
        text-align: center;
        letter-spacing: 0.055em;

.form
    
    &__container
        justify-self center
        margin-top 40px
        display grid
        grid-gap 30px

    .q-input
        margin-bottom 20px
    
    &__email
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