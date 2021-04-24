
//scroll down 될 때

var bodyScrollTop = 0; //초기화값

const gnbSlogan = document.getElementsByClassName('gnb_slogan')[0];
const gnbMenu = document.getElementsByClassName('gnb_menu')[0];

function navChange() {

   bodyScrollTop = window.pageYOffset; //값 갱신 

   if (bodyScrollTop > 100) {
                      //@ padding-top 이 130px 여서 ?? 

      // document.getElementsByClassName('gnb_slogan')[0].style.height = "0";
      gnbSlogan.style.height = "0";

   //scroll 내릴시 가운데 slogan 안 보임
  gnbSlogan.style.opacity = "0px"

   //scroll 내릴시 menu 탭 상단에 고정시키기 
   gnbMenu.style.marginTop = "0px"
   }

   //스크롤을 안했을때 
   else {
      gnbSlogan.style.height = "24px";
      gnbSlogan.style.opacity  = "1";
      gnbMenu.style.marginTop = "40px"
   }

}


//1. function만들기, 2. var 초기화값, 갱신값 입력 3. if절 삽입