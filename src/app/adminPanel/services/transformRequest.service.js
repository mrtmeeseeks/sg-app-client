/**
 * Created by AcerPC on 5/6/2016.
 */
export class TransformRequestService {
  constructor() {
  }

  transform(data) {
    var fd = new FormData();
    angular.forEach(data, (value, key) => {
      key = data.wrapper + "[" + key + "]";
      fd.append(key, value);
    });

    return fd;
  };

}
