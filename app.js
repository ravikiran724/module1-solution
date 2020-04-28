(function(){
    'use strict';
    angular.module('LunchCheck',[]).controller('Check',function($scope){
        $scope.name="";
        $scope.ans1="";
        $scope.colorr="";
        $scope.borr=""
        $scope.check=function(){
            var x=$scope.name;
            var res=x.split(',');
            if(res.length>3 ){
                $scope.ans1="Too much!";
                 $scope.colorr="green";
                    $scope.borr="green"
            }
            else{
                if(x==""){
                    $scope.ans1="Please enter data first";
                    $scope.colorr="red";
                    $scope.borr="red"
                }
                else{
                 $scope.ans1="Enjoy!";
                 $scope.colorr="green";
                    $scope.borr="green"
                }
            }
        }
    });
})();