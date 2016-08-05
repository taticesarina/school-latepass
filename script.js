 


 // Comments : The JavaScript is almost finished
 
 
 

  

function latename() {
 
   var div = document.getElementById("latepass");
    div.style.display = div.style.display == "inline-block" ? "none" : "inline-block";
    
 
    var x = document.getElementById("late").value;
    document.getElementById("name").innerHTML = x;
   
    
    
    
    var today_date=new Date()
    var myyear=today_date.getFullYear()
    var mymonth=today_date.getMonth() +1
    var mytoday=today_date.getDate()
    document.getElementById('date').innerHTML ="<h6>"+mymonth+"/"+mytoday+"/"+myyear+"</h6>";
 
     

   var d=new Date();
    var nhour=d.getHours(),nmin=d.getMinutes(),ap;
    if(nhour==0){ap=" AM";nhour=12;}
    else if(nhour<12){ap=" AM";}
    else if(nhour==12){ap=" PM";}
    else if(nhour>12){ap=" PM";nhour-=12;}

    if(nmin<=9) nmin="0"+nmin;
 
    document.getElementById('clockbox').innerHTML=""+nhour+":"+nmin+ap+"";
 

window.onload=function(){
GetClock();
setInterval(GetClock,1000);
 
 
}

 


}
    function printDiv(latepass) {
 alert('Your late pass will be printed in 5 seconds');
  
 window.print()
} 
 
 
 