<template>
  <b-card no-body>
    <b-card-header class="pb-50">
      <h5>
        Filters
      </h5>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col
          cols="12"
          md="4"
          class="mb-md-0 mb-2"
        >
          <label>User Type</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="roleFilter"
            :options="roleOptions"
            class="w-100"
            :reduce="val => val.value"
            @input="(val) => $emit('update:roleFilter', val)"
          />
        </b-col>
        <b-col
          cols="12"
          md="4"
          class="mb-md-0 mb-2"
        >
          <label>Status</label>
          <v-select
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="statusFilter"
            :options="statusOptions"
            class="w-100"
            :reduce="val => val.value"
            @input="(val) => $emit('update:statusFilter', val)"
          />
        </b-col>
        <b-col
          cols="12"
          md="4"
          class="mb-md-0 mb-2"
        >
          <label>Brokerage</label>
          <b-form-input
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            class="w-100"
            :reduce="val => val.value"
            @input="onBrokage"
          />
        </b-col>
      </b-row>
    </b-card-body>
  </b-card>
</template>

<script>
import {
  BCard, BCardHeader, BCardBody, BRow, BCol, BFormInput,
} from 'bootstrap-vue'
import vSelect from 'vue-select'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BFormInput,
    BCardBody,
    vSelect,
  },
  props: {
    roleFilter: {
      type: [Number, null],
      default: null,
    },
    brokageFilter: {
      type: [String, null],
      default: null,
    },
    statusFilter: {
      type: [Number, null],
      default: null,
    },
    roleOptions: {
      type: Array,
      required: true,
    },
    statusOptions: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      timeout: null,
    }
  },
  methods: {
    onBrokage(val) {
      clearTimeout(this.timeout)
      this.timeout = setTimeout(() => {
        if (val.trim().length > 0) {
          this.$emit('update:brokageFilter', val)
        }
      }, 1000)
    },
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
