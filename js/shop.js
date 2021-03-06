//total count
var totalSlides ;
//slide count
var slideCount = 0 ;
//current position
var curr_position ;
var joinIdCheck = 0 ;
var starVal = "1";

$(document).ready(function(){

    //image length
    totalSlides = $("#slide").children("img").length ;
    curr_position  = $('#slide').children("img").eq(0);

    console.log(totalSlides);
    console.log(curr_position);

    // main slide
    setInterval(slideFade,5000) ;

    //카트 페이지 로딩시, 카트에 있는 상품 계산 역할
    checkedSum();


    area_select();


    var star = $("select[name='star']");

    star.change(function() {
      starVal = $('option:selected').val();
      console.log(typeof(starVal));
    });

});

// enter key 実行
function enterkey(name) {
        if (window.event.keyCode == 13 && name == "login" ) {
            loginCheck("a");
        }
        else if (window.event.keyCode == 13 && name == "search" ) {
             document.searchForm.submit();
        }
        else if (window.event.keyCode == 13 && name == "infoChange" ) {
             mypagePwCheck();
        }
}




//mypage
function userInfoChangePage(){
  var infoChange = "infoChange";
  var wrap = $("#wrap-mypage");
  wrap.empty();

  var text = "<h2>会員情報変更</h2>"
            +"<hr>"
              +"<div id='mypage-userinfo-check'>"
              +"<div>* 会員情報の保安をために、パスワードを入力してください。</div>"
              +"<label for=''>パスワード</label>"
              +"<input type='password' name='pw' value=''>"
              +"<button type='button' onclick='mypagePwCheck()'>確認</button>" ;

  wrap.append(text);
}

function mypagePwCheck(){
  var user_pw = $("input[name='pw']").val();
  var wrap = $("#wrap-mypage");
  wrap.empty();

  $.ajax({
    url : "mypageUserCheck",
    type : "post",
    data : {
      // ci_t : csrf_token,
      user_pw : user_pw
    },
    dataType : "json",
    async : false,
    success: function(data){
      if(data.length){
        var text = "<div id='mypage-userinfo'>"
        					+"<div>"
        							+"<label for='id'>ID</label>"
        							+"<span>"+data[0].user_id+"</span>"
        					+"</div>"
        					+"<br>"
        					+"<div>"
        							+"<label for='pw'>パスワード</label>"
        							+"<input type='password' name='pw'>"
        					+"</div>"
        					+"<br>"
        					+"<div>"
        							+"<label for='rpw'>確認のためもう一度入力</label>"
        							+"<input type='password' name='rpw' onkeyup='passwordCheck()'>"
        							+"<p></p>"
        					+"</div>"
        					+"<br>"
        					+"<div>"
        							+"<label for='email'>メールアドレス</label>"
        							+"<input type='text' name='email' value='"+data[0].email+"'>"
        					+"</div>"
        					+"<br>"
        					+"<div>"
        							+"<label for='name'>お名前</label>"
        							+"<input type='text' name='name' value='"+data[0].user_name+"'>"
        					+"</div>"
        					+"<br>"
        					+"<div>"
        							+"<label for='post'>郵便番号</label>"
        							+"<input type='text' name='post' value='"+data[0].postcode+"' >"
        					+"</div>"
        					+"<br>"
        					+"<div>"
        							+"<label for='area'>都道府県</label>"
                      +"<select name='area' area_code='"+data[0].area_code+"'>"
                        +"<option value='1'>愛知県</option>"
                        +"<option value='2'>青森県</option>"
                        +"<option value='3'>秋田県</option>"
                        +"<option value='4'>石川県</option>"
                        +"<option value='5'>茨城県</option>"
                        +"<option value='6'>岩手県</option>"
                        +"<option value='7'>愛媛県</option>"
                        +"<option value='8'>大分県</option>"
                        +"<option value='9'>大阪府</option>"
                        +"<option value='10'>岡山県</option>"
                        +"<option value='11'>香川県</option>"
                        +"<option value='12'>鹿児島県</option>"
                        +"<option value='13'>神奈川県</option>"
                        +"<option value='14'>岐阜県</option>"
                        +"<option value='15'>京都府</option>"
                        +"<option value='16'>熊本県</option>"
                        +"<option value='17'>群馬県</option>"
                        +"<option value='18'>高知県</option>"
                        +"<option value='19'>埼玉県</option>"
                        +"<option value='20'>佐賀県</option>"
                        +"<option value='21'>東京都</option>"
                        +"<option value='22'>徳島県</option>"
                        +"<option value='23'>栃木県</option>"
                        +"<option value='24'>鳥取県</option>"
                        +"<option value='25'>富山県</option>"
                        +"<option value='26'>長崎県</option>"
                        +"<option value='27'>長野県</option>"
                        +"<option value='28'>奈良県</option>"
                        +"<option value='29'>新潟県</option>"
                        +"<option value='30'>兵庫県</option>"
                        +"<option value='31'>広島県</option>"
                        +"<option value='32'>福井県</option>"
                        +"<option value='33'>福岡県</option>"
                        +"<option value='34'>福島県</option>"
                        +"<option value='35'>北海道</option>"
                        +"<option value='36'>三重県</option>"
                        +"<option value='37'>宮城県</option>"
                        +"<option value='38'>宮崎県</option>"
                        +"<option value='39'>山形県</option>"
                        +"<option value='40'>山口県</option>"
                        +"<option value='41'>山梨県</option>"
                        +"<option value='42'>和歌山県</option>"
                      +"</select>"
                      +"</div>"
                      +"<br>"
                      +"<div>"
                        +"<label for='city'>市区郡</label>"
                        +"<input type='text' name='city' value='"+data[0].city+"'>"
                      +"</div>"
                      +"<br>"
                      +"<div>"
                        +"<label>町村字番地</label>"
                        +"<div id='join-address'>"
                          +"<div>"
                            +"<div>町村字</div>"
                            +"<input type='text' name='addr1' id='buy-addr1' value='"+data[0].address1+"' >"
                          +"</div>"
                          +"<div>"
                            +"<div>番地</div>"
                            +"<input type='text' name='addr2' value='"+data[0].address2+"' >"
                          +"</div>"
                        +"</div>"
                      +"</div>"
                      +"<br>"
                      +"<div>"
                      +"<label for='addr3'>建物名（部屋番号）</label>"
                      +"<input type='text' name='addr3' value='"+data[0].address3+"' >"
                      +"</div>"
                      +"<br>"
                      +"<div>"
                      +"<label for='tel'>お電話番号</label>"
                      +"<input type='text' name='tel' value='"+data[0].hp+"' >"
                      +"</div>"
                      +"<br>"
                      +"<button type='button' onclick='userInfoChange()'>変更</button>"
        				+"</div>";

                wrap.append(text);
                area_select(data[0].area_code);

      }else{
        var text = "<h2>会員情報変更</h2>"
                  +"<hr>"
                    +"<div id='mypage-userinfo-check'>"
                    +"<div>* 会員情報の保安をために、パスワードを入力してください。</div>"
                    +"<label for=''>パスワード</label>"
                    +"<input type='password' name='pw' value=''>"
                    +"<button type='button' onclick='mypagePwCheck()'>確認</button>" ;

        wrap.append(text);
      }



    },
    error : function(request,status,error){
      console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);


    }
  });

}

function userInfoChange(){
  var id = $("input[name='id']");
  var pw = $("input[name='pw']");
  var rpw = $("input[name='rpw']");
  var email = $("input[name='email']");
  var name = $("input[name='name']");
  var post = $("input[name='post']");
  var area = $("select[name='area']");
  var city = $("input[name='city']");
  var addr1 = $("input[name='addr1']");
  var addr2 = $("input[name='addr2']");
  var addr3 = $("input[name='addr3']");
  var tel = $("input[name='tel']");

  console.log(area.val());

  area.change(function() {
    var r = $('option:selected').val();

    console.log(r);
})

  if(pw.val() == ""){
    alert("パスワード入力してください");
    pw.focus();
    return false;
  }else if(rpw.val() == ""){
    alert("確認のためもう一度入力してください");
    rpw.focus();
    return false;
  }else if(rpw.val() != pw.val()){
    console.log(rpw.val());
    console.log(pw.val());
    alert("確認のためもう一度入力してください");
    rpw.focus();
    return false;
  }else if(email.val() == ""){
    alert("メールアドレス入力してください");
    email.focus();
    return false;
  }else if(name.val() == ""){
    alert("お名前入力してください");
    name.focus();
    return false;
  }else if(post.val() == ""){
    alert("郵便番号入力してください");
    post.focus();
    return false;
  }else if(area.val() == ""){
    alert("都道府県入力してください");
    area.focus();
    return false;
  }else if(city.val() == ""){
    alert("市区郡入力してください");
    city.focus();
    return false;
  }else if(addr1.val() == ""){
    alert("町村字入力してください");
    addr1.focus();
    return false;
  }else if(addr2.val() == ""){
    alert("番地入力してください");
    addr2.focus();
    return false;
  }else if(tel.val() == ""){
    alert("お電話番号入力してください");
    tel.focus();
    return false;
  }


  $.ajax({
    url : "userInfoChange",
    type : "post",
    data : {
      // ci_t : csrf_token,
      pw : pw.val(),
      name : name.val(),
      post : post.val(),
      area : area.val(),
      city : city.val(),
      addr1 : addr1.val(),
      addr2 : addr2.val(),
      addr3 : addr3.val(),
      tel : tel.val(),
      email : email.val()

    },
    success: function(data){
      alert("変更しました。")
    },
    error : function(request,status,error){
      console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);


    }
  });


}

// address need
function area_select(code){
  var area_code = $("select[name='area']").attr("area-code");

  //mypage ajax
  if(code){
    area_code = code ;
  }

  console.log(code);
  $("select[name='area'] option" ).each(function(){
    // この関数はoption1つごとに実行される
    // indexに順番が、elementあるいはthisでDOMオブジェクトが取れる
    var option_code = $(this).val() ;

    if(option_code == area_code){
      $(this).attr("selected","selected");
    }
    console.log(option_code);
  });
}

//join password = repassword compare
function passwordCheck(){
  var pw = $("input[name='pw']").val();
  var rpw = $("input[name='rpw']").val();
  var p_tag = $("input[name='rpw']").next();
  p_tag.empty() ;
  if(pw===rpw){
    p_tag.empty() ;
  }else {
    p_tag.append("pwが違います。もう一度確認お願いします。");
  }

};


//JOIN
function CheckId(position){
  var user_id = $("input[name='id']").val();
  var p_tag = position.nextElementSibling ;
  console.log(position);
  $.ajax({
    url : "userCheck",
    type : "post",
    data : {
      // ci_t : csrf_token,
      user_id : user_id
    },
    success: function(data){
      p_tag.innerHTML = "";
      console.log("data : "+ data);
      if(data==1){
        joinIdCheck = 2 ;

        p_tag.append("他のIDを入力してください。");
      }else{
        p_tag.append("使えるIDです。");
        joinIdCheck = 1 ;
      }
    },
    error : function(request,status,error){
      console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);


    }
  });

 }

function userJoinCheck(){

  var id = $("input[name='id']");
  var pw = $("input[name='pw']");
  var rpw = $("input[name='rpw']");
  var email = $("input[name='email']");
  var name = $("input[name='name']");
  var post = $("input[name='post']");
  var area = $("input[name='area']");
  var city = $("input[name='city']");
  var addr1 = $("input[name='addr1']");
  var addr2 = $("input[name='addr2']");
  var tel = $("input[name='tel']");


  if(id.val() == ""){
    alert("ID入力してください");
    id.focus();
    return false ;
  }else if(joinIdCheck == 0){
    alert("ID重複確認してください");
    id.focus();
    return false ;
  }else if(joinIdCheck == 2){
    alert("他のID入力してください");
    id.focus();
    return false ;
  }else if(pw.val() == ""){
    alert("パスワード入力してください");
    pw.focus();
    return false ;
  }else if(rpw.val() == ""){
    alert("確認のためもう一度入力してください");
    rpw.focus();
    return false ;
  }else if(email.val() == ""){
    alert("メールアドレス入力してください");
    email.focus();
    return false ;
  }else if(name.val() == ""){
    alert("お名前入力してください");
    name.focus();
    return false ;
  }else if(post.val() == ""){
    alert("郵便番号入力してください");
    post.focus();
    return false ;
  }else if(area.val() == ""){
    alert("都道府県入力してください");
    area.focus();
    return false ;
  }else if(city.val() == ""){
    alert("市区郡入力してください");
    city.focus();
    return false ;
  }else if(addr1.val() == ""){
    alert("町村字入力してください");
    addr1.focus();
    return false ;
  }else if(addr2.val() == ""){
    alert("番地入力してください");
    addr2.focus();
    return false ;
  }else if(tel.val() == ""){
    alert("お電話番号入力してください");
    tel.focus();
    return false ;
  }else{
    return true;
  }

}

// login or nouser buyhistory pagechange
function LoginBuyhistoryChange(page,position){
  var pageAll = $(".account-content");

  pageAll.css("display","none");
  $("#login-top span").css("color","rgb(126, 126, 126)");

  console.log(position);
  position.style.color = "black";
  $("#"+page+"-content").css("display","block");
}

function nouserBuyhis(){
  var name = $("input[name='name']").val();
  var email = $("input[name='email']").val();

  console.log(name);
  console.log(email);

  $.ajax({
    url : "nouserBuyhisCheck",
    type : "post",
    data : {
      // ci_t : csrf_token,
      name : name,
      email : email
    },
    success: function(data){
      if(data>0){
        console.log(data);
        location.href="nouserBuyhis?name="+name+"&email="+email;
      }else{
        alert("購入履歴がありません");
      }

    },
    error : function(request,status,error){
      console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);


    }
  });

}



//login
function loginCheck(position){
  var user_id = $("input[name='user_id']").val();
  var user_pw = $("input[name='user_pw']").val();



  $.ajax({
    url : "userlogin",
    type : "post",
    data : {
      // ci_t : csrf_token,
      user_id : user_id,
      user_pw : user_pw
    },
    dataType : "json",
    success: function(data){
      if(data.length){
        location.href="main";
      }else{
        $("#login-error").css("visibility","visible");
      }

    },
    error : function(request,status,error){
      console.log("code:"+request.status+"\n"+"message:"+request.responseText+"\n"+"error:"+error);


    }
  })
}





function CartInsert(){
  var amount = $("input[name='amount']").val();

  if(amount > 0){
      $("#BuyPageMove").attr("action", "/shop/cartInsert");
  }else{
    alert("商品は１個以上購入ができます。");
  }



}
// cart페이지 계산 처리 역할
function checkedSum(){

  var sum = 0;
  var sumPosition = $("#buy-total-wrap .default-pay span:nth-child(2)") ;
  var deliPosition = $("#buy-total-wrap .delivery-pay span:nth-child(2)") ;
  var total = $("#buy-total-wrap .total span:nth-child(2)") ;
  var buy_sum = $("#buy-sum-price") ;

  var deliPay = parseInt(250);
  $("input:checkbox:checked").each(function(){
      var price = $(this).next().attr("name") ;

      sum += parseInt(price) ;
      console.log(sum);

  })

  $(".buy-product-price").each(function(){
      var price = $(this).text();
      sum += parseInt(price) ;
      console.log(sum);

  })
  sumPosition.empty() ;
  deliPosition.empty() ;
  total.empty();
  buy_sum.empty();


  sumPosition.append(sum);

  if(sum<2000 && sum>0){
    deliPosition.append(deliPay);
    buy_sum.attr("value",sum+deliPay);
    total.append(sum+deliPay)
  }else{
    deliPosition.append("0");
    buy_sum.attr("value",sum);
    total.append(sum)
  }

}
// cart 商品削除
function CartProductRemove(){
  $("#CartForm").attr("action", "/shop/cartDelete");

}
// cart 商品削除
function CartProductRemove(){
  $("#CartForm").attr("action", "/shop/cartDelete");

}

function CartProductBuy(){
  var checkbox = $("input[type='checkbox']:checked");

  if(checkbox.val()){
    $("#CartForm").attr("action", "/shop/buyPageMove");
  }else{
    alert("選択した商品がありません。");
  }
}

//product BUY
function BuyPageMove(){

  $("#BuyPageMove").attr("action", "/shop/buyPageMove");

}

// product BUY check
function ProductBuyCheck(){

  var email = $("input[name='email']");
  var name = $("input[name='name']");
  var post = $("input[name='post']");
  var area = $("input[name='area']");
  var city = $("input[name='city']");
  var addr1 = $("input[name='addr1']");
  var addr2 = $("input[name='addr2']");
  var tel = $("input[name='tel']");
  var pay = $("input[name='pay']");

 if(name.val() == ""){
   alert("お名前入力してください");
   name.focus();
   return false ;
 }else if(post.val() == ""){
    alert("郵便番号入力してください");
    post.focus();
    return false ;
  }else if(area.val() == ""){
    alert("都道府県入力してください");
    area.focus();
    return false ;
  }else if(city.val() == ""){
    alert("市区郡入力してください");
    city.focus();
    return false ;
  }else if(addr1.val() == ""){
    alert("町村字入力してください");
    addr1.focus();
    return false ;
  }else if(addr2.val() == ""){
    alert("番地入力してください");
    addr2.focus();
    return false ;
  }else if(tel.val() == ""){
    alert("お電話番号入力してください");
    tel.focus();
    return false ;
  }else if(email.val() == ""){
    alert("メールアドレス入力してください");
    email.focus();
    return false ;
  }else if(pay.is(':checked') == false){
    alert("お支払い方法選択をチェックしてください");
    pay.focus();
    return false ;
  }else{
    return true;
  }

}

function slideFade(){
  //current position imagie fadeout
  curr_position.fadeOut(1000);

  if(slideCount == totalSlides-1){
    curr_position = $('#slide').children("img").eq(0);
    slideCount = 0 ;
  }else {
    slideCount++;
    //next position image
    curr_position = $('#slide').children("img").eq(slideCount);
  }
  //next position image see
  curr_position.fadeIn(1000);
}

//main product new best page switch
function pageSwitchNB(name){
   $(".main-recommend-list").each(function(){
     console.log($(this));
     $(this).css("display","none");
   })

   $(".main-medium-text a").each(function(){
     console.log($(this));
     $(this).css("color","rgb(214, 214, 214)");
     $(this).css("text-decoration","");
   })

   $("."+name+"-list").css("display","block");
   $(".main-"+name).css("color","black");
   $(".main-"+name).css("text-decoration","underline");

   console.log("name :" +  $("#main-medium-text a").length);

}

// search
function searchCheck(){
  var search = $("input[name='search']");
  $("#searchForm").attr("action", "/shop/productSearch");
  if(search.val() == ""){
    search.focus();
    alert("製品を書いてください。");
    return false;
  }else{
    $("#searchform").attr("action", "/shop/productSearch");
    return true;
  }
}
function buySuccess(code){
  var buy_code = code+"" ;
  console.log(typeof(buy_code+""));

  $.ajax({
    url : "/shop/buySuccess",
    type : "post",
    data : {
      // ci_t : csrf_token,
      buy_code : buy_code
    },
    success: function(data){
      location.href="/shop/mypage";
    },
    error : function(request,status,error){

    }
  });

}

//mypage user buy seccess
function nouserbuySuccess(code,name,email){
  var buy_code = code+"" ;

  console.log(typeof(buy_code+""));

  $.ajax({
    url : "/shop/buySuccess",
    type : "post",
    data : {
      // ci_t : csrf_token,
      buy_code : buy_code
    },
    success: function(data){
      location.href="/shop/nouserBuyhis?name="+name+"&email="+email;
    },
    error : function(request,status,error){

    }
  });

}

// review write
function reviewWindow(name,product_code,buy_code){
  console.log(name);
  console.log(name);
  window.open("/shop/review?product_name="+name+"&product_code="+product_code+"&buy_code="+buy_code, "review", "width=400, height=300, status=1");
}


function reviewWrite(){

  var product_code = $("input[name='product_code']").val();
  var content = $("input[name='content']").val();
  var buy_code = $("input[name='buy_code']").val();


  console.log(content);
  console.log(starVal);
  console.log(buy_code);
  $.ajax({
    url : "reviewWrite",
    type : "post",
    data : {
      // ci_t : csrf_token,
      buy_code : buy_code,
      product_code : product_code,
      content : content,
      star : starVal
    },
    success: function(data){
      alert("作成が完了しました。");
      // location.href="/shop/mypage";
      opener.parent.location="/shop/buyHistoryDetail/"+buy_code;
      window.close();
    },
    error : function(request,status,error){

    }
  });
}

function nouserReviewWrite(){

  var product_code = $("input[name='product_code']").val();
  var content = $("input[name='content']").val();
  var buy_code = $("input[name='buy_code']").val();


  console.log("no :" + content);
  console.log(starVal);
  console.log(buy_code);
  $.ajax({
    url : "reviewWrite",
    type : "post",
    data : {
      // ci_t : csrf_token,
      buy_code : buy_code,
      product_code : product_code,
      content : content,
      star : starVal
    },
    success: function(data){
      alert("作成が完了しました。");
      // location.href="/shop/mypage";
      opener.parent.location="/shop/nouserBuyHisDetail/"+buy_code;
      window.close();
    },
    error : function(request,status,error){

    }
  });
}
