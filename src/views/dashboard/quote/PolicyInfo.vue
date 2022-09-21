<template>
  <validation-observer
    ref="infoRules"
    tag="form"
  >
    <b-row class="d-flex align-items-center">
      <b-col md="6">
        <b-form-group
          label="Policy Inception Date"
          label-for="insured-first-name"
        >
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-datepicker
              id="example-datepicker"
              v-model="value"
              class="mb-2"
            />
          </div>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Policy Expiry Date"
          label-for="insured-first-name"
        >
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-datepicker
              id="example-datepicker"
              v-model="value"
              class="mb-2"
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
  BFormDatepicker,
} from 'bootstrap-vue'

import { ValidationObserver } from 'vee-validate'

export default {
  name: 'PolicyInformation',
  components: {
    BRow,
    BCol,
    BFormGroup,
    ValidationObserver,
    BFormDatepicker,
  },
}
</script>
