function callback() {
  console.log("Hi from the callback!");
}
window.callback = callback;

window.onload = function init() {
  d3.selectAll("circle").on("click", () => callback());
};
