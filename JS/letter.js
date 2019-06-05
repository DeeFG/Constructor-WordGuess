function Letter(dash,guessed){
    this.dash = "_";
    this.guessed = true ;
    this.charCheck = function checkChar(){
       // if(this.guessed=== true){
           console.log("Push letter");
      //  }


    };


};


let a = new Letter("_",true);

a.charCheck();