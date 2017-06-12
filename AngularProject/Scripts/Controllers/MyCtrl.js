myApp.controller('myCtrl', function ($scope) {
    
    $scope.arr;
    $scope.messege = false;
    
    
    //For Enter/Exit - save the time selected in the local-storage and update the relevant parameters
    $scope.EnterSave = function (enterTime) {
        if ($scope.Enter == true) {
            localStorage[localStorage.length + 1] = JSON.stringify({ date: new Date(), TimeEnter: enterTime ,TimeExit: null , SumHours: 0});
            $scope.Enter = false;
            $scope.isEnter = false;
            //$scope.Exit = true;
            $scope.HourStart = new Date(enterTime);
            $scope.messegeMor = false;
            

        }
        else {
            $scope.SumHours = new Date(enterTime).getHours() - $scope.HourStart.getHours();
            //Exit time  before Enter time
            if ($scope.SumHours < 0) {
                alert("Exit time is not correct")

                  }
            else {
                
                var t = localStorage[localStorage.length];
                var p= JSON.parse(t);
                localStorage[localStorage.length ] = JSON.stringify({ date: new Date(), TimeEnter: p.TimeEnter, TimeExit: enterTime,SumHours: $scope.SumHours  });
                $scope.isEnter = false;
                $scope.Enter = true;
                $scope.messege = true;

            }
        }
    }

    //Fill the Arr in the local-storage content 
    $scope.loadTable = function () {
        $scope.Arr = [];
        for (var i = 1; i <= localStorage.length; i++) {
            //
            var flag = false;
            var text = localStorage[i];
            var p = JSON.parse(text);
            if (parseInt(p.SumHours)>2) { 
             flag = true;
            }
            $scope.Arr.push({ date: p.date, TimeEnter: p.TimeEnter, TimeExit: p.TimeExit, SumHours: p.SumHours,bonus:flag });
        }
    }
});