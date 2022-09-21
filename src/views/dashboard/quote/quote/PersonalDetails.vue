<template>
  <validation-observer ref="infoRules" tag="form">
    <b-row>
      <b-col md="12">
        <validation-provider #default="{ errors }" name="product">
          <b-form-group
            label="PUBLIC AND PRODUCTS LIABILITY LIMIT"
            label-for="product"
            :state="errors.length > 0 ? false : null"
          >
            <v-select
              id="product"
              v-model="liablityLimit"
              placeholder="select public and product liblity limit"
              :options="productLimit"
              label="text"
            />
            <b-form-invalid-feedback :state="errors.length > 0 ? false : null">
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
      </b-col>
      <b-col md="12">
        <validation-provider #default="{ errors }" name="product">
          <b-form-group
            label="Manual workers"
            label-for="manualWorkers"
            :state="errors.length > 0 ? false : null"
          >
            <v-select
              id="manualWorkers"
              v-model="liablityLimit"
              placeholder="Choose number of workers"
              :options="productLimit"
              label="text"
            />
            <b-form-invalid-feedback :state="errors.length > 0 ? false : null">
              {{ errors[0] }}
            </b-form-invalid-feedback>
          </b-form-group>
        </validation-provider>
      </b-col>
      <b-col md="12">
        <b-form-group label="TURNOVER (AU $)" label-for="trunOver">
          <validation-provider #default="{ errors }" name="Last Name">
            <b-input-group append="$">
              <b-form-input
                id="trunOver"
                v-model="last_name"
                type="number"
                :state="errors.length > 0 ? false : null"
                placeholder="0"
              />
            </b-input-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>
      <b-col md="12">
        <b-form-group
          label="What percentage of turnover is paid to personnel form labour hire companies?"
          label-for="trunoverPercent"
        >
          <validation-provider #default="{ errors }" name="trunoverPercent">
            <b-input-group append="$">
              <b-form-input
                id="trunoverPercent"
                v-model="last_name"
                type="number"
                :state="errors.length > 0 ? false : null"
                placeholder="0"
              />
            </b-input-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>
      <b-col md="12">
        <b-form-group
          label="What percentage of turnover is paid to bona fide subcontractors?"
          label-for="trunoverPaid"
        >
          <validation-provider #default="{ errors }" name="trunoverPaid">
            <b-input-group append="$">
              <b-form-input
                id="trunoverPaid"
                v-model="last_name"
                type="number"
                :state="errors.length > 0 ? false : null"
                placeholder="0"
              />
            </b-input-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>
      <b-col
        md="12"
        class="
          form__title
          text-center
          py-1
          my-2
          bg-light
          d-flex
          align-items-center
          justify-content-center
        "
      >
        <h6 class="mb-0">
          Please Provide A Percentage Breakdown Of The Type Of Work Performed
          (Must Totao 100%)
        </h6>
      </b-col>
      <b-col md="6">
        <b-form-group label="Residential / Domastic" label-for="residental">
          <validation-provider #default="{ errors }" name="residental">
            <b-input-group append="%">
              <b-form-input
                id="residental"
                type="number"
                placeholder="0"
                :state="errors.length > 0 ? false : null"
              />
            </b-input-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Commecrial" label-for="first-name">
          <validation-provider #default="{ errors }" name="First Name">
            <b-input-group append="%">
              <b-form-input
                id="firs"
                type="number"
                placeholder="0"
                :state="errors.length > 0 ? false : null"
              />
            </b-input-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Industrial / Manufacture" label-for="first-name">
          <validation-provider #default="{ errors }" name="First Name">
            <b-input-group append="%">
              <b-form-input
                id="first"
                type="number"
                placeholder="0"
                :state="errors.length > 0 ? false : null"
              />
            </b-input-group>
            <small class="text-danger">{{ errors[0] }}</small>
          </validation-provider>
        </b-form-group>
      </b-col>
    </b-row>
  </validation-observer>
</template>

<script>
import {
  BRow,
  BCol,
  BInputGroup,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
} from "bootstrap-vue";
import vSelect from "vue-select";
import { ValidationProvider, ValidationObserver } from "vee-validate";

export default {
  name: "PersonalDetails",
  components: {
    BRow,
    BCol,
    BInputGroup,
    BFormGroup,
    BFormInput,
    vSelect,
    ValidationProvider,
    ValidationObserver,
    BFormInvalidFeedback,
  },
  data() {
    return {
    };
  },
};
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

