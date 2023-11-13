const routes = [
  {
    path: '/',
    method: 'GET',
    handler: (request, h) => {
      return 'Home page'
    }
  },
  {
    path: '/',
    method: '*',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut'
    }
  },
  {
    path: '/about',
    method: 'GET',
    handler: (request, h) => {
      return 'About page'
    }
  },
  {
    path: '/about',
    method: '*',
    handler: (request, h) => {
      return 'Halaman tidak dapat diakses dengan method tersebut'
    }
  },
  {
    path: '/hello/{name?}',
    method: 'GET',
    handler: (request, h) => {
      const { name = "stranger" } = request.params
      const { lang } = request.query

      if ( lang === 'id' ) {
        return `Hai, ${name}!`
      }
      
      return `Hello, ${name}!`
    }
  },
  {
    path: '/login',
    method: 'POST',
    handler: (request, h) => {
      const { username, password } = request.payload
      if ( !username  && !password ) {
        return `Missing username or password!`
      }

      return `Welcome ${username}!`
    }
  },
  {
   path: `/{any*}`,
   method: '*',
    handler: (request, h) => {
      return 'Halaman tidak ditemukan'
    }
  }
]

module.exports = routes