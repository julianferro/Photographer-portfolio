$("a").on("click",function(){
   if(this.hash){
      //console.log($(this).attr('href'));
      $("html body").animate({"scrollTop":$($(this).attr('href')).offset().top},1400);
      return false;
         }
});