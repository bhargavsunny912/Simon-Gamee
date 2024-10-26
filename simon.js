let gameseq=[];
    let userseq=[];
    let level=0;
    let start=false;

    let colors=["blue","violet","brown","cream"];
    let Box1=document.querySelector(".box1");
    let Box2=document.querySelector(".box2");
    let Box3=document.querySelector(".box3");
    let Box4=document.querySelector(".box4");
    let H2=document.querySelector("h2");
    let High=document.querySelector("#high");
    let Current=document.querySelector("#current");


    document.addEventListener("keypress",function(e){
        if(start == false)
        {
            start = true;
            levelup();
        }
        
    });

    function levelup(){
        userseq=[];
        level++;
        H2.innerText=`Level ${level}`;

        let randomnumber=Math.floor(Math.random()*3);
        let randomcolor=colors[randomnumber];
        let randombox=document.querySelector(`#${randomcolor}`);
        flash(randombox);

        gameseq.push(randomcolor);
    }

    function flash(btns){
        btns.classList.add("flash");
        setTimeout(function(){
            btns.classList.remove("flash");
        },250);

    }

    let bts=document.querySelectorAll(".b");
    for(bt of bts)
    {
        bt.addEventListener("click",buttonpress);
    }
    function buttonpress(){
        let btn=this;
        flash(btn);

        userseq.push(this.id);
        checkseq(userseq.length-1);
    }

    function checkseq(index){
        if(gameseq[index] == userseq[index]){
            if(gameseq.length == userseq.length){
                setTimeout(levelup,500);
            }
        }
        else{
            H2.innerHTML=`Game over ,Your Score :<b>${level-1}<b>,<br>Press any key to start new game`;
            document.body.style.backgroundColor="red";
            setTimeout(function(){
                document.body.style.backgroundColor="aliceblue";    
            },500);
      
            reset();
        }
    }

    function reset(){
        start=false;
        gameseq=[];
        userseq=[];
        level=0;
    }