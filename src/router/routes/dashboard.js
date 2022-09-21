export default [
  {
    path: '/dashboard/analytics',
    name: 'dashboard-analytics',
    component: () => import('@/views/dashboard/analytics/Analytics.vue'),
  },
  {
    path: '/dashboard/ecommerce',
    name: 'dashboard-ecommerce',
    component: () => import('@/views/dashboard/ecommerce/Ecommerce.vue'),
  },
  {
    path: '/dashboard/dashboard-quote',
    name: 'dashboard-quote',
    component: () => import('@/views/dashboard/quote/Quote.vue'),
  },
  {
    path: '/dashboard/adminmodule',
    name: 'dashboard-adminmodules',
    component: () => import('@/views/dashboard/admin-modules/AdminModules.vue'),
  },
  {
    path: '/admin/brokerages',
    name: 'dashboard-brokerages',
    component: () => import('@/views/dashboard/admin-modules/brokerages/BrokeragesList.vue'),
  },
  {
    path: '/admin/arnetworks',
    name: 'arnetworks',
    component: () => import('@/views/dashboard/admin-modules/ar-networks/ArnetwksList.vue'),
  },
  {
    path: '/admin/policies',
    name: 'policies',
    component: () => import('@/views/dashboard/admin-modules/Policies/PoliciesList.vue'),
  },
  {
    path: '/admin/letterofappot',
    name: 'letterofappointement',
    component: () => import('@/views/dashboard/admin-modules/letter-of-appointment/letter-of-appointmentEdit.vue'),
  },
  {
    path: 'admin/usersList',
    name: 'usersList',
    component: () => import('@/views/dashboard/admin-modules/users-list/UsersList.vue'),
  },
  {
    path: '/admin/users/view/:id',
    name: 'admin-users-view',
    component: () => import('@/views/dashboard/admin-modules/users-view/UsersView.vue'),
  },
  {
    path: '/admin/users/edit/:id',
    name: 'admin-users-edit',
    component: () => import('@/views/dashboard/admin-modules/users-edit/UsersEdit.vue'),
  },
]
