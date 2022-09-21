<template>
  <validation-observer
    ref="infoRules"
    tag="form"
  >
    <b-row class="d-flex align-items-center">
      <b-col md="12">
        <b-form-group
          label="Do The Occupation(S) And Business Description Accurately DescribEe All Aspects Of The Risk?"
          label-for="v-4"
        >
          <b-form-checkbox> Yes </b-form-checkbox>
          <b-form-checkbox class="mt-1">
            No
          </b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col md="12">
        <b-form-group
          label="Do The Occupation(S) And Business Description Accurately DescribEe All Aspects Of The Risk?
"
          label-for="v-4"
        >
          <b-form-checkbox> Yes </b-form-checkbox>
          <b-form-checkbox class="mt-1">
            No
          </b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col md="12">
        <b-form-group
          label="Do The Occupation(S) And Business Description Accurately DescribEe All Aspects Of The Risk?
"
          label-for="v-4"
        >
          <b-form-checkbox> Yes </b-form-checkbox>
          <b-form-checkbox class="mt-1">
            No
          </b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col md="12">
        <validation-provider
          #default="{ errors }"
          name="product"
        >
          <b-form-group
            label="How Much Idustry Experince Does The Insured Have?"
            label-for="manualWorkers"
            :state="errors.length > 0 ? false : null"
          >
            <v-select
              id="manualWorkers"
              placeholder="Choose number of workers"
              label="text"
            />
            <b-form-invalid-feedback :state="errors.length > 0 ? false : null">
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
      </b-col>
    </b-row>
  </validation-observer>
</template>

<script>
import {
  BRow,
  BCol,
  BFormGroup,
  BFormCheckbox,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'Underwriting',
  components: {
    BRow,
    BCol,
    BFormGroup,
    ValidationProvider,
    ValidationObserver,
    BFormCheckbox,
    vSelect,
  },
}
</script>

<style scoped>
.form__title {
  background-color: linear-gradient(
    118deg,
    #324ca2,
    rgba(50, 76, 162, 0.7)
  ) !important;
}
</style>
