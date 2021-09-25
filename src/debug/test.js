

if(1){


    var arr = [4,5,6];
    var res = arr.map((ele,i)=>{
        return ele + 1;
    })

    console.log(arr);



}else if(0){

    var arr = [
        {"type": 5, "timestamp": 1000},
        {"type": 5, "timestamp": 2000},



        {"type": 5, "timestamp": 4000},
        {"type": 5, "timestamp": 4500},

        {"type": 5, "timestamp": 5000},
        {"type": 5, "timestamp": 6000},

        ];

    getDuration(arr,1000)
    function getDuration(arr,ceilDuration){

        var time = 0;
        for(var i=0;i<arr.length;i++){
            // 相邻两个不超过1秒， 算入时间

            var next = arr[i+1];
            var current = arr[i];
            if(next){
                var duration = arr[i+1].timestamp - arr[i].timestamp;
                if(duration <= ceilDuration){
                    time += duration
                }
            }
        }
        console.log(time)
    }

}









