
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '/', component: () => import('pages/Index.vue') },
      { path: '/product', component: () => import('pages/Product.vue') },
      { path: '/contact-support', component: () => import('pages/ContactSupport.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/app/new-admin-user', component: () => import('app-pages/NewAdminUser.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
