export class TeamMemberService {

  constructor($resource, api, TransformRequestService) {
    'ngInject';


    this.resource = $resource(api + "v1/team_members/:teamMemberId", {teamMemberId: '@teamMemberId'}, {
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
        method: 'PUT',
        transformRequest: TransformRequestService.transform,
        headers: {
          'Content-Type': undefined
        }
      }
    });
  }


}
