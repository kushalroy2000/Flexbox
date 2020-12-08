   var count = 0 ;
   var count1 = 0;
   var count2 = 0;

        function inc(i){
            count += i;
            document.getElementById('show').innerHTML = count;
            return count;
        }

        function dec(j){
            if (count > 0){
                count -= j;
                document.getElementById('show').innerHTML = count;
                return count;
            }
            else{
                alert("Counter is already at 0 !")
            }}




        function inc1(i){
            count1 += i;
            document.getElementById('show1').innerHTML = count1;
            return count1;
        }

        function dec1(j){
            if (count1 > 0){
                count1 -= j;
                document.getElementById('show1').innerHTML = count1;
                return count1;
            }
            else{
                alert("Counter is already at 0 !")
            }}

        function inc2(i){
            count2 += i;
            document.getElementById('show2').innerHTML = count2;
            return count2;
        }

        function dec2(j){
            if (count2 > 0){
                count2 -= j;
                document.getElementById('show2').innerHTML = count2;
                return count2;
            }
            else{
                alert("Counter is already at 0 !")
            }}

function sub(){
    var re = count+count1+count2 ;
    alert(re);
}