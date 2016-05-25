export function runBlock($log, AuthService, PermissionStore) {
  'ngInject';
  $log.debug('runBlock end');


  PermissionStore.definePermission('anonymous', () => {
      return !AuthService.currentUser();
    }
  )
  ;

  PermissionStore.definePermission('admin', () => {
    return AuthService.currentUser().userRole == "admin";
    }
  );

}
