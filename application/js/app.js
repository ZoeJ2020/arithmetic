//Global variables
var counter = 0;
var tick = 0;

function tableInput()
{
    //Takes the number user inputs and generates a random multiplication
    table = document.getElementById("table").value;

    times = Math.floor(Math.random() * 12) + 1;
    var timesResult = table * times;

    document.getElementById("question").innerHTML = table + " x _ = " + timesResult;
}

function checkAns()
{
    //Checks the user input is the same as the actual answer
    var ans = times;
    var checkAns = "";

    checkAns = document.getElementById("ans").value;

    counter++;

    //Gives the user three attempts to answer
    for(var count = 0; count <3; count++)
    {
        if (ans == checkAns)
        {
            //If answer is correct, disable buttons and inputs and show number of attempts made
            document.getElementById("feedback").innerHTML="Well done!";
            document.getElementById("feedback").style.color = "#33FF33";
            
            document.getElementById("attempts").innerHTML=counter + " attempt(s)"; 

            document.getElementById("table").disabled=true;
            document.getElementById("ans").disabled=true;
            document.getElementById("a-button").disabled=true;
            document.getElementById("b-button").disabled=true;
            
            break;
        }
        
        else
        {
            //If not, add attempt to counter and display message
            document.getElementById("feedback").innerHTML="Incorrect guess, please try again";
            document.getElementById("feedback").style.color = "#FF0000";

            document.getElementById("attempts").innerHTML=counter + " attempt(s)";   
        }
        if(counter==3)
        {
            //If user runs out of attempts, disable buttons and inputs and print times table
            document.getElementById("table").disabled=true;
            document.getElementById("ans").disabled=true;
            document.getElementById("a-button").disabled=true;
            document.getElementById("b-button").disabled=true;
            
            document.getElementById("feedback").innerHTML="Incorrect, you need to learn your times tables";
            document.getElementById("feedback").style.color = "#393C8F";
            printTable();
            break;
        }
    }
}

function printTable()
{
    //Prints full times table for chosen number
    for(tick = 1; tick <=12; tick++)
    {
        var total = tick * table;

        document.getElementById("timestables").innerHTML += tick + " x " + table + " = " + total + "<br>";
    }
}