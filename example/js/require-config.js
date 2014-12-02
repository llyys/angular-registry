define(function () {
  var config={    
    paths: {
      'angular': 'lib/angular/angular.min',
      'registry': 'lib/angular/angular-registry'
    }
  }
  require.config(config)
  return config;
})