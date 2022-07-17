window.onload = function () {
    var user="Bella";
    var count=0;
    // var user=prompt("Please Enter your Name : ");
    // if(user==null || user==""){
    //     user="User";
    // }
   

    var go = document.getElementById("go");
    //var openBtn=document.getElementById("open-modal");
    

    var guess = document.getElementById("guess");
    guess.value = null;
    var num;

    var msg = document.getElementById("msg");
    var msgContent = document.getElementById("msg-content");
    var msgTitle = document.getElementById("msg-title");
    var msgSubject = document.getElementById("msg-subject");
    var s_msg = document.getElementById("s-msg");
    var id = ["msg-content", "msg", "msg-title", "go","help","Restart"];

    var  help = document.getElementById("help");


    help.onclick = function () {
        
        openModal();
        msgTitle.style.background="blue";
        msgContent.style.color="black";
        msgContent.style.textAlign="left";
        msgSubject.innerHTML="Rules";
        msgContent.innerHTML='<h1 style="text-align: center;margin: 0 0 1rem;">Welcome ' + user + '</h1>' + 
'<h3 style="margin:0 0 1rem;font-size: 1.25rem;text-decoration: underline;">Rules and Policy</h3>' +
'<ul>' + 
    '<li>Lorem ipsum dolor sit amet consectetur adipisicing.</li>' +
    '<li>doloremque officiis ducimus nem voluptas optio odit es </li>' +
   '<li> sit harum.  Minima exercitatio</li>' +
    '<li>Molestiae expedita libero harum, nobis non facilis?</li>' +
    '<li>elit. Soluta ratione maiores se sed</li>' +
'</ul>' ;


    }

    function generateRand() {
        num = (1 + Math.ceil(Math.random() * 8));
        console.log(num);
    }

    generateRand();





    go.onclick = function () {
        if(go.id=="go"){
            gameCheck();
        }
        else {
            Restart();
        }
        
    }
    document.addEventListener("keypress", function (e) {
        if (e.which == 13 || e.which == 32) {
            gameCheck();
        }
    }, true);



    document.onkeyup = function (e) {
        if (e.which != 8) {

            if (guess.value.length > 1) {
                openModal();
                msgSubject.innerHTML = "Error";
                msgContent.style.color = "red";
                msgTitle.style.background = "red";
                msgContent.innerHTML = "One digit please";
                msgContent.style.textAlign="center";
                guess.value = null;
            }
            else if (isNaN(guess.value)) {
                openModal();
                msgSubject.innerHTML = "Error";
                msgContent.style.color = "red";
                msgTitle.style.background = "red";
                msgContent.innerHTML = "Number Please";
                msgContent.style.textAlign="center";
                guess.value = null;
            }
            else {

            }

        }

    }









    function gameCheck() {

        if (guess.value.length !== 0) {
            if (!isNaN(guess.value)) {

                if (guess.value > 0 && guess.value < 10) {

                        if(count<4){
                        count++;
                    var result = guess.value - num;
                    var Result = Math.abs(result);


                    if (Result == 0) {
                        openModal();
                        msgSubject.innerHTML = "Congratulations";
                        msgContent.innerHTML = "You have Won";
                        msgContent.style.color = "seagreen";
                        msgTitle.style.background = "seagreen";
                        msgContent.style.textAlign="center";
                        guess.disabled=true;
                        go.value="Restart";
                        go.id="Restart";
                    }

                    if (Result == 1) {
                        if (result < 0) {
                            s_msg.innerHTML = "Slightly Below";
                            openShort();
                        }
                        else {
                            s_msg.innerHTML = "Slightly Above";
                            openShort();
                        }//result > 0
                    }//Result ==1

                    if (Result < 4 && Result > 1) {
                        s_msg.innerHTML = "Almost there";
                        openShort();
                    }

                    if (Result > 6) {
                        s_msg.innerHTML = "Too Far";
                        openShort();
                    }
                    if (Result >= 4 && Result < 7) {
                        s_msg.innerHTML = "Far";
                        openShort();
                    }

                    }//game is not over
                    else{
                        msgSubject.innerHTML="Not Lucky";
                        msgContent.innerHTML="You have tried 5 times";
                        msgContent.style.textAlign="center";
                        
                        GameOver();
                    }
                }// 0 < guess <10
                else {
                    openModal();
                    msgContent.innerHTML = "Please, Lessthan 10 and Greaterthan 0!";
                    msgSubject.innerHTML = "Error";
                    msgContent.style.color = "red";
                    msgTitle.style.background = "red";
                    msgContent.style.textAlign="center";
                }
            }//guess is number
            else {
                openModal();
                msgContent.style.color = "red";
                msgTitle.style.background = "red";
                msgSubject.innerHTML = "Error";
                msgContent.innerHTML = "Only Numbers Please!";
                msgContent.style.textAlign="center";
            }

        }//guess length not zero
        else {
            openModal();
            msgSubject.innerHTML = "Missing";
            msgContent.style.color = "red";
            msgTitle.style.background = "red";
            msgContent.innerHTML = "Please Enter a number !";
            msgContent.style.textAlign="center";
        }
        guess.value = null;

    }//function closed



function GameOver(){
    openModal();
    guess.disabled=true;
    go.value="Restart";
    go.id="Restart";

}

function Restart(){
    guess.disabled=false;
    generateRand();
    go.id="go";
    go.value="Go";
    count=0;
}






    /*-----------------Functions------------------*/



    document.onclick = function (e) { if (id.indexOf(e.target.id) == (-1)) closeModal(); }



    function openModal() {

        msg.classList.add("msg-active");
    }

    function closeModal() {
        msg.classList.remove("msg-active");
    }



    function openShort() {
        s_msg.classList.add("show")
        setTimeout(closeShort, 2000);

    }

    function closeShort() {
        s_msg.classList.remove("show");
    }





}