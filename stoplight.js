$(".bulb").click(function(){
  $(this).addClass("active").siblings().removeClass("active");
  if($(this).attr("id") === "yellow"){
    setTimeout(function(){
      $("#red").addClass("active").siblings().removeClass("active");
    }, 2000)
  }
})
