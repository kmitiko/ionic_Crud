// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  correiosWS: 'http://viacep.com.br/ws',
  firebase : {
    apiKey: 'AIzaSyAJxGknIiQ20CLzbDx2OQzJjtshQs6Xywc',
    authDomain: 'icruds.firebaseapp.com',
    projectId: 'icruds',
    storageBucket: 'icruds.appspot.com',
    messagingSenderId: '166076696344',
    appId: '1:166076696344:web:263a9547e9697d8396806d',
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
