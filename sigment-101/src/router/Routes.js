

 const Routes = {
  "/": {
    loader: () => import('../components/Home')
  },
  home: {
    loader: () => import('../components/Home')
  },
  about: {
    path: '/about/:id?',
    loader: () => import('../components/About')
  },
  counter: {
    loader: () => import('../components/Counter')
  },
  hello: {
    loader: () => import('../components/hello/Hello'),
    cacheExpiration: 60000
  },

  fallback: {
     loader: () => import("../components/Home")
  }

};

export default Routes;