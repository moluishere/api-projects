// 每個頁面要顯示幾張圖片(items)
const perPage = 20;
// 總共多少圖片(items)
let numPages = $(".list-item").length;

$(".list-item").slice(perPage).hide();

$("#pagination-container").pagination({
  items: numPages,
  itemsOnPage: perPage,
  prev: "&laquo;",
  next: "&raquo;",
  // cssStyle: "light-theme",
  onPageClick: function (pageNumber) {
    let startPage = perPage * (pageNumber - 1);
    let endPage = startPage + perPage;
    $(".list-item").hide().slice(startPage, endPage).show();
  },
});

// // 每個頁面要顯示幾個項目
// var perPage = 20;
// // 總共有多少個項目
// var numItems = $(".list-item").length;

// $(".list-item").slice(perPage).hide();

// $("#pagination-container").pagination({
//   items: numItems,
//   itemsOnPage: perPage,
//   prevText: "&laquo;",
//   nextText: "&raquo;",
//   onPageClick: function (pageNumber) {
//     // 計算出 起始 以及結束
//     var from = perPage * (pageNumber - 1);
//     var to = from + perPage;
//     $(".list-item").hide().slice(from, to).show();
//   },
// });
