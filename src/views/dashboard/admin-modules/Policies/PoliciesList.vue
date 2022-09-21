<template>
  <section id="policies">
    <div>
      <user-list-add-new
        :is-add-new-user-sidebar-active.sync="isAddNewUserSidebarActive"
        :usertype-options="usertypeOptions"
        @refetch-data="refetchData"
      />

      <!-- Filters -->
      <users-list-filters
        :usertype-options="usertypeOptions"
        :status-options="statusOptions"
        @usertypeFilter="usertypeFilter"
        @brokageFilter="brokagesFilter"
        @statusFilter="statusFilter"
        @refetchData="refetchData"
      />

      <!-- Table Container Card -->
      <b-card
        no-body
        class="mb-0"
      >
        <div class="m-2">
          <!-- Table Top -->
          <b-row>
            <!-- Per Page -->
            <b-col
              cols="12"
              md="6"
              class="d-flex align-items-center justify-content-start mb-1 mb-md-0"
            >
              <label>Show</label>
              <v-select
                v-model="perPage"
                :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
                :options="perPageOptions"
                :clearable="false"
                class="per-page-selector d-inline-block mx-50"
              />
              <label>entries</label>
            </b-col>

            <!-- Search -->
            <b-col
              cols="12"
              md="6"
            >
              <div class="d-flex align-items-center justify-content-end">
                <b-form-input
                  v-model="searchText"
                  class="d-inline-block mr-1"
                  placeholder="Search..."
                  @input="onSearch"
                />
                <b-button
                  variant="primary"
                  @click="isAddNewUserSidebarActive = true"
                >
                  <span class="text-nowrap">Add User</span>
                </b-button>
              </div>
            </b-col>
          </b-row>
        </div>
        <b-table
          ref="refUserListTable"
          class="position-relative"
          :items="users"
          responsive
          :fields="tableColumns"
          primary-key="id"
          :sort-by.sync="sortBy"
          show-empty
          empty-text="No matching records found"
          :sort-desc.sync="isSortDirDesc"
        >
          <!-- Column: id -->
          <template #cell(id)="data">
            <b-badge
              pill
              :variant="`light-${resolveVariant(data.item.id)}`"
              class="text-capitalize"
            >
              {{ data.item.id }}
            </b-badge>
          </template>
          <!-- Column: username -->
          <template #cell(username)="data">
            <b-media vertical-align="center">
              <template #aside>
                <feather-icon
                  :icon="resolveIcon(data.item.user_type)"
                  size="18"
                  class="mr-50"
                  :class="`text-${resolveVariant(data.item.user_type)}`"
                />
              </template>
              <b-link
                :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
                class="font-weight-bold d-block text-nowrap"
              >
                {{ data.item.fullName }}
              </b-link>
              <small class="text-muted">@{{ data.item.username }}</small>
            </b-media>
          </template>
          <!-- Column: user -->
          <template #cell(user)="data">
            <b-media vertical-align="center">
              <template #aside>
                <b-avatar
                  size="32"
                  :src="data.item.avatar"
                  :text="avatarText(data.item.username)"
                  :variant="`light-${resolveVariant(data.item.username)}`"
                  :to="{
                    name: 'apps-users-view',
                    params: { id: data.item.username },
                  }"
                />
              </template>
              <b-link
                :to="{ name: 'apps-users-view', params: { id: data.item.username } }"
                class="font-weight-bold d-block text-nowrap"
              >
                {{ data.item.username }}
              </b-link>
              <small class="text-muted">@{{ data.item.username }}</small>
            </b-media>
          </template>
          <!-- Column: brokerage -->
          <template #cell(brokage)="data">
            <div class="text-nowrap">
              <span class="align-text-top text-capitalize">{{
                data.item.brokerage
              }}</span>
            </div>
          </template>

          <!-- Column: Status -->
          <template #cell(status)="data">
            <b-badge
              pill
              :variant="`light-${resolveVariant(data.item.status)}`"
              class="text-capitalize"
            >
              {{ status[parseInt(data.item.status,10)-1] }}
            </b-badge>
          </template>
          <!-- Column: user_type -->
          <template #cell(user_type)="data">
            <b-badge
              pill
              :variant="`light-${resolveVariantType(data.item.user_type)}`"
              class="text-capitalize"
            >
              {{ types[parseInt(data.item.user_type,10)-1] }}
            </b-badge>
          </template>

          <!-- Column: Actions -->
          <template #cell(actions)="data">
            <b-dropdown
              variant="link"
              no-caret
              :right="$store.state.appConfig.isRTL"
            >
              <template #button-content>
                <feather-icon
                  icon="MoreVerticalIcon"
                  size="16"
                  class="align-middle text-body"
                />
              </template>
              <b-dropdown-item
                :to="{ name: 'apps-users-view', params: { id: data.item.id } }"
              >
                <feather-icon icon="FileTextIcon" />
                <span class="align-middle ml-50">Details</span>
              </b-dropdown-item>

              <b-dropdown-item
                :to="{ name: 'apps-users-edit', params: { id: data.item.id } }"
              >
                <feather-icon icon="EditIcon" />
                <span class="align-middle ml-50">Edit</span>
              </b-dropdown-item>

              <b-dropdown-item>
                <feather-icon icon="TrashIcon" />
                <span class="align-middle ml-50">Delete</span>
              </b-dropdown-item>
            </b-dropdown>
          </template>
        </b-table>
        <div
          class="d-flex"
          style="justify-content: center; align-items: center"
        >
          <b-spinner
            v-if="uloading"
            label="Loading..."
          />
        </div>
        <div class="mx-2 mb-2">
          <b-row>
            <b-col
              cols="12"
              sm="6"
              class="d-flex align-items-center justify-content-center justify-content-sm-start"
            >
              <span
                class="text-muted"
              >Showing {{ 0 }} to {{ totalUsers }} of
                {{ totalUsers }} entries</span>
            </b-col>
            <!-- Pagination -->
            <b-col
              cols="12"
              sm="6"
              class="d-flex align-items-center justify-content-center justify-content-sm-end"
            >
              <b-pagination
                v-model="currentPage"
                :total-rows="totalUsers"
                :per-page="perPage"
                first-number
                last-number
                class="mb-0 mt-1 mt-sm-0"
                prev-class="prev-item"
                next-class="next-item"
              >
                <template #prev-text>
                  <feather-icon
                    icon="ChevronLeftIcon"
                    size="18"
                  />
                </template>
                <template #next-text>
                  <feather-icon
                    icon="ChevronRightIcon"
                    size="18"
                  />
                </template>
              </b-pagination>
            </b-col>
          </b-row>
        </div>
      </b-card>
    </div>
  </section>
</template>

<script>
import {
  BCard,
  BRow,
  BCol,
  BFormInput,
  BButton,
  BTable,
  BMedia,
  BAvatar,
  BSpinner,
  BLink,
  BBadge,
  BDropdown,
  BDropdownItem,
  BPagination,
} from 'bootstrap-vue'
import vSelect from 'vue-select'
import { onBeforeMount, ref } from '@vue/composition-api'
import { avatarText } from '@core/utils/filter'
import PoliciesListFilters from './PoliciesListFilters.vue'
import usePoliciesList from './usePoliciesList'
import PoliciesListAddNew from './PoliciesListAddNew.vue'

export default {
  components: {
    PoliciesListFilters,
    PoliciesListAddNew,

    BCard,
    BRow,
    BCol,
    BFormInput,
    BButton,
    BTable,
    BMedia,
    BAvatar,
    BLink,
    BBadge,
    BSpinner,
    BDropdown,
    BDropdownItem,
    BPagination,

    vSelect,
  },
  setup() {
    const isAddNewUserSidebarActive = ref(false)
    const searchText = ref('')

    const usertypeOptions = [
      { label: 'All User Type', value: '0' },
      { label: 'Brockers', value: '1' },
      { label: 'Staff', value: '2' },
      { label: 'Syndicate', value: '3' },
      { label: 'Authorized Rep', value: '4' },
    ]

    const types = ['Brocker', 'staff', 'syndicate', 'authorized']
    const status = ['Pending', 'Active', 'Inactive', 'Blcoked']

    const statusOptions = [
      { label: 'All', value: '0' },
      { label: 'Pending', value: '1' },
      { label: 'Active', value: '2' },
      { label: 'Inactive', value: '3' },
      { label: 'Blocked', value: '4' },
    ]

    const {
      fetchPolicies,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      perPageOptions,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      uloading,
      users,
      cUsers,
    } = usePoliciesList()

    const resolveVariant = val => {
      if (val === '1') return 'warning'
      if (val === '2') return 'success'
      if (val === '3') return 'info'
      if (val === '4') return 'danger'
      return 'primary'
    }

    const resolveVariantType = val => {
      if (val === '1') return 'primary'
      if (val === '2') return 'primary'
      if (val === '3') return 'secondary'
      if (val === '4') return 'secondary'
      return 'primary'
    }

    const resolveIcon = val => {
      if (val === '1') return 'UserIcon'
      if (val === '2') return 'UserIcon'
      if (val === '3') return 'DatabaseIcon'
      if (val === '4') return 'DatabaseIcon'
      return 'UserIcon'
    }

    const refetchData = () => {
      users.value = cUsers.value
    }

    const usertypeFilter = val => {
      refetchData()
      if (val !== '0') {
        users.value = users.value.filter(el => (el.user_type === val))
      }
    }

    const brokagesFilter = val => {
      refetchData()
      users.value = users.value.filter(el => (el.brokerage && (el.brokerage?.toLowerCase().search(val.toLowerCase()) !== -1)))
    }

    const statusFilter = val => {
      refetchData()
      if (val !== '0') {
        users.value = users.value.filter(el => (el.status === val))
      }
    }

    const onSearch = () => {
      refetchData()
      users.value = users.value.filter(el => (el.username?.toLowerCase().search(searchText.value.toLowerCase()) !== -1))
    }

    onBeforeMount(async () => {
      await fetchPolicies()
    })

    return {
      // Sidebar
      isAddNewUserSidebarActive,
      tableColumns,
      perPage,
      currentPage,
      totalUsers,
      perPageOptions,
      sortBy,
      isSortDirDesc,
      refUserListTable,
      uloading,
      avatarText,
      usertypeOptions,
      statusOptions,
      types,
      status,
      users,
      refetchData,
      resolveVariant,
      resolveVariantType,
      resolveIcon,
      usertypeFilter,
      brokagesFilter,
      statusFilter,
      searchText,
      onSearch,
    }
  },
}
</script>

<style lang="scss" scoped>
.per-page-selector {
  width: 90px;
}
</style>

<style lang="scss">
@import "@core/scss/vue/libs/vue-select.scss";
</style>
