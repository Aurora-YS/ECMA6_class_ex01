$(document).ready(function(){


    //////////// ex_01 ////////////
    const ex_01 = ["img_01.jpg", "img_02.jpg", "img_03.jpg", "img_04.jpg"];

    ex_01.forEach((v, i) => {
        $("#ex_01 .frame").append(`<div class="box" style="background-image: url(./img/${v});">
            <div class="dark">
                <div class="cont">
                    <h4>동행${i+1}</h4>
                    <a href="#">상세 보기</a>
                </div>
            </div>
        </div>`);
    });


    //////////// ex_02 ////////////
    const category_arr = ["All", "마카롱", "뜨개질", "스케치", "사진 찍기", "영어교육", "작곡", "여행", "필라테스"];
    const ex_02 = [
        {img: "class_01.png", category: "마카롱"},
        {img: "class_01_01.jpg", category: "마카롱"},
        {img: "class_01_02.jpg", category: "마카롱"},
        {img: "class_01_03.jpg", category: "마카롱"},
        {img: "class_02.png", category: "뜨개질"},
        {img: "class_02_01.jpg", category: "뜨개질"},
        {img: "class_02_02.jpg", category: "뜨개질"},
        {img: "class_02_03.jpg", category: "뜨개질"},
        {img: "class_03.png", category: "스케치"},
        {img: "class_03_01.jpg", category: "스케치"},
        {img: "class_03_02.jpg", category: "스케치"},
        {img: "class_03_03.jpg", category: "스케치"},
        {img: "class_04.png", category: "사진 찍기"},
        {img: "class_04_01.jpg", category: "사진 찍기"},
        {img: "class_04_02.jpg", category: "사진 찍기"},
        {img: "class_04_03.jpg", category: "사진 찍기"},
        {img: "class_05_01.jpg", category: "영어교육"},
        {img: "class_05_02.jpg", category: "영어교육"},
        {img: "class_05_03.jpg", category: "영어교육"},
        {img: "class_06_01.jpg", category: "작곡"},
        {img: "class_06_02.jpg", category: "작곡"},
        {img: "class_06_03.jpg", category: "작곡"},
        {img: "class_07_01.jpg", category: "여행"},
        {img: "class_07_02.jpg", category: "여행"},
        {img: "class_07_03.jpg", category: "여행"},
        {img: "class_08_01.jpg", category: "필라테스"},
        {img: "class_08_02.jpg", category: "필라테스"},
        {img: "class_08_03.jpg", category: "필라테스"},
    ];

    
    category_arr.forEach(v => {
        $("#ex_02 .sel_btn").append(`<li><a href="">${v}</a></li>`);
    });
    $("#ex_02 .sel_btn li:first").addClass("active");
    
    ex_02.forEach(v => {
        $("#ex_02 .cont").append(`<div class="box" style="background-image: url(./img/${v.img});"></div>`);
    });
    $("#ex_02 .cont .box").show().addClass("active");
    

    $("#ex_02 .sel_btn li").click(function(){
        let cur_category = $(this).text();
        $("#ex_02 .sel_btn li").removeClass("active");
        $(this).addClass("active");

        $("#ex_02 .cont .box").hide().removeClass("active");

        ex_02.filter((v, i) => {
            if(cur_category == v.category){
                $("#ex_02 .cont .box").eq(i).show().addClass("active");
            }else if(cur_category == category_arr[0]){
                $("#ex_02 .cont .box").show().addClass("active");
            }
            return true;
        });

        return false;
    });


    //////////// ex_03 ////////////
    const ex_03 = [
        {btn_img: "ana.png", img: "ana_view.png", name: "아나", explan: "새로운 세대를 지키기 위해 수년간의 은둔 생활에서 돌아온 베테랑 오버워치 요원"},
        {btn_img: "ashe.png", img: "ashe_view.png", name: "애쉬", explan: "미국 남서부를 뒤흔들고 있는 악명높은 데드락 갱단의 두목"},
        {btn_img: "w_ball.png", img: "w_ball_view.png", name: "레킹볼", explan: "구르는 로봇을 조종하는 달 출신의 유전자 조작 햄스터"},
        {btn_img: "baptiste.png", img: "baptiste_view.png", name: "바티스트", explan: "실험적인 치유 장비들로 무장한 최정예 전투 의무병"},
        {btn_img: "bastion.png", img: "bastion_view.png", name: "바스티온", explan: "자연에 매료되어 전 세계를 모험하지만 인간을 경계하는 변신 로봇"},
        {btn_img: "brigitte.png", img: "brigitte_view.png", name: "브리기테", explan: "도움이 필요한 자들을 위해 모험 떠난 용사"},
    ];

    ex_03.forEach(v => {
        $("#ex_03 .sel_btn").append(`<li><a href="" style="background-image: url(./img/ex_03/${v.btn_img});"></a></li>`);
    });

    $("#ex_03 .sel_btn li").click(function(){
        let idx = $(this).index();
        $("#ex_03 .input_line input").val("");
        $("#ex_03 .popup h3 span").text("");

        $("#ex_03 .cont").show();
        $("#ex_03 .box img").attr("src", "./img/ex_03/"+ex_03[idx].img);
        $("#ex_03 .box h4").text(ex_03[idx].name);
        $("#ex_03 .box p").text(ex_03[idx].explan);

        return false;
    });

    $("#ex_03 .input_line button").click(function(){
        const nickname = $(this).siblings("input").val();
        
        class inputNickname{
            constructor(inputVal){
                this.inputName = inputVal;
            }
            activeAll(){
                $("#ex_03 .dark").addClass("active");
                $("#ex_03 .popup").addClass("active");
                $("body").addClass("active");
                $("#ex_03 .popup h3 span").text(nickname);
            }
        }
        const char_name = new inputNickname(nickname);
        char_name.activeAll();
        console.log(char_name);
    });
    
    $("#ex_03 .dark, #ex_03 .popup .close").click(function(){
        $("#ex_03 .dark").removeClass("active");
        $("#ex_03 .popup").removeClass("active");
        $("body").removeClass("active");
    });

});