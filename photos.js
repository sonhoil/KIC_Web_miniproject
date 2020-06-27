var up = document.querySelector(".fa-sort-asc");
var down = document.querySelector(".fa-sort-desc");

let k =1;

function handleUp(){
    move(-1)
}
function handleDown(){
    move(1)
}
function move(index){
    k = k + index
    if(k<1){
       k = 1
    }else if(i>6){
        k = 6
    }else{
        document.querySelector(`.bg0${k}`).scrollIntoView() 
    }
}


up.addEventListener("click", handleUp)
down.addEventListener("click", handleDown)
window.addEventListener("wheel", function(e){e.preventDefault();}, {passive: false} );

//===============================================================
var login = document.querySelector(".login");
var register = document.querySelector(".register");
var modal_back = document.querySelector(".modal_back");
var modal_content = document.querySelector(".modal_content");
var modal_content2 = document.querySelector(".modal_content2");

//------ 로그인, 회원가입 모달 토글기능------------------------

var isLogin = 0 // 로그인 여부 확인

//------------------------회원가입----------------------------------
var regId = document.querySelector(".reg_id")
var regPwd = document.querySelector(".reg_pwd")
var regPwd2 = document.querySelector(".reg_pwd2")
var regName = document.querySelector(".reg_name")

var client_list = []
let j = 0;
function registerID(){
    console.log(regId.value)
    var reg_ID = regId.value
    if(client_list.length === 0){ // 첫 회원가입 경우
        if((regId.value.length>5)&&(regPwd.value.length > 8)&&(regPwd.value == regPwd2.value)&&(regName.value)){
           //회원정보에 추가
            client_list.push({ID:regId.value, Pwd:regPwd.value, Name:regName.value})
           // 로그인 활성화
            isLogin = 1;
            _isLogin(regName.value)
            registerHandler()// 창 닫고 입력 초기화
        }else{
            if(regId.value.length <5){
                regId.value= ""
                regId.classList.add('placeHolder'); // 글씨 색 바꾸기
                regId.placeholder = "ID must over 5 character"
            }
            if(regPwd.value.length < 8){
                regPwd.value= ""
                regPwd.classList.add('placeHolder');
                regPwd.placeholder = "Password must over 8 character"
            }else if(regPwd.value = " "){
                regPwd.value= ""
                regPwd.classList.add('placeHolder');
                regPwd.placeholder = "Password is blank"
            }
            if(regPwd.value !== regPwd2.value){
                regPwd2.value= ""
                regPwd2.classList.add('placeHolder');
                regPwd2.placeholder = "Password is not same"
            }else if(regPwd.value = ""){
                regPwd2.value= ""
                regPwd2.classList.add('placeHolder');
                regPwd2.placeholder = "Password is blank"
            }
            if(!regName.value){
                regName.classList.add('placeHolder');
                regName.placeholder = "name is blank"
            }
        }
    }
        client_list.map((item)=>{
            if(item.ID === reg_ID){// 전체 회원정보 아이디와 비교
                regId.value= ""
                regId.classList.add('placeHolder'); // 글씨 색 바꾸기
                regId.placeholder = "same ID exits"
            }else if((regId.value.length>5)&&(regPwd.value.length > 8)&&(regPwd.value == regPwd2.value)&&(regName.value)){
                client_list.push({ID:regId.value, Pwd:regPwd.value, Name:regName.value})
                isLogin = 1;
                _isLogin(regName.value)
                registerHandler()// 창 닫고 입력 초기화
            }else{
                if(regId.value.length <5){
                    regId.value= ""
                    regId.classList.add('placeHolder'); // 글씨 색 바꾸기
                    regId.placeholder = "ID must over 5 character"
                }
                if(regPwd.value.length < 8){
                    regPwd.value= ""
                    regPwd.classList.add('placeHolder');
                    regPwd.placeholder = "Password must over 8 character"
                }else if(regPwd.value = " "){
                    regPwd.value= ""
                    regPwd.classList.add('placeHolder');
                    regPwd.placeholder = "Password is blank"
                }
                if(regPwd.value !== regPwd2.value){
                    regPwd2.value= ""
                    regPwd2.classList.add('placeHolder');
                    regPwd2.placeholder = "Password is not same"
                }else if(regPwd.value = ""){
                    regPwd2.value= ""
                    regPwd2.classList.add('placeHolder');
                    regPwd2.placeholder = "Password is blank"
                }
                if(!regName.value){
                    regName.classList.add('placeHolder');
                    regName.placeholder = "name is blank"
                }
            }
        })
}


// 회원가입창 

function registerHandler(){
    if(j === 0){
        modal_back.style.visibility ="visible"
        modal_content2.style.visibility ="visible"
        modal_back.addEventListener("click",registerHandler)

        // 창 닫으면 입력 초기화
        regId.value= ""
        regId.classList.remove('placeHolder');
        regId.placeholder = "ID"
        regPwd.value= ""
        regPwd.classList.remove('placeHolder');
        regPwd.placeholder = "Password"
        regPwd2.value= ""
        regPwd2.classList.remove('placeHolder');
        regPwd2.placeholder = "Password"
        regName.value= ""
        regName.classList.remove('placeHolder');
        regName.placeholder = "Name"
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
//로그인창
let i = 0;
function loginHandler(){
    if(i === 0){
        modal_back.style.visibility ="visible"
        modal_content.style.visibility ="visible"
        modal_back.addEventListener("click",loginHandler)

        // 로그인창 닫으면 placeholder 원래대로 돌려놓기
        loginID.value= ""
        loginID.classList.remove('placeHolder');
        loginID.placeholder = "ID"
        loginPwd.value= ""
        loginPwd.classList.remove('placeHolder');
        loginPwd.placeholder = "Password"

 
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

//로그인 오류 안내-----------------------------
var loginID = document.querySelector(".login_id")
var loginPwd = document.querySelector(".login_pwd")
function handleLogin(){
 var login_ID = loginID.value
    if(client_list.length <1){
        loginID.value= ""
        loginID.classList.add('placeHolder'); // 글씨 색 바꾸기
        loginID.placeholder = "ID is Incorrect"
        loginPwd.value= ""
        loginPwd.classList.add('placeHolder');
        loginPwd.placeholder = "Password is Incorrect"
    }else{
        client_list.map((item) => {
            if(item.ID === login_ID ){
                if(item.Pwd === loginPwd.value){
                    isLogin = 1
                    _isLogin(item.Name)
                    loginHandler()
                }else{
                    loginPwd.value= ""
                    loginPwd.classList.add('placeHolder');
                    loginPwd.placeholder = "Password is Incorrect"
                }
            }else{
                console.log(item, loginID.value )
                loginID.value= ""
                loginID.classList.add('placeHolder'); // 글씨 색 바꾸기
                loginID.placeholder = "ID is Incorrect"
            }
    })
        // map 이용해서 접근
    }
   
}
//----------로그인------------------
var u_name = document.querySelector(".u_Name")
var logout = document.querySelector(".logout")

logout.addEventListener("click", logoutHandler)

function logoutHandler(){
    isLogin = 0
    _isLogin("")
}

function _isLogin(ID){
    //로그인
    if(isLogin == 1){
        login.style.display ="none";
        register.style.display ="none";
        u_name.style.display = "inline"
        logout.style.display = "inline"
        u_name.innerHTML = `${ID}`
    }else{
        //로그아웃
        login.style.display ="inline";
        register.style.display ="inline";
        u_name.style.display = "none"
        logout.style.display = "none"
    }
    
}


//-------------- 로그인, 회원가입 모달창 이동-----------
function modalmove(){
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    modal_back.style.top = `${scrollPosition}px`
    modal_content.style.top = `${scrollPosition+190}px`
    modal_content2.style.top = `${scrollPosition+270}px`
}

window.addEventListener("scroll", modalmove);
login.addEventListener("click", loginHandler);
register.addEventListener("click", registerHandler)




//----------------------채팅기능 구현---------------------------------
var chatlist = document.querySelector(".chatlist")
var chatIcon = document.querySelector(".chat");
var chatIconinner = document.querySelector(".chat_inner")
var chatbox = document.querySelector(".chatbox")
var form = document.querySelector('.chatform')

function sendchat(){
var chattext = document.querySelector(".chattext")
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



//============================================
var loginbutton = document.querySelector(".loginbutton")
var registerbutton = document.querySelector(".registerbutton")
var subtitle = document.querySelector(".subtitle")
var navi1 = document.querySelector(".navi_1");
var navi2 = document.querySelector(".navi_2");
var navi3 = document.querySelector(".navi_3");
var navi4 = document.querySelector(".navi_4");
var language = document.querySelector(".language");

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
        logout.innerHTML = "로그아웃"
        register.innerHTML = "회원가입"
        language.innerHTML = "English"
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
            logout.innerHTML = "Logout"
            register.innerHTML = "Register"
            language.innerHTML = "한국어"
            
          }, 1000);
        languageState = 0;
        setTimeout(function() {
            loading.style.visibility = "hidden"
            slide.style.width = "0%"
          }, 1100);
    }

}

language.addEventListener("click", languageHandler)