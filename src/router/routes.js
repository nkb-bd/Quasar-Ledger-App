
const routes = [
  {
    path: '/',
    component: () => import('layouts/MyLayout.vue'),
    children: [
      { path: '', component: () => import('pages/BusinessList.vue'),meta: { requiresAuth: true }  },
      { path: '/todo', component: () => import('pages/Todo.vue') },
      { path: '/history', component: () => import('pages/History.vue'),meta: { requiresAuth: true }  },
      { path: '/help', component: () => import('pages/Help.vue') },
      { path: '/auth', component: () => import('pages/Authentication.vue') },
      { path: '/users', component: () => import('pages/Users.vue'),meta: { requiresAuth: true } },
      { path: '/chat/:otherUserId', component: () => import('pages/Chat.vue'),meta: { requiresAuth: true } }
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
