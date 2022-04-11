<template>
  <div class="app">
    <div class="header">
      <h1>狗狗選單：用串接狗狗圖片認識API</h1>
      <div id="breed"></div>
      <div id="slideshow">
        <div class="imgContainer">
          <select name="" id="theBreedName" @click="add">
            <option>選一種狗狗</option>
            <option>{{ selectList }}</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const selectList = ref([]);
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((d) => d.json())
      .then((res) => {
        selectList.value = res.message;
      });

    const slectOption = ref([]);
    console.log(slectOption.value);
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  margin: auto;
}

.header {
  text-align: center;
  padding: 2.5%;
  background-color: aquamarine;
}

#breed {
  margin: 2.5% 0;
}

#slideshow {
  max-width: 1200px;
  margin: auto;
}

.imgContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;
}
img {
  margin: 1em;
  display: inline-block;
  width: 200px;
  height: 200px;
  object-fit: cover;
  object-position: center center;
}
</style>
