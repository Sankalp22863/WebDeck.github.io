function changeTab(ref){
try {
if(ref.getAttribute("data-tab") == "student_signup"){
  document.getElementById("form-body").classList.remove('active');
  ref.parentNode.classList.remove('student_signup');
} else {
  document.getElementById("form-body").classList.add('active');
  ref.parentNode.classList.add('recruitter_signup');
}
} catch(msg){
  console.log(msg);
}
}
