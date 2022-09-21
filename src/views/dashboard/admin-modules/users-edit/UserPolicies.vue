<template>
  <b-form>
    <b-row>
      <b-card
        no-body
        class="border mt-1"
      >
        <b-card-header class="p-1">
          <b-card-title class="font-medium-2">
            <feather-icon
              icon="LockIcon"
              size="18"
            />
            <span class="align-middle ml-50">Permission</span>
          </b-card-title>
        </b-card-header>
        <b-table
          striped
          responsive
          class="mb-0"
          :items="permissionsData"
        >
          <template #cell(module)="data">
            {{ data.value }}
          </template>
          <template #cell()="data">
            <b-form-checkbox :checked="data.value" />
          </template>
        </b-table>
      </b-card>
    </b-row>
    <b-row>
      <b-col class="mt-2">
        <b-button
          variant="primary"
          class="mb-1 mb-sm-0 mr-0 mr-sm-1"
          :block="$store.getters['app/currentBreakPoint'] === 'xs'"
        >
          Save Changes
        </b-button>
        <b-button
          variant="outline-secondary"
          :block="$store.getters['app/currentBreakPoint'] === 'xs'"
        >
          Reset
        </b-button>
      </b-col>
    </b-row>
  </b-form>
</template>

<script>
import {
  BRow, BCol, BForm, BCard, BCardHeader, BButton, BCardTitle, BTable, BFormCheckbox,
} from 'bootstrap-vue'

export default {
  components: {
    BRow, BCol, BForm, BCard, BButton, BCardHeader, BCardTitle, BTable, BFormCheckbox,
  },
  setup() {
    const permissionsData = [
      {
        module: 'Admin',
        read: true,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'Staff',
        read: false,
        write: true,
        create: false,
        delete: false,
      },
      {
        module: 'Author',
        read: true,
        write: false,
        create: true,
        delete: false,
      },
      {
        module: 'Contributor',
        read: false,
        write: false,
        create: false,
        delete: false,
      },
      {
        module: 'User',
        read: false,
        write: false,
        create: false,
        delete: true,
      },
    ]
    return {
      permissionsData,
    }
  },
}
</script>

<style>

</style>
