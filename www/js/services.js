'use strict';

angular.module('starter.services',['ngResource'])
       
           
        .factory('StatmentService',['$http', function($http) {
	return {
		GetStatments: function() {           
            
          /*  return [{"_id":"5960778fa46e657e77ea4bbb","amount":0,"description":"Start"},{"_id":"5960ab25ec6d28836b9da968","amount":100,"description":"Start"},{"_id":"5960ab30ec6d28836b9da969","amount":300,"description":"Start"},{"_id":"5960ab3aec6d28836b9da96a","amount":500,"description":"Start"},{"_id":"5960ad7e440274018475f67c","amount":"1500","description":"end"}] 
            */
			 /* return [{"amount": 0,
                       "description":"Start"},
                      {"amount": 100,
                       "description": "New Entry"}                      
                     ] 
                     */                
            
         return   $http({
                    url: 'https://expnccalc.herokuapp.com/',                   
                    method: 'GET'
                });     		
        }      
	}
}]) 
      /*  .factory('PostService',['$http', function($http) {
            return {
                PostStatments : function() {
                    return $http({
                        url: 'http://192.168.43.90:3000/add',
                        method: 'POST'
                    });
                }
            }
        }])
        */
       
;
