<template>
  <validation-observer ref="infoRules" tag="form">
    <b-row>
      <b-col md="6">
        <b-form-group label="Professional Indemnity Limit" label-for="v-2">
          <v-select
            id="v-2"
            placeholder="Please choose ...."
            :options="['Please choose ...', 'Clerical', 'Manual Worker']"
            label="text"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Number Of Proprietors / Principals Giving Advice"
          label-for="v-3"
        >
          <v-select
            id="v-3"
            placeholder="Please Choose Number..."
            :options="[
              'Please Choose Number...',
              '14 Consecutive days',
              '21 Consecutive days',
              '28 Consecutive days',
            ]"
            label="text"
          />
        </b-form-group>
      </b-col>
      <b-col md="12">
        <b-form-group
          label="Is A Separate Fee Charged For Advice?"
          label-for="v-4"
        >
          <b-form-checkbox> Yes </b-form-checkbox>
          <b-form-checkbox class="mt-1"> No </b-form-checkbox>
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Tools Of Trades - Maximum Sum Insured"
          label-for="v-5"
        >
          <v-select
            id="v-5"
            placeholder="Please choose .."
            :options="[
              'Please choose ..',
              '24 hours a day/ 365 days a year',
              'working hours only, excluding commuting',
              'working hours only, including direct travel to and from work',
            ]"
            label="text"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Legals & Tax Audit" label-for="v-6">
          <v-select
            id="v-6"
            placeholder="Please choose .."
            :options="lumpsum"
            label="text"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group label="Statutory Liability Limt" label-for="v-7">
          <v-select
            id="v-7"
            :options="weekly"
            placeholder="Please choose .."
            label="text"
          />
        </b-form-group>
      </b-col>
    </b-row>
  </validation-observer>
</template>

<script>
import vSelect from "vue-select";
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormDatepicker,
  BFormCheckbox,
} from "bootstrap-vue";
import ToastificationContent from "@core/components/toastification/ToastificationContent.vue";

export default {
  name: "AdditionalOptiona",
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormDatepicker,
    BFormCheckbox,
    vSelect,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
  },
  //   data() {
  //     return {
  //       value: "",
  //     }
  //   },
};
</script>
