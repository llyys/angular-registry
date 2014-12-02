define(['require-config', 'ng-registry', 'directives/demoDirective'], function  (config, registry) {
	var angularApp = registry.module('app'); //
	registry.factory('$exceptionHandler', function() {
	    return function(exception, cause) {
	      exception.message += ' (caused by "' + cause + '")';
	      throw exception;
	    };
	  });

	  registry.bootstrap(angularApp); //initialize angular by traversing all registred directives, factories etc. All these elements will be loadd
})