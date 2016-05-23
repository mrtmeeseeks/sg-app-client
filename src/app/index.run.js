export function runBlock($log, AuthService, PermissionStore) {
  'ngInject';
  $log.debug('runBlock end');

  //todo: should the api return a user permission attribute on login?
  //PermissionStore.definePermission('admin', () =>
  //  AuthService.currentUser()
  //);

}
