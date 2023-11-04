 var information = [
    {
        username: "Lukman",
        password: "lakuna"
    },
    {
        username: "Abbas",
        password: "Abba"
    },
    {
        username: "Ameera",
        password: "Ammi"
    }
    
 ];
 var NewsFeed = [
    {
        username: "Sadiq",
        timeline: "Life is not by force"
    },

    {
        username: "Yasir",
        Timeline: "Alhamdulillah"
    }, 
    {
        username: "Naseeru",
        Timeline: "JavaScript is cool"
    }
 ];
 var info = [
    {
        username: "LukmanModibbo",
        password: "123456"
    },

    {
        username: "RukkayyatuModibbo",
        password: "Maryam"
    }
 ]
 var userNamePrompt = prompt("What is your username");
 var passWordPrompt = prompt("Enter your password");


 function isValidUser(userName, password){
    for (i = 0; i< info.length; i++){
        if (info[i].username === userName && info[i].password === password){
            return true;
        } 
    }
     return false;
 }

 function logIn(username, password){
        if (isValidUser(username, password)) {
            console.log(NewsFeed);
        } else{
            alert("Wrong userName or password");
        }
    }
//     if (user === information[0].username && pass === information[0].password){
//         console.log(info);
//     } else {
//         alert("Sorry you have entered Wrong Details");
//     }
 
 logIn( userNamePrompt, passWordPrompt);



















