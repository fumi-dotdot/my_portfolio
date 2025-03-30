$(function () {
  $("li.drawer").hover(
    function () {
      $(".submenu:not(:animated)", this).slideDown();
    },
    function () {
      $(".submenu", this).slideUp();
    }
  );
});

// 上へ戻るボタン
$(function () {
  const pagetop = $("#js-page-top");
  // 普段はボタン非表示
  pagetop.hide();
  // 100px スクロールしたらボタン表示（フェードインで）
  $(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
      pagetop.fadeIn();
      // そうじゃない場合は非表示（フェードアウトで）
    } else {
      pagetop.fadeOut();
    }
  });
  // ボタンをクリックしたら500ミリ秒かけてページ上部（0pxの位置）までスクロールアップで移動
  pagetop.click(function () {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// ==========================================================================
//拡大画像モーダル処理
// ==========================================================================

// コース画像モーダル表示イベント
$(".menu__img img").click(function () {
  // まず、クリックした画像の HTML(<img>タグ全体)を#js-modal内にコピー
  $("#js-modal").html($(this).prop("outerHTML"));
  //そして、fadeInで表示する。
  $("#js-modal").fadeIn(200);
  return false;
});

// コース画像モーダル非表示イベント
// モーダル画像背景 または 拡大画像そのものをクリックで発火
$("#js-modal").click(function () {
  // 非表示にする
  $("#js-modal").fadeOut(200);
  return false;
});
