<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>example shop</title>
    <link rel="stylesheet" href="../css/shop.css">
    <script type="text/javascript" src="../js/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="../js/shop.js"></script>
  </head>
  <body>
    <div id="page-container">
      <header id="header">
        <h1 id="logo-wrapper">
          <a href="/shop/main" id="logo" title="main page 移動します。">
            <img src="../img/main-logo.png" alt="" width="210px" height="100px">
          </a>
        </h1>
        <div id="nav-user-menu">
          <ul id="header-nav-actions">
            <li>
                <?php
                  if(isset($_SESSION["user_id"])){
                      echo $_SESSION["user_id"] ;
                  }else { ?>
                <a href="login">
                <?php
                    echo "My Account";
                  }
                ?>
              </a>
            </li>
            <li><a href="">Cart</a></li>
            <li><a href="">My page</a></li>
            <li>
            <?php
              if(isset($_SESSION["user_id"])){
            ?><a href="logout">logout</a></li>
          <?php } ?>

          </ul>
        </div>
        <div id="header-search">
          <span id="search-label">search</span>
          <input type="text" id="header-search-container">
        </div>
        <div id="header-menu">
          <ul id="header-menu-cate">
            <a href="productList"><li>SHOP</li></a>
            <a href=""><li>MAGAZINE</li></a>
            <a href=""><li>EVENT</li></a>
            <a href=""><li>NOTICE</li></a>
          </ul>
        </div>
      </header>
      <section id="section-main">
        <div id="wrap-navi">
          <div class="sub-logo">
            <a href="#">
              <span>カロンカロン</span>
            </a>
          </div>
          <div class="sub-menu">
            <ul>
              <li><a href="">商品一覧</a></li>
              <li><a href="">マカロン</a></li>
              <li><a href="">マカロンセット</a></li>
              <li><a href="">デザート</a></li>
            </ul>
          </div>
        </div>
        <div id="wrap-product">
          <div id="product-head">
              <div id="product-head-img">
                <img src="../img/a-1.png" alt="">
              </div>
              <div id="product-head-info">
                <form class="" action="" method="post"  id="BuyForm">
                  <input type="hidden" name="product_code" value="<?php echo $code ?>">
                  <input type="hidden" name="product_price" value="3500">
                  <ul>
                    <li>カロンカロン</li>
                    <li>딸기 마카롱</li>
                    <li>
                      <span>가격 : </span>
                      <span>3500</span>
                    </li>
                    <hr>
                    <li>
                      <span>수량 </span>
                      <input type="text"  name="amount" value="1">
                    </li>
                    <button id="product-cart" class="product-btn" onclick="" name="">CART</button>
                    <button id="product-buy" class="product-btn" onclick="buy()" name="">BUY</button>
                  </ul>
                </form>
              </div>

          </div>
        </div>
      </section>
      <footer id="footer">

      </footer>
      <div id="nav-menu-container">

      </div>
    </div>
  </body>
</html>