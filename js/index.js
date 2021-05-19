//Global Variable
var counter = 0;

function checkUser()
{
    //Local Variables
    var username="adminGCC";
    var pwd="password";
    var checkUser="";
    var checkPwd="";

    checkUser = document.getElementById("user").value;
    checkPwd = document.getElementById("pwd").value;

    counter++

    //Gives the user three attempts to log in
    for(var count = 0; count <3; count++)
    {
        //Checks that user inputs match the predetermined login variables
        if (username==checkUser && pwd==checkPwd)
        {
            //If yes, redirect to app
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
            //If no, add attempt to counter and ask to try again
            document.getElementById("feedback").innerHTML="Incorrect, try again";
            document.getElementById("feedback").style.color="#FF0000"

            document.getElementById("user").innerHTML="";
            document.getElementById("attempts").innerHTML=counter + " attempts";   
        }
        if(counter==3)
        {
            //If attempts have ran out, disable buttons to continue and deny access
            document.getElementById("user").disabled=true;
            document.getElementById("pwd").disabled=true;
            document.getElementById("submit").disabled=true;
            
            document.getElementById("feedback").innerHTML="ACCESS DENIED";
        }
    }
}