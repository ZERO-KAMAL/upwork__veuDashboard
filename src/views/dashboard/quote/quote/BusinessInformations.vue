<template>
  <validation-observer
    ref="infoRules"
    tag="form"
  >
    <b-row class="d-flex align-items-center">
      <b-col md="6">
        <b-form-group
          label="ABN"
          label-for="ABN"
        >
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-input
              id="ABN"
              v-model="brooker"
              placeholder="Enter an ABN or leave blanck"
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
        <b-form-group>
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-checkbox
              id="checkbox-1"
              v-model="status"
              name="checkbox-1"
              value="accepted"
              unchecked-value="not_accepted"
            >
              Insured Is Not Registered For An ABN
            </b-form-checkbox>

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
          label="Entity Name"
          label-for="entity-name"
        >
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-input
              id="entity-name"
              v-model="brooker"
              placeholder="Pleace enter entity name"
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
          label="Trustee"
          label-for="trustee"
        >
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-input
              id="trustee"
              v-model="brooker"
              placeholder="If entity is trust, enter the trustee"
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
      <b-col
        v-for="(addr, index) in addrList"
        :key="index"
        class="d-flex mt-1"
        md="12"
      >
        <div class="w-50 pr-2">
          <p>
            Business Name
            {{ addrList.length > 1 ? index + 1 : "" }}
          </p>
          <div
            class="d-flex"
            style="justify-content: end; align-items: center"
          >
            <b-form-input
              id="address"
              v-model="addr.street"
              type="text"
              placeholder="Enter business name"
              name="address"
              @input="onAddressSearch(addr.street, index)"
            />
            <b-spinner
              v-if="addr.loading"
              label="Spinning"
              style="position: absolute; margin-right: 0.5rem"
            />
          </div>
        </div>
        <div class="w-50 pl-2">
          <p>
            Enter a business name if it dosen’t appear in the list above
            {{ addrList.length > 1 ? index + 1 : "" }}
          </p>
          <b-input-group>
            <b-form-input
              id="postcodee"
              v-model="addr.sub"
              placeholder="Enter a business name if it dosen’t appear in the list above"
              type="text"
              name="postcode"
            />
            <b-input-group-append v-if="addrList.length > 1">
              <b-button
                variant="outline-danger"
                @click="onAddressRemove(index)"
              >
                Remove
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </div>
        <div
          v-if="addressList[index].length > 0"
          class="address-list"
        >
          <div
            v-for="b in addressList[index]"
            :key="b.id"
            style="border-bottom: 1px dashed"
            @click="onAddressSelected(index, b.result.description)"
          >
            <p class="cursor-pointer px-1">
              {{ b.result.description }}
            </p>
          </div>
        </div>
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
    </b-row>
  </validation-observer>
</template>

<script>
import {
  BRow,
  BCol,
  BButton,
  BInputGroup,
  BFormGroup,
  BFormInput,
  BFormInvalidFeedback,
  BFormCheckbox,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { ValidationProvider, ValidationObserver } from 'vee-validate'

export default {
  name: 'Informations',
  components: {
    BRow,
    BCol,
    BFormCheckbox,
    BInputGroup,
    BFormGroup,
    BFormInput,
    BButton,
    vSelect,
    ValidationProvider,
    ValidationObserver,
    BFormInvalidFeedback,
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
  background-color: linear-gradient(
    118deg,
    #324ca2,
    rgba(50, 76, 162, 0.7)
  ) !important;
}
</style>
