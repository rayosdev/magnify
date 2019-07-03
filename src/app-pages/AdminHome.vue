<template>
        <q-page class="main-container">
            
        <div class="projects__container">

            <h4 class="projects__header">Prosjkter</h4>
            <q-input
                class="projects__seach"
                light
                outlined 
                v-model="userFilterText"
                @input="filterUser" 
                filled 
                type="text" 
                hint="Søk etter bruker" 
            />
            <q-list dense bordered padding class="rounded-borders">
                <q-item 
                    clickable v-ripple
                    v-for="(t, index) in test" :key="index"
                >
                    <q-item-section>
                        {{t}}
                    </q-item-section>
                </q-item>

            </q-list>
        </div>
        
        <div class="users__container">

            <h4 class="users__header">brukere</h4>
            <q-input
                class="user__seach"
                light
                outlined 
                v-model="userFilterText"
                @input="filterUser" 
                filled 
                type="text" 
                hint="Søk etter bruker" 
            />
            <q-list dense bordered padding class="rounded-borders">
                <q-item 
                    clickable v-ripple
                    v-for="(t, index) in test" :key="index"
                >
                    <q-item-section>
                        {{t}}
                    </q-item-section>
                </q-item>

            </q-list>
        </div>

    </q-page>
</template>

<script>

import firebase from 'firebase'

    export default {
        data() {
            return {
                test: ["bob","david","daniel"],
                userFilterText:""  
            }
        },
        computed: {
          getUsers: () => {
              
          }  
        },
        created() {
            this.getUsers
        },
        methods: {
            filterUser: () => {

            } 
        },
    }
</script>

<style lang="stylus" scoped>

.main-container
    display grid

.projects
    &__container
        max-width 1000px
        min-width 600px
        margin 2em
        padding 1em
        background #ddd

        grid-row 1/2
        grid-column 1/3
        justify-self center
    
    &__header
        margin 10px
        font-size 1.5em
.users
    &__container
        max-width 300px
        margin 2em
        padding 1em
        background #ddd
    
    &__header
        margin 10px
        font-size 1.5em

</style>