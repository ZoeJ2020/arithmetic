var counter = 0;

function checkUser()
{
    var username="adminGCC";
    var pwd="password";
    var checkUser="";
    var checkPwd="";

    checkUser = document.getElementById("user").value;
    checkPwd = document.getElementById("pwd").value;

    counter++

    for(var count = 0; count <3; count++)
    {
        if (username==checkUser && pwd==checkPwd)
        {
            document.getElementById("feedback").innerHTML="Login successful! Redirecting to application page...";
            document.getElementById("feedback").style.color="#33FF33"
            
            document.getElementById("attempts").innerHTML=counter + " attempts"; 
    
            setTimeout(function(){
                location.replace("application/app.html");
            }, 2000);
            {
                break;
            }
        }
        
        else
        {
            document.getElementById("feedback").innerHTML="Incorrect, try again";
            document.getElementById("feedback").style.color="#FF0000"

            document.getElementById("user").innerHTML="";
            document.getElementById("attempts").innerHTML=counter + " attempts";   
        }
        if(counter==3)
        {
            document.getElementById("user").disabled=true;
            document.getElementById("pwd").disabled=true;
            document.getElementById("submit").disabled=true;
            
            document.getElementById("feedback").innerHTML="ACCESS DENIED";
        }
    }
}