function submit(){

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var credit = document.getElementById("credit");
    var month = document.getElementById("month");
    var year = document.getElementById("year");
    var error = document.getElementById("error");
 
    var check=true;

    credit=credit.value;
    var credit = /^\(?(\d{4})\)[\-](\d{4})[\-]?(\d{4})$/;

    for(i=0;i<credit.length;i++){

        if (!isNaN(credit[i])) {

        } 

        else {

            check = false

            break;

        }

    }


 

    if (name.value=="" || email.value=="" || credit.value=="" || month.value=="" || year.value=="")
    {

        error.innerHTML="All fields are required to fill in order to go furthur";

        error.style.display="block";

    }
    else if(check==false)
    {

        error.innerHTML="Please enter valid credit card details";

        error.style.display="block";

    }
    else if(month.value.length>3 || month.value.length<3)//including - in between
    {

        error.innerHTML="Please enter first 3 letter of month eg. jan";

        error.style.display="block";

    }

    else if(year.value.length>4 || year.value.length<4){

        error.innerHTML="Please Enter valid month eg. 2021";

        error.style.display="block";

    }
    else if(credit.length<19 || credit.length>19)
    {

        error.innerHTML="Please enter valid credit card number";

        error.style.display="block";

    }

    else{

        var test=document.getElementById("test");

        test.style.display="block";

        var box=document.getElementById("box");

        box.style.display="none";

    }

    var P1=document.getElementById("P1");

    var P2=document.getElementById("P2");

    var P3=document.getElementById("P3");

    var P4=document.getElementById("P4");

    var P5=document.getElementById("P5");

 

    P1.addEventListener("click", buy(110));

    P2.addEventListener("click", buy(110));

    P3.addEventListener("click", buy(110));

    P4.addEventListener("click", buy(110));

    P5.addEventListener("click", buy(110));


    function buy(price){

        var sum=document.getElementById("sum");

        sum.style.display="block";

        var run=document.getElementById("run");

        run.onclick= function() {

            var sum_p=document.getElementById("sum_p").value;

            var error=document.getElementById("error");

            if (sum_p<0 || sum_p==""){

                error.innerHTML="Please enter valid number!!";

            }

            else{

                var total=parseInt(price)*parseInt(sum_p)

                

                var donate=(total/100)*10;

                if(total<100){

                    donate=10

                }

                var bill="<h1><center>name: "+name.value+"<br>Email: "+email.value+"<br> credit: xxxx-xxxx-xxxx-"+credit[3]+"<br>Total bill: "+total+"<br>Donation: "+donate;

                document.write(bill);

            }       

        }

    } return false;

}