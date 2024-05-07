const images = document.querySelectorAll(".img");

images.forEach((image) => {
  image.addEventListener("click", () => {
    remove();
    image.classList.add("active");
  });
});
const remove = () => {
  images.forEach((image) => {
    image.classList.remove("active");
  });
};
