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
					<li><a href="cart">Cart</a></li>
					<li>
						<?php
              if(isset($_SESSION["user_id"])){
            ?><a href="logout">logout</a></li>
					<?php } ?>

				</ul>
			</div>
			<div id="header-search">
				<span id="search-dt">search</span>
				<input type="text" id="header-search-container">
			</div>
			<div id="header-menu">
				<ul id="header-menu-cate">
					<a href="productList">
						<li>SHOP</li>
					</a>
					<a href="">
						<li>MAGAZINE</li>
					</a>
					<a href="">
						<li>EVENT</li>
					</a>
					<a href="">
						<li>NOTICE</li>
					</a>
				</ul>
			</div>
		</header>
		<section id="section-main">
			<div id="buyhis-wrap">
				<div id="buyhis-title">
					<h2>購入履歴</h2>
				</div>
				<div class="buy-head-title">注文商品</div>
				<table>
					<colgroup>
						<col width="100px">
						<col>
						<col width="214px">
						<col width="126px">
						<col width="235px">
					</colgroup>
					<thead>
						<tr>
							<th>商品情報</th>
							<th>&nbsp;</th>
							<th>販売金額</th>
							<th>数</th>
							<th>総金額</th>
						</tr>
					</thead>
					<tbody>
						<?php foreach($product as $product){ ?>
						<tr>
							<td>
								<img src="../img/<?php echo $product["product_img"] ?>" class="buy-product-img" alt="">
							</td>
							<td>
								<div>カロンカロン</div>
								<div><?php echo $product["product_name"] ?></div>
							</td>
							<td>
								<span><?php echo $product["product_price"] ?></span>
							</td>
							<td>
								<span><?php echo $product["product_amount"] ?></span>
							</td>
							<td>
								<span><?php echo $product["sum_price"] ?></span>
							</td>
						</tr>
					<?php } echo print_r($address) ?>
					</tbody>
				</table>
				<div id="buy-total-wrap">
					<div class="default-pay buy-pay">
							<span>注文商品金額</span>
							<span>0</span>
							<img src="./img/plus.png" alt="">
					</div>
					<div class="delivery-pay buy-pay">
							<span>配送料</span>
							<span>0</span>
							<img src="./img/equal.png" alt="">
					</div>
					<div class="total buy-pay">
							<span>総注文金額</span>
							<span>0</span>
					</div>
				</div>
			</div>
			<div id="buy-section">
				<div class="buy-head-title">注文商品</div>
				<div id="buy-info">
					<dl>
						<dt>お名前</dt>
						<dd>
							<span><?php echo $address->user_name ?></span>
						</dd>
						<dt>郵便番号</dt>
						<dd>
							<span><?php echo $address->postcode ?></span>
						</dd>
						<dt>都道府県</dt>
						<dd>
							<span><?php echo $address->post ?></span>
						</dd>
						<dt>市区郡</dt>
						<dd><input type="text" name="city" value=""></dd>
						<dt>町村字番地</dt>
						<dd>
							<div id="buy-address">
								<div>
									<div>町村字</div>
									<input type="text" name="addr1" id="buy-addr1" value="">
								</div>
								<div>
									<div>番地</div>
									<input type="text" name="addr2" value="">
								</div>
							</div>
						</dd>
						<dt>建物名（部屋番号)</dt>
						<dd><input type="text" name="addr3" id="buy-addr3" value=""></dd>
						<dt>お電話番号</dt>
						<dd><input type="text" name="tel" value=""></dd>
						<dt>メールアドレス</dt>
						<dd><input type="text" name="email" value=""></dd>
					</dl>
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