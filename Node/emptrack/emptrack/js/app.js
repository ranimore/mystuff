var app = angular.module("myApp", ['ngResource', 'ui.codemirror']);



app.controller("myCtrl", ['$scope', '$resource', '$http', function ($scope, $resource, $http) {
        var queuelist = $resource('/queuelist');
        queuelist.get(function (results) {
            console.log("result" + results);
            $scope.queuelist = results.QueueUrls;
            
        });
        $scope.queuelist = [];
        var contents = $resource('/msg');
        
        //contents.get().$promise.then(function (value) {
        //    debugger

        //    var a = JSON.stringify(value);
        //    $scope.code = a;
        //});
       
       
        //contents.get(function (results) {
          
        //    // var a = JSON.stringify(results.waypoints);

        //    var b = JSON.stringify(results);
        //    debugger
        //    //var c = b.replace(/\d/g,'');
        //   var c = b.split(/"\d":+/g).join('');
        //    var a = c.split(/\"/g).join('');
        //    console.log(a)
        //    $scope.code = a;
        //    //var newList = a.split('},').join('},\n');
        //   // var newList = a.split(',').join('');
        //   // $scope.code = newList;
          
        //});
       
      //  $scope.code = $scope.msg;
      
        $scope.editorOptions = {
            lineWrapping : false,
            lineNumbers: true,
           // theme: 'mdn-like',
            styleActiveLine: true,
            mode:'javascript',
        };

        $scope.send= function () {
           
           console.log($scope.code);
            var obj = {
                Qname: $scope.qurl,
                msg: $scope.code,
               
            }
            $http({
                method: "post",
                url: 'http://localhost:1337/send',
                
                data: JSON.stringify(obj),
            })
        }
         }]);
