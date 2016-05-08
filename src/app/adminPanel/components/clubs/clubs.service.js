export class ClubsService {

  constructor($resource, api, TransformRequestService){
    'ngInject';

    this.resource = $resource( api + 'v1/clubs/:clubId', {clubId: '@clubId'},
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
          method: 'POST',
          transformRequest: TransformRequestService.transform,
          headers: {
            'Content-Type': undefined
          }

        },
        update: {
          method: 'PUT'
        }
      }

    );

  }



}
