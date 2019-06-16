<template>
    <q-page>
        <Leaderboard />
        <SalesPanel />
    </q-page>
</template>

<script>
import Leaderboard from '../components/Product/Leaderboard'
import SalesPanel from '../components/Product/SalesPanel'

    export default {
        name:"Product",
        components: {
            Leaderboard,
            SalesPanel
        }
    }
</script>

<style lang="stylus" scoped>

.q-page
  margin-bottom 600vh

</style>