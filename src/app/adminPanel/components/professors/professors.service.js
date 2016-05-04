
export class ProfessorsService {
  constructor($resource, api) {
    'ngInject';
    this.resource = $resource(api + 'v1/professors/:professorId', {professorId: '@professorId'}, {
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
