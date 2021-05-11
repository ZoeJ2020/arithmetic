var counter = 0;
var tick = 0;

function tableInput()
{
    table = document.getElementById("table").value;

    times = Math.floor(Math.random() * 12) + 1;
    var timesResult = table * times;

    document.getElementById("question").innerHTML = table + " x _ = " + timesResult;
}

function printTable()
{
    for(tick = 1; tick <=12; tick++)
    {
        var total = tick * table;

        document.getElementById("timestables").innerHTML += tick + " x " + table + " = " + total + "<br>";
    }
}

function checkAns()
{
    var ans = times;
    var checkAns = "";

    checkAns = document.getElementById("ans").value;

    counter++;

    for(var count = 0; count <3; count++)
    {
        if (ans == checkAns)
        {
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
            document.getElementById("feedback").innerHTML="Incorrect guess, please try again";
            document.getElementById("feedback").style.color = "#FF0000";

            document.getElementById("attempts").innerHTML=counter + " attempt(s)";   
        }
        if(counter==3)
        {
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