<template>
  <section id="dashboard-quote">
    <b-row class="match-height">
      <b-col
        xl="12"
      >
        <h1 class="text-center">Trade Plus Indication Quote</h1>
        <p class="text-center ml-4 mr-4">Indication quotes are non-binding and subject to agreement by Insure Fest Solutions. We reserve the right to decline risks or modify premiums, conditions, endorsements and exclusions before accepting cover.</p>
      </b-col>
      <form-wizard-horizontal />
      <!-- <b-col
        xl="4"
        md="6"
      >
        <ecommerce-medal :data="data.congratulations" />
      </b-col>
      <b-col
        xl="8"
        md="6"
      >
        <ecommerce-statistics :data="data.statisticsItems" />
      </b-col> -->
    </b-row>
  </section>
</template>

<script>
import { BRow, BCol } from 'bootstrap-vue'

import FormWizardHorizontal from './FormWizardHorizontal.vue'
// import { getUserData } from '@/auth/utils'
// import EcommerceMedal from '../ecommerce/EcommerceMedal.vue'
// import EcommerceStatistics from '../ecommerce/EcommerceStatistics.vue'

export default {
  components: {
    BRow,
    BCol,

    // EcommerceMedal,
    // EcommerceStatistics,
    FormWizardHorizontal,
  },
  data() {
    return {
      data: {},
    }
  },
  created() {
    // data
    // this.$http.get('/ecommerce/data')
    //   .then(response => {
    //     this.data = response.data
    //     const userData = getUserData()
    //     this.data.congratulations.name = userData.fullName.split(' ')[0] || userData.username
    //   })
  },
}
</script>

<style lang="scss">
  @import '@core/scss/vue/libs/vue-wizard.scss';
  @import '@core/scss/vue/libs/vue-select.scss';
</style>
