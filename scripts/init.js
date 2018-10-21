var App = angular.module('App', ['pr.longpress']);

App.config(function($sceProvider) {
   $sceProvider.enabled(false);
});

App.config(function($locationProvider) {
   $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
   });
});


if(!window.CONFIG) {
   var error = '请确认"config.js"文件存在并配置正确！\n' +
      '如果您是第一次运行本程序, 请修改"config.example.js"文件名为"config.js"';

   alert(error);
}

var Api = new HApi(CONFIG.wsUrl);
