$(".recruitter_form").hide();
$(".student_signup").css("background", "#000000");

$(".student_signup").click(function(){
  $(".recruitter_form").hide();
  $(".student_form").show();
  $(".recruitter_signup").css("background", "#57b846");
  $(".student_signup").css("background", "#000000");
});

$(".recruitter_signup").click(function(){
  $(".recruitter_form").show();
  $(".student_form").hide();
  $(".student_signup").css("background", "#57b846");
  $(".recruitter_signup").css("background", "#000000");
});

$(".btn").click(function(){
  $(".input").val("");
});
