

export class InternshipsService {
  constructor($resource, api) {
    'ngInject';
    this.resource = $resource(api + 'v1/internships/:internshipId', {internshipId: '@internshipId'}, {
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
    });


  }




}
