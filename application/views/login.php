<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>example shop</title>
    <link rel="stylesheet" href="./css/shop.css">
    <script type="text/javascript" src="./js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="./js/shop.js"></script>
  </head>
  <body>
    <div id="page-container">
      <header id="header">
        <h1 id="logo-wrapper">
          <a href="main" id="logo" title="main page 移動します。">
            <img src="./img/main-logo.png" alt="" width="210px" height="100px">
          </a>
        </h1>
        <div id="nav-user-menu">
          <ul id="header-nav-actions">
            <li><a href="/shop/login">My Account</a></li>
            <li><a href="/shop/cart">CART</a></li>
          </ul>
        </div>
        <div id="header-search">
          <form id="searchForm" class="" action="" method="post" onsubmit="return searchCheck();" >
            <span id="search-label">search</span>
            <input type="text" id="header-search-container" name="search" onkeyup="enterkey('search')" ;>
            <button name="button">
              <img src="./img/searchIcon.png" alt="">
            </button>
          </form>
        </div>
        <div id="header-menu">
          <ul id="header-menu-cate">
            <a href="/shop/main"><li>TOP</li></a>
            <a href="/shop/categoryList/0"><li>SHOP</li></a>
            <a href="#"><li>MAGAZINE</li></a>
            <a href="/shop/noticeList"><li>NOTICE</li></a>
          </ul>
        </div>
      </header>
      <section id="section-main">
        <div id="login-form">
          <div id="login-top">
            <span onclick="LoginBuyhistoryChange('login',this);">LOGIN</span>
            <span onclick="LoginBuyhistoryChange('nouserbuyhis',this);">非会員購入履歴</span>
          </div>
          <div id="login-content" class="account-content">
            <div>LOGIN</div>
            <form class="" action="userlogin" method="post">
              <label for="user_id">ID</label>
              <input type="text" name="user_id" onkeyup="enterkey('login');">
              <br>
              <label for="user_pw">パスワード</label>
              <input type="password" name="user_pw" onkeyup="enterkey('login');">
              <br>
              <input type="button" onclick="loginCheck(this)" value="LOGIN">
            </form>
            <div id="login-error">
              <p>ID・PWが間違います。</p>
            </div>
            <a href="join" id="join-move">
                <p>新規会員登録</p>
            </a>
          </div>
          <div id="nouserbuyhis-content" class="account-content">
            <div>非会員購入履歴</div>
            <form id="nouserbuyhisForm" action="" method="post">
              <label for="name">お名前</label>
              <input type="text" name="name">
              <br>
              <label for="email">メールアドレス</label>
              <input type="text" name="email">
              <br>
              <input type="button" onclick="nouserBuyhis()" value="検索">
            </form>
          </div>
      </section>
      <footer id="footer">

      </footer>
      <div id="nav-menu-container">

      </div>
    </div>
  </body>
</html>
