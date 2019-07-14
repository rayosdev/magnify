<template>
        <q-page class="main-container">
            
        <div class="hader__container">
            <h3 class="header__text">Site Admin</h3>
        </div>

        <div class="projects__container">

            <h4 class="projects__header">Prosjkter</h4>
            <q-input
                class="projects__seach"
                light
                outlined 
                v-model="projectFilterText"
                @input="filterUser" 
                filled 
                type="text" 
                hint="Søk etter projecter" 
            />
            <q-list dense bordered padding class="rounded-borders">
                <q-item 
                    clickable v-ripple
                    v-for="(p, index) in testProjects" :key="index"
                >
                    <q-item-section>
                        {{p}}
                    </q-item-section>
                </q-item>

            </q-list>
            <q-btn
            class="porject__addbtn"
            round
            color="secondary"
            icon="add"
            />
        </div>
        
        <div class="users__container">

            <h4 class="users__header">Brukere</h4>
            <div class="row justify-center q-gutter-sm">
                <q-input
                    class="user__seach q-mb-md col"
                    light
                    outlined 
                    v-model="firstNameInput"
                    @input="filterUser" 
                    filled 
                    type="text" 
                    hint="Fornavn" 
                />
                <q-input
                    class="user__seach q-mb-md col"
                    light
                    outlined 
                    v-model="lastNameInput"
                    @input="filterUser" 
                    filled 
                    type="text" 
                    hint="Etternavn" 
                />
            </div>
            <q-list  style="max-height:150px;" dense bordered padding class="rounded-borders list scroll">
                <q-item 
                    clickable v-ripple
                    v-for="(user, index) in userList" :key="index"
                >
                    <q-item-section>
                        {{user.firstName}},
                        {{user.lastName}}
                    </q-item-section>
                </q-item>

            </q-list>
            <div class="row justify-end q-pr-sm q-pt-sm">
                <q-btn
                class="[ porject__addbtn ]"
                round
                color="secondary"
                icon="add"
                />
            </div>
        </div>

    </q-page>
</template>

<script>

import firebase from 'firebase'

    export default {
        data() {
            return {
                users: [
                    {firstName: 'bob', lastName: 'bobson'},
                    {firstName: 'david', lastName: 'gjertsen'},
                    {firstName: 'lisa', lastName: 'larsen'},
                    {firstName: 'eda', lastName: 'barack'},
                    {firstName: 'senja', lastName: 'slovick'},
                    {firstName: 'bodil', lastName: 'larsen'},
                ],
                userList:[],

                test: ["bob","david","daniel","test","test2"],
                userFilterText:"",  
                testProjects: ["telenord","kanaldigital","freshfitnes"],
                projectFilterText:"",
                
                firstNameInput: "",
                lastNameInput: ""
            }
        },
        computed: {
          getUsers: () => {
              
          }  
        },
        created() {
            this.getUsers

            this.filterUser()
        },
        methods: {
            filterUser: function(){
                if(this.firstNameInput == "" && this.lastNameInput == ""){
                    this.userList = this.users   
                }
                else{

                    this.userList = []
                    this.users.forEach(user => {
                        if(
                            this.firstNameInput != "" &&
                            user.firstName.startsWith(this.firstNameInput)
                        ){
                            this.userList.push(user)
                        }
                        else if(
                            this.lastNameInput != "" &&
                            user.lastName.startsWith(this.lastNameInput)
                        ){
                            this.userList.push(user)
                        }
                    });
                }
            } 
        },
    }
</script>

<style lang="stylus" scoped>

.main-container
    display grid
    max-width 1040px
    margin 0 auto

.header
    
    &__container
        grid-row 1/2
        grid-column 1/3
        justify-self center

    &__text
        text-align center
        width 100%

.projects
    &__container
        max-width 1000px
        min-width 600px
        margin 2em
        padding 1em
        background #ddd

        grid-row 2/3
        grid-column 1/3
        justify-self center
        display grid
    
    &__header
        margin 10px
        font-size 1.5em
        grid-row 1/2
        grid-column 1/3
    
    &porject__addbtn
        grid-row 1/2
        grid-column 1/3
        justify-self center




.users
    &__container
        grid-row 3/4
        grid-column 1/3
        max-width 500px
        min-height 500px
        margin 2em
        padding 1em
        background #ddd
    
    &__header
        margin 10px
        font-size 1.5em

</style>