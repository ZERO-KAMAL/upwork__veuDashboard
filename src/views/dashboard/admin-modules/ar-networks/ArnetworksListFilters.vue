<template>
  <b-card no-body>
    <b-card-header class="pb-50">
      <h5>Filters</h5>
    </b-card-header>
    <b-card-body>
      <b-row>
        <b-col cols="12" md="4" class="mb-md-0 mb-2">
          <label>User Type</label>
          <v-select
            v-model="type"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="usertypeFilter"
            :options="usertypeOptions"
            class="w-100"
            :reduce="(val) => val.value"
            @input="(val) => $emit('usertypeFilter', val)"
            @reset="$emit('refetchData')"
          />
        </b-col>
        <b-col cols="12" md="4" class="mb-md-0 mb-2">
          <label>Brokerages</label>
          <div class="d-flex align-items-center justify-content-end">
            <b-form-input
              v-model="searchQuery"
              class="w-100"
              placeholder="Search..."
              @input="(val) => $emit('brokageFilter', val)"
              @reset="$emit('refetchData')"
            />
          </div>
        </b-col>
        <b-col cols="12" md="4" class="mb-md-0 mb-2">
          <label>Status</label>
          <v-select
            v-model="status"
            :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
            :value="statusFilter"
            :options="statusOptions"
            class="w-100"
            :reduce="(val) => val.value"
            @input="(val) => $emit('statusFilter', val)"
            @reset="$emit('refetchData')"
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
import useArnetworkList from './ArnetwksList'

export default {
  setup() {
    const {
      status,
      type,
      searchQuery,
    } = useArnetworkList()
    return {
      status,
      type,
      searchQuery,
    }
  },
  components: {
    BRow,
    BCol,
    BCard,
    BCardHeader,
    BCardBody,
    vSelect,
    BFormInput,
  },

  props: {
    usertypeFilter: {
      type: [String, null],
      default: null,
    },
    brokagesFilter: {
      type: [String, null],
      default: null,
    },
    statusFilter: {
      type: [String, null],
      default: null,
    },
    usertypeOptions: {
      type: Array,
      required: true,
    },
    statusOptions: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
