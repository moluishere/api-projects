// 使用官方文件提供的狗狗品種API，取得我們想要的狗狗品種資料
// 此處以Get預設連線方式請求API
async function getURL() {
  const response = await fetch("https://dog.ceo/api/breeds/list/all");
  // await fetch() : 使用fetch打API，由於連線的時間長短、成功與否為未知狀態，fetch會回傳一個promise物件
  // await則代表等待它處理完成才會走下一個步驟
  // 要注意的是，雖然該步驟處理完成(連線請求成功)，但我們請求的資料(response)因為還沒有處理，目前仍然是promise物件
  const data = await response.json();
  // await response.json()：取得資料後進行轉換，等待這個步驟完成，我們才取得資料(promise結束)
  createBreedList(data.message);
  // data.message 是我們所需的狗狗品種資料，我們以該資料做為參數呼狗狗品種選單的函式
}
getURL();

// 做一個狗狗種類的下拉選單，並在選單上註冊一個 change 事件
function createBreedList(breedList) {
  const breed = document.getElementById("breed");
  breed.innerHTML = `
    <select id="theBreedName">
          <option>選一種狗狗</option>
          ${Object.keys(breedList) // 使用 Object.keys 取得物件key組成字串並回傳陣列
            .map(function (breed) {
              return `<option>${breed}</option>`;
              // 使用 map 遍歷元素，使用``回傳 key 的選單
            })
            .join("")} 
        </select>
    `;
  const theBreedName = document.querySelector("#theBreedName");
  theBreedName.addEventListener("change", (e) => {
    const slect = e.target.value;
    // 觸發事件的時候，把div清空，不然結果會疊加上去
    const imgContainer = document.querySelector(".imgContainer");
    imgContainer.innerHTML = "";
    loadByBreed(slect);
    // 以change事件選到的目標作為參數，呼叫一個可以連線到所需資料(圖片網址)的API請求函式
  });
}

// 使用官方文件提供的狗狗品種圖片API，取得我們想要的狗狗品種圖片
async function loadByBreed(breed) {
  if (breed != "選一種狗狗") {
    const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
    const data = await response.json();
    createSlideshow(data.message);
    // console.log(data.message);
  }
}

function createSlideshow(images) {
  images.forEach((imgUrl) => {
    const imgContainer = document.querySelector(".imgContainer");
    const imge = (imgContainer.innerHTML +=
      '<img src="' + imgUrl + '"loading="lazy" />');
    console.log(imge);
  });
}
