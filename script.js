var query = document.getElementsByClassName("query");
var arrow = document.querySelectorAll(".arrow");



for(var i=0; i<query.length; i++){

    query[i].addEventListener("click" , function(){
      var answer = this.lastElementChild;
      this.firstElementChild.classList.toggle("active");
      this.firstElementChild.nextElementSibling.classList.toggle("upArrow");
      if(answer.style.maxHeight){
        answer.style.maxHeight = null;
      }else{
        answer.style.maxHeight= answer.scrollHeight+ "px";
      }


    });
}
