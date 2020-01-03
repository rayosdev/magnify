<template>
    <q-page class="main-container">
     <q-drawer
        side="left"
        v-model="drawerLeft"
        bordered
        :width="200"
        :breakpoint="500"
        content-class="bg-grey-3"
      >
        <!-- <q-scroll-area class="fit">
          <div class="q-pa-sm">
            <div v-for="n in 50" :key="n">Drawer {{ n }} / 50</div>
          </div>
        </q-scroll-area> -->
      </q-drawer>

            
        <div class="hader__container">
            <h3 class="header__text">Site Admin</h3>
            <q-btn flat @click="drawerLeft = !drawerLeft" round dense icon="menu" />
        </div>

        <div class="projects__container">

            <h4 class="projects__header">Prosjkter</h4>
            <q-input
                class="projects__search"
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
            <q-list  style="" dense bordered padding class="rounded-borders list scroll">
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
                @click="fixed = true"
                />
            </div>
        </div>

        <q-dialog v-model="fixed">
            <q-card>
                <q-card-section>
                    <div class="text-h6">Lag bruker</div>
                </q-card-section>

                <q-separator />

                <q-card-section style="max-height: 50vh" class="scroll">
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
                </q-card-section>

                <q-separator />

                <q-card-actions align="right">
                    <q-btn flat label="Avbryt" color="primary" v-close-popup />
                    <q-btn flat label="Legg til Bruker" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script>

import firebase from 'firebase'

    export default {
        data() {
            return {
                drawerLeft: false,
                fixed: false,
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
                lastNameInput: "",

                dialogHeader: "Lag ny bruker",

            }
        },
        computed: {
          
        },
        created() {
            // console.log(firebase.firestore())
            // this.db = firebase.firestore()

            this.getUsers()

            this.filterUser()
        },
        methods: {
            getUsers: () => {
              var docRef = firebase.firestore().collection("users")
              docRef.get()
              .then(ref => {
                  console.log("test", ref.data)
                  
              })
            },  
            filterProjects: function () {
              alert("test")  
            },
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