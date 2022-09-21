<template>
  <validation-observer
    ref="infoRules"
    tag="form"
  >
    <b-row class="d-flex align-items-center">
      <b-col md="6">
        <b-form-group
          label="Insured’s First Name"
          label-for="insured-first-name"
        >
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-input
              id="insured-first-name"
              v-model="brooker"
              placeholder=""
              @input="onSearchBrooker"
            />
            <b-spinner
              v-if="bLoading"
              label="Spinning"
              style="position: absolute; margin-right: 0.5rem"
            />
          </div>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Insured’s Last Name"
          label-for="insured-last-name"
        >
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-input
              id="insured-last-name"
              v-model="brooker"
              placeholder=""
              @input="onSearchBrooker"
            />
            <b-spinner
              v-if="bLoading"
              label="Spinning"
              style="position: absolute; margin-right: 0.5rem"
            />
          </div>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Insured’s Email Address"
          label-for="insured-email"
        >
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-input
              id="insured-email"
              v-model="brooker"
              placeholder=""
              @input="onSearchBrooker"
            />
            <b-spinner
              v-if="bLoading"
              label="Spinning"
              style="position: absolute; margin-right: 0.5rem"
            />
          </div>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Insured’s Phone Number"
          label-for="insured-phone"
        >
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-input
              id="insured-phone"
              v-model="brooker"
              placeholder=""
              @input="onSearchBrooker"
            />
            <b-spinner
              v-if="bLoading"
              label="Spinning"
              style="position: absolute; margin-right: 0.5rem"
            />
          </div>
        </b-form-group>
      </b-col>
    </b-row>
  </validation-observer>
</template>

<script>
import {
  BRow,
  BCol,

  BFormGroup,
  BFormInput,

} from 'bootstrap-vue'
import {  ValidationObserver } from 'vee-validate'

export default {
  name: 'InsuredInformation',
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    ValidationObserver,
  },
  data() {
    return {
      addrList: [{ street: '', sub: '', loading: false }],
      addressList: { 0: [] },
    }
  },
  methods: {
    onAddressSelected(index, desc) {
      this.addrList[index].street = desc
      this.addressList[index] = []
      this.showQueensOption = true
    },
    onAddAddress() {
      if (this.addrList.length < 4) {
        this.addrList.push({ street: '', sub: '', loading: false })
        this.addressList[this.addrList.length - 1] = []
      }
    },
    onAddressRemove(index) {
      this.addrList.splice(index, 1)
    },
  },
}
</script>

<style scoped>
.form__title {
  background-color: linear-gradient(118deg,
      #324ca2,
      rgba(50, 76, 162, 0.7)) !important;
}
</style>
