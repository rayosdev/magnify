<template>
    <q-page>
        <Leaderboard />
    </q-page>
</template>

<script>
import Leaderboard from '../components/Product/Leaderboard'

    export default {
        name:"Product",
        components: {
            Leaderboard
        }
    }
</script>

<style lang="stylus" scoped>

.q-page
  margin-bottom 600vh

</style>