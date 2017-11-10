import Vue from 'vue'

export default {
  login (params) {
    return Vue.httpClient.post('/admin/login', params)
  },
  logout () {
    return Vue.httpClient.post('/admin/logout')
  },
  getProfile () {
    return Vue.httpClient.get('/admin/getprofile')
  },
  getMenus () {
    return Vue.httpClient.get('/admin/getmenus')
  },
  getPermissions () {
    return Vue.httpClient.get('/admin/getPermissions')
  },
  getPermissionTree () {
    return Vue.httpClient.get('/admin/getPermissionTree')
  },
  getRoles () {
    return Vue.httpClient.get('/admin/getRoles')
  },
  moveRole (params) {
    return Vue.httpClient.post('/admin/moveRole', params)
  },
  removeRole (params) {
    return Vue.httpClient.post('/admin/removeRole', params)
  },
  saveRoleName (params) {
    return Vue.httpClient.post('/admin/saveRoleName', params)
  },
  addRole (params) {
    return Vue.httpClient.post('/admin/addRole', params)
  },
  editRole (params) {
    return Vue.httpClient.post('/admin/editRole', params)
  }
}
