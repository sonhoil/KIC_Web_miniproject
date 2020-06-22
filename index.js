var login = document.querySelector(".login");
var register = document.querySelector(".register");
var language = document.querySelector(".language");
var modal_back = document.querySelector(".modal_back");
var modal_content = document.querySelector(".modal_content");
var modal_content2 = document.querySelector(".modal_content2");
var headSlider = document.querySelector(".s_header");
var sector_Left = document.querySelector(".sector_Left");
var sector_Right = document.querySelector(".sector_Right");
var sectorbox1 = document.querySelector(".s_infobox1");
var sectorbox2 = document.querySelector(".s_infobox2");
var sectorbox3 = document.querySelector(".s_infobox3");

//배경 이미지 슬라이드
var imgArray= []
for(let h = 0; h<6; h++){
    imgArray[h] = `url(main_images/bg0${h}.jpg)`
}

var imgNum=0
function slider(){
    if(imgNum > imgArray.length-1){
        imgNum = 0;
    }
    headSlider.style.transition="2s"
    headSlider.style.backgroundImage=imgArray[imgNum];
    imgNum = imgNum + 1 
    setTimeout(slider,5000); 
}
slider()

// 로그인, 회원가입 모달 토글기능
let i = 0;
function loginHandler(){
    if(i === 0){
        modal_back.style.visibility ="visible"
        modal_content.style.visibility ="visible"
        modal_back.addEventListener("click",loginHandler)
        i = 1;
        j = 1;
    }else{
        modal_back.style.visibility ="hidden"
        modal_content.style.visibility ="hidden"
        modal_back.removeEventListener("click",loginHandler)
        i = 0; 
        j = 0; 
    }
}

let j = 0;
function registerHandler(){
    if(j === 0){
        modal_back.style.visibility ="visible"
        modal_content2.style.visibility ="visible"
        modal_back.addEventListener("click",registerHandler)
        i = 1;
        j = 1;
    }else{
        modal_back.style.visibility ="hidden"
        modal_content2.style.visibility ="hidden"
        modal_back.removeEventListener("click",registerHandler)
        j = 0; 
        i = 0; 
    }
}

//본문 수동 슬라이드 
var sector_imgArray=[]
for(let k = 0; k<7; k++){
    sector_imgArray[k] = `url(sector_images/img0${k}.jpg)`
}

function sector_sliderLeft(){
    sector_sliderHandler(-1)
}
function sector_sliderRight(){
    sector_sliderHandler(1)
}
var imgindex1 = 0;
var imgindex2 = 1;
var imgindex3 = 2;
function sector_sliderHandler(index){
    imgindex1= imgindex1 + index
    imgindex2= imgindex2 + index
    imgindex3= imgindex3 + index
    console.log(imgindex1)
    if(imgindex1 > 6){
        imgindex1 = 0
    }
    if(imgindex1 === -1){
        sector_Left.style.visibility = "hidden"
        
        imgindex1 = 6
    }else{
        console.log(imgindex1)
        sector_Left.style.visibility = "visible"
    }
    if(imgindex3 === 6  ){
        sector_Right.style.visibility = "hidden"
    }else{
        sector_Right.style.visibility = "visible"
    }
    console.log(imgindex1)
    sectorbox1.style.backgroundImage=sector_imgArray[imgindex1];
    sectorbox2.style.backgroundImage=sector_imgArray[imgindex2];
    sectorbox3.style.backgroundImage=sector_imgArray[imgindex3];
}

// 로그인, 회원가입 모달창 이동
function modalmove(){
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    modal_back.style.top = `${scrollPosition}px`
    modal_content.style.top = `${scrollPosition+190}px`
    modal_content2.style.top = `${scrollPosition+190}px`
}

window.addEventListener("scroll", modalmove);
login.addEventListener("click", loginHandler);
register.addEventListener("click", registerHandler)
sector_Left.addEventListener("click",sector_sliderLeft)
sector_Right.addEventListener("click",sector_sliderRight)

//번역기능
var loginbutton = document.querySelector(".loginbutton")
var registerbutton = document.querySelector(".registerbutton")
var subtitle = document.querySelector(".subtitle")
var navi1 = document.querySelector(".navi_1");
var navi2 = document.querySelector(".navi_2");
var navi3 = document.querySelector(".navi_3");
var navi4 = document.querySelector(".navi_4");
var context_title = document.querySelector(".context_title")
var context = document.querySelector(".context")
var footer_title1 = document.querySelector(".footer_title1")
var footer_title2 = document.querySelector(".footer_title2")
var footer_title3 = document.querySelector(".footer_title3")
var footer_title4 = document.querySelector(".footer_title4")
var footer1 = document.querySelector(".footer1")
var footer2 = document.querySelector(".footer2")
var footer3 = document.querySelector(".footer3")
var footer4 = document.querySelector(".footer4")
var footer5 = document.querySelector(".footer5")
var footer_address = document.querySelector(".footer_address")
var slide = document.querySelector(".slide_container")
var loading = document.querySelector(".LoadingText");

var languageState = 0
function languageHandler(){
    if(languageState === 0){
        loading.style.visibility = "visible"
        slide.style.width = "100%"
        
        setTimeout(function() {
        loginbutton.innerHTML = "로그인"
        registerbutton.innerHTML = "회원가입"
        subtitle.innerHTML ="-환경 보전 단체-"
        navi1.innerHTML = "소  개"
        navi2.innerHTML = "지  원"
        navi3.innerHTML = "활동사진"
        navi4.innerHTML = "건의사항"
        login.innerHTML = "로그인"
        register.innerHTML = "회원가입"
        language.innerHTML = "English"
        context_sliderHandler(0)
     //   context_title.innerHTML ="E.P.G에 오신걸 환영합니다! "
       // context.innerHTML = "우리는 환경 보전 단체입니다.<br>우리와 함께 활동할 분들을 찾습니다.<br>함께하고 싶다면<br>메일을 보내주세요! - EPG000@gmail.com<br><p>우리는 항상 당신을 기다립니다!</p>"
        footer_title1.innerHTML = "사이트맵"
        footer_title2.innerHTML = "단체장"
        footer_title3.innerHTML = "후원계좌"
        footer_title4.innerHTML = "방문주소"
        footer1.innerHTML = "메인"
        footer2.innerHTML = "소  개"
        footer3.innerHTML = "지  원"
        footer4.innerHTML = "활동사진"
        footer5.innerHTML = "건의사항"
        footer_address.innerHTML = "대한민국 서울시 <br>강남구 376-23<br> E.P.G 코퍼레이션"
          }, 1000);
        languageState = 1
        
        setTimeout(function() {
            slide.style.width = "0%"
            loading.style.visibility = "hidden"
          }, 1100);
    }else{
        loading.style.visibility = "visible"
        slide.style.width = "100%"
        setTimeout(function() {
            loginbutton.innerHTML = "Login"
            registerbutton.innerHTML = "Register"
            subtitle.innerHTML ="-Environmental protection groups-"
            navi1.innerHTML = "Introduce"
            navi2.innerHTML = "Apply"
            navi3.innerHTML = "Photos"
            navi4.innerHTML = "Q&A"
            login.innerHTML = "Login"
            register.innerHTML = "Register"
            language.innerHTML = "한국어"
            context_sliderHandler(0)
           // context_title.innerHTML ="Welcome to E.P.G!"
          //  context.innerHTML = "We are Protect Environmental Group<br>We find people who working with our<br>If you want join our group, <br>please send email - EPG000@gmail.com<br><p>We wait your contact!</p>"
            footer_title1.innerHTML = "Site Map"
            footer_title2.innerHTML = "Group leader"
            footer_title3.innerHTML = "Sponsored Account"
            footer_title4.innerHTML = "Visit"
            footer1.innerHTML = "Main"
            footer2.innerHTML = "Introduce"
            footer3.innerHTML = "Apply"
            footer4.innerHTML = "Photos"
            footer5.innerHTML = "Q&A"
            footer_address.innerHTML = "E.P.G Co. <br>Gangnam 376-23<br> Seoul,Republic of Korea"
          }, 1000);
        languageState = 0;
        setTimeout(function() {
            loading.style.visibility = "hidden"
            slide.style.width = "0%"
          }, 1100);
    }

}

language.addEventListener("click", languageHandler)


//context slider 구현

var list1 = document.querySelector(".list1")
var list2 = document.querySelector(".list2")
var list3 = document.querySelector(".list3")
var contextLeft = document.querySelector(".left");
var contextRight = document.querySelector(".right");


function context_sliderLeft(){
    context_sliderHandler(-1)
}
function context_sliderRight(){
    context_sliderHandler(1)
}
var context_number = 0;
function context_sliderHandler(index){
    context_number= context_number + index
    if(context_number > 2){
        context_number = 0
    }
    if(context_number === 0){
        contextLeft.style.visibility = "hidden"
        list1.style.background = "black"
        if(languageState === 0){
            context_title.innerHTML ="Welcome to E.P.G!"
            context.innerHTML = "We are Protect Environmental Group<br>We find people who working with our<br>If you want join our group, <br>please send email - EPG000@gmail.com<br><p>We wait your contact!</p>"
        }else{
            context_title.innerHTML ="E.P.G에 오신걸 환영합니다! "
            context.innerHTML = "우리는 환경 보전 단체입니다.<br>우리와 함께 활동할 분들을 찾습니다.<br>함께하고 싶다면<br>메일을 보내주세요! - EPG000@gmail.com<br><p>우리는 항상 당신을 기다립니다!</p>"
        }
    }else{
        contextLeft.style.visibility = "visible"
        list1.style.background = "#ccc"
    }
    if(context_number === 1){
        list2.style.background = "black"
        if(languageState === 0){
            context_title.innerHTML ="second"
            context.innerHTML = "<br>this is<br>second<br><p>page</p>"
        }else{
            context_title.innerHTML ="두번째 페이지"
            context.innerHTML = "<br>여기는<br>두번째<br>페이지<br><p>입니다.</p>"
        }
    }else{
        list2.style.background = "#ccc"
    }
    if(context_number === 2  ){
        contextRight.style.visibility = "hidden"
        list3.style.background = "black"
        if(languageState === 0){
            context_title.innerHTML ="third!"
            context.innerHTML = "<br>this is<br>third<br><p>page</p>"
        }else{
            context_title.innerHTML ="세번째 페이지 "
            context.innerHTML = "<br>여기는<br>세번째<br>페이지<br><p>입니다.</p>"
        }
    }else{
        contextRight.style.visibility = "visible"
        list3.style.background = "#ccc"
    }
   
}


contextLeft.addEventListener("click",context_sliderLeft)
contextRight.addEventListener("click",context_sliderRight)

//------------------------------------------
var chatlist = document.querySelector(".chatlist")
var chatIcon = document.querySelector(".chat");
var chatIconinner = document.querySelector(".chat_inner")
var chatbox = document.querySelector(".chatbox")
var form = document.querySelector('.chatform')

function sendchat(){
var chattext = document.querySelector(".chattext")
console.log(chattext.value)
if(chattext.value){
    var node = document.createElement("LI"); 
    node.classList.add("client")               
    var textnode = document.createTextNode(`${chattext.value}`); 
    chattext.value = ""
    node.appendChild(textnode);
    chatlist.appendChild(node)
    var node = document.createElement("LI"); 
    node.classList.add("server") 
    if(languageState === 0){
        var textnode = document.createTextNode(`Sorry,This is not a consultation time.  Please send email 'EPG000@gmail.com'`); 
    }else{
        var textnode = document.createTextNode(`죄송합니다. 지금은 상담이 불가능하니 'EPG000@gmail.com' 이곳으로 메일을 남겨주세요.`); 
    }
    
    node.appendChild(textnode);
    chatlist.appendChild(node);

}else{
    chattext.value = ""
}
}
let chatvisible = 0
function showchatbox(){
    if(chatvisible === 0){
        chatbox.style.width= "20%"
        chatbox.style.height= "50%"
        chatvisible = 1
        chatIconinner.style.backgroundColor = "yellow"
        setTimeout(function() {
            form.style.visibility = "visible"
          }, 700);
        
    }else{
        form.style.visibility = "hidden"
        chatIconinner.style.backgroundColor = "rgba(100, 100, 100, 0.8)"
        chatbox.style.width= "0%"
        chatbox.style.height= "0%"
        chatvisible = 0
    }
    
}

chatIcon.addEventListener("click",showchatbox)