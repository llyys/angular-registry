define(['angular'], function(angular) {
  return {
    registry: [],
    name: '',
    module: function(name, dependencies) {
      this.name = name;
      return angular.module(name, dependencies)
    },
    bootstrap: function(module) {
      for (i in this.registry) {
        var item = this.registry[i];
        module[item.type](item.name, item.fn)
      }
      if (!angular.mock) //when unit-testing we don't execute bootstrap
      {
        var isIe = navigator.userAgent.indexOf('MSIE') !== -1 || navigator.appVersion.indexOf('Trident/') > 0;

        var doc = isIe ? document.body : document;
        return angular.bootstrap(doc, [this.name]);
      }
    },
    directive: function(name, fn) {
      this.register('directive', name, fn);
      return fn;
    },
    filter: function(name, fn) {
      this.register('filter', name, fn);
      return fn;
    },
    constant: function(name, fn) {
      this.register('constant', name, fn);
      return fn;
    },
    service: function(name, fn) {
      this.register('service', name, fn);
      return fn;
    },
    controller: function(name, fn) {
      this.register('controller', name, fn);
      return fn;
    },
    factory: function(name, fn) {
      this.register('factory', name, fn);
      return fn;
    },
    register: function(type, name, fn) {
      this.registry.push({type: type, name: name, fn: fn});
    }
  }
});