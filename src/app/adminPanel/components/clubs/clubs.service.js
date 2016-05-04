export class ClubsService {

  constructor($resource, api){
    'ngInject';

    this.resource = $resource( api + 'v1/clubs/:clubsId', {clubsId: '@clubsId'},
      {
        get: {
          method: 'GET'
        },
        query: {
          method: 'GET',
          isArray: true
        },
        delete: {
          method: 'DELETE'
        },
        add: {
          method: 'POST'
        },
        update: {
          method: 'PUT'
        }
      }

    );

  }



}
