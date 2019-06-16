<template>
    <q-page>
        <Leaderboard />
        <SalesPanel />
        <Simple />
        
        <Footer />
    </q-page>
</template>

<script>
import Leaderboard from '../components/Product/Leaderboard'
import SalesPanel from '../components/Product/SalesPanel'
import Simple from '../components/Product/Simple'

import Footer from '../components/Footer'

    export default {
        name:"Product",
        components: {
            Leaderboard,
            SalesPanel,
            Simple,

            Footer
        }
    }
</script>

<style lang="stylus" scoped>

// .q-page
//   margin-bottom 600vh

</style>