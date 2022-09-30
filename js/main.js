let widthAccord = $(".accord").outerWidth();
 $('.open').css("left",'0px')
$('.open i').click(function(){
    if($('.box-contant').css("left") == "0px"){
       $(".box-contant").animate({"left":-widthAccord},1700);
       $(".open").animate({"left":"0px"},1700);
    }else{
        $(".box-contant").animate({"left":0},1700);
       $(".open").animate({"left":widthAccord},1700);
    }
    $(".icon i").click(function(){
        $(".box-contant").animate({"left":-widthAccord},1700);
       $(".open").animate({"left":"0px"},1700);

    })
})



//------ siblings accordion-----------//
$('.singer h2').click(function(){
 $(this).siblings().slideToggle(500);
})
  let textareaInput = document.querySelector('textarea');
  // let numCount = document.getElementById('nums');
  textareaInput.oninput= function(){
      var maxlength = $(this).attr('maxlength');
      let  temp = this.maxLength -this.value.length;
      
      document.getElementById("nums").innerHTML =temp;
}
 //-------//
 var interv = setInterval(function(){
    let days= new Date();
    document.getElementById("count1").innerHTML= days.getDay()
    document.getElementById("count2").innerHTML= days.getHours()
    document.getElementById("count3").innerHTML= days.getMinutes()
    document.getElementById("count4").innerHTML= days.getSeconds()
 });
 ////////
 $(".up-icon").fadeOut();
 let detailsOffset = $(".details ").offset().top;
 $(window).scroll(function(){
   if ($(window).scrollTop() >= detailsOffset) {
    $(".up-icon").fadeIn(2000);
   }
   else{
    $(".up-icon").fadeOut(2000);

   }
 });
 $(".up-icon").click(function(){
  $("body,html").animate({scrollTop:0},2000)
 });
 /////////
 $(".nav-link").click(function(){
  let currentHref = $(this).attr('href');
  let currentSet = $(currentHref).offset().top;
  $("body,html").animate({scrollTop:currentSet},2000)
 })
 ///// rejax
 let nameInput =document.getElementById('names');
 let emailInput =document.getElementById('Email');
  nameInput.onkeyup = function(){
  let rejaxName =/^[a-z A-Z]{2,15}$/;
  let testName= rejaxName.test(nameInput.value);
  if (testName == true) {
    nameInput.classList.add('is-valid');
    nameInput.classList.remove('is-invalid');
  }else{
    nameInput.classList.add('is-invalid');
    nameInput.classList.remove('is-valid');

  }
 }
 emailInput.onkeyup = function(){
  let rejaxEmail =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let testEmail= rejaxEmail.test(emailInput.value);
  if (testEmail == true) {
    emailInput.classList.add('is-valid');
    emailInput.classList.remove('is-invalid');
  }else{
    emailInput.classList.add('is-invalid');
    emailInput.classList.remove('is-valid');

  }
 }