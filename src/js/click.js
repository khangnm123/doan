// let navigation =document.getElementById('navigation')
// // document.addEventListener('scroll',(event)=>{
// //     if(window.scrollY >  500){
// //         navigation.classList('tofixed');
// //     }else{
// //         navigation.remove('tofixed');
// //     }
// // })
$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop()){
            $('nav').addClass('sticky');
        }
        else{
            $('nav').removeClass('sticky');
        }

    });
   });
   var checkbox_toggle = document.getElementById('light')
   checkbox_toggle.addEventListener('change' , function(){
       //thêm class dark
      document.body.classList.toggle('dark')//toggle kiểm trả thử có class không 
       let h2 =document.querySelector('h2.text')[0]
       console.log(h2)
       h2.style.color ='white';
        
   }); 
   
    // let coll = document.getElementsByClassName("collapsible");
    // let i;
    
    // for (i = 0; i < coll.length; i++) {
    //   coll[i].addEventListener("click", function () {
    //     this.classList.toggle("active");
    //     let content = this.nextElementSibling;
    //     if (content.style.maxHeight) {
    //       content.style.maxHeight = null;
    //     } else {
    //       content.style.maxHeight = content.scrollHeight + "px";
    //     }
    //   });
    // }