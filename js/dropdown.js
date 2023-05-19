const ul_first = document.querySelector(".dropdownul__first");
const ul = document.querySelector(".ulclass_second");
const ul_third = document.querySelector(".dropdownul__third");
const maindrop_btn_first = document.querySelector(".maindrop_btn_first");
const maindrop_btn_second = document.querySelector(".maindrop_btn_second");
const maindrop_btn_third = document.querySelector(".maindrop_btn_third");

maindrop_btn_first.addEventListener("click", () => {
  ul_first.classList.toggle("dropdownulActive");
});
maindrop_btn_second.addEventListener("click", () => {
    ul.classList.toggle("dropdownulActive");
  });

  maindrop_btn_third.addEventListener("click", () => {
    ul_third.classList.toggle("dropdownulActive");
  });
  

