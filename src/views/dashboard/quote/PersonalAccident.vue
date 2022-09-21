<template>
  <validation-observer
    ref="infoRules"
    tag="form"
  >
    <b-row
      v-for="(addr, index) in addrList"
      :key="index"
      class="d-flex mt-1"
      md="12"
    >
      <b-col md="6">
        <b-form-group
          label="Name of Director / Partner / Proprietor"
          label-for="broker"
        >
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-input
              id="broker"
              v-model="brooker"
              placeholder="Enter the name"
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
          label="DATE OF BIRTH"
          label-for="v-useme"
        >
          <b-form-datepicker
            id="example-datepicker"
            v-model="value"
            class="mb-2"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="GENDER"
          label-for="v-1"
        >
          <v-select
            id="v-1"
            placeholder="Please choose ...."
            :options="['Please choose ...', 'Male', 'Female']"
            label="text"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="Manual Worked"
          label-for="v-2"
        >
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
          label="WAITING PERIOD"
          label-for="v-3"
        >
          <v-select
            id="v-3"
            placeholder="7 Consecutive days"
            :options="[
              '7 Consecutive days',
              '14 Consecutive days',
              '21 Consecutive days',
              '28 Consecutive days',
            ]"
            label="text"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="BENEFIT PERIOD"
          label-for="v-4"
        >
          <v-select
            id="v-4"
            placeholder="26 weeks"
            :options="['26 weeks', '52 weeks', '104 weeks', '156 weeks']"
            label="text"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="SCOPE OF COVER"
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
        <b-form-group
          label="LUMP SUM (CAPITAL BENEFIT)"
          label-for="v-6"
        >
          <v-select
            id="v-6"
            placeholder="Please choose .."
            :options="lumpsum"
            label="text"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="WEEKLY BENEFIT"
          label-for="v-7"
        >
          <v-select
            id="v-7"
            :options="weekly"
            placeholder="Please choose .."
            label="text"
          />
        </b-form-group>
      </b-col>
      <b-col md="6">
        <b-form-group
          label="WEEKLY COVER:"
          label-for="v-8"
        >
          <v-select
            id="v-8"
            placeholder="Please choose .."
            :options="[
              'Please choose ..',
              'Accident Only',
              'Accident and Sickness',
            ]"
            label="text"
          />
        </b-form-group>
      </b-col>
      <b-col class="mt-2">
        <b-button
          v-ripple.400="'rgba(113, 102, 240, 0.15)'"
          variant="outline-secondary"
          @click="onAddAddress"
        >
          <feather-icon
            icon="PlusIcon"
            class="mr-50"
          />
          <span class="align-middle">Add Another Address</span>
        </b-button>
      </b-col>
      <b-input-group-append v-if="addrList.length > 1">
        <b-button
          variant="outline-danger"
          @click="onAddressRemove(index)"
        >
          Remove
        </b-button>
      </b-input-group-append>
    </b-row>
  </validation-observer>
</template>

<script>
import vSelect from 'vue-select'
import {
  BRow,
  BCol,
  BFormGroup,
  BFormInput,
  BFormDatepicker,
  BButton,
} from 'bootstrap-vue'
import ToastificationContent from '@core/components/toastification/ToastificationContent.vue'

export default {
  name: 'PersonalAccident',
  components: {
    BRow,
    BCol,
    BFormGroup,
    BFormInput,
    BFormDatepicker,
    vSelect,
    BButton,
    // eslint-disable-next-line vue/no-unused-components
    ToastificationContent,
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
