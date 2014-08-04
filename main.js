angular.module('myApp', [])
  .controller('LibsCtrl', function($scope){
    "use strict";
    $scope.words = [
    {word: 'FirstName', placeholder:'female name'},
    {word: 'jobTitle', placeholder:'job title'},
    {word: 'tediousTask', placeholder:'tedious task'},
    {word: 'dirtyTask', placeholder:'dirty task'},
    {word: 'celebrity', placeholder:'celebrity'},
    {word: 'uselessSkill', placeholder:'useless skill'},
    {word: 'obnoxiousCelebrity', placeholder:'obnoxious Celebrity'},
    {word: 'hugeNumber', placeholder:'huge number'},
    {word: 'adjective', placeholder:'adjective'}
    ];
    // This is how I did it before by putting every model into a specific scope
    // $scope.firstName = '';
    // $scope.jobTitle = '';
    // $scope.tediousTask = '';
    // $scope.dirtyTask = '';
    // $scope.celebrity = '';
    // $scope.uselessSkill = '';
    // $scope.obnoxiousCelebrity = '';
    // $scope.hugeNumber = '';
    // $scope.adjective = '';
    // hide mad lib content initially, that way I don't use ng-if="submitted"
    $scope.madLib = true;

    $scope.submit = function(){
      var validForm         = $scope.myForm.$valid;
      var validName         = $scope.myForm.myName.$dirty;
      var validJobTitle     = $scope.myForm.myJobTitle.$dirty;
      var validTediousTask  = $scope.myForm.myTediousTask.$dirty;
      var validDirtyTask    = $scope.myForm.myDirtyTask.$dirty;
      var validCelebrity    = $scope.myForm.myCelebrity.$dirty;
      var validUselessSkill = $scope.myForm.myUselessSkill.$dirty;
      var validOC           = $scope.myForm.myOC.$dirty;
      var validHugeNumber   = $scope.myForm.myHugeNumber.$dirty;
      var validAdjective    = $scope.myForm.myAdjective.$dirty;

      if(validForm || validName || validJobTitle || validTediousTask || validDirtyTask || validCelebrity || validUselessSkill || validOC || validHugeNumber || validAdjective){
        // hide inputs if true
        $scope.formInputs = true;
        $scope.madLib = false;
      }
    };
    // on click start over hide mad lib content, show inputs, and reset the form
    $scope.startOver = function(){
      // hide madLib content
      $scope.madLib = true; 
      // show form inputs
      $scope.formInputs = false;
    };
  })  