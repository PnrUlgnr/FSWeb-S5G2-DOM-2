import "./less/index.less";

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });

// Kodlar buraya gelecek!

document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("mouseover", function (e) {
    e.target.style.filter = "grayscale(1)";
  });
});
document.querySelectorAll("img").forEach((element) => {
  element.addEventListener("dblclick", (event) => {
    event.target.style.transform = "scale(0.5)";
  });
  element.addEventListener("click", (event) => {
    event.target.style.transform = null;
  });
});

window.addEventListener("load", (event) => {
  console.log("setTimeout");
  setTimeout(() => {
    document.querySelector("body").style.backgroundColor = "yellowgreen";
  }, 2000);
  console.log("setTimeout");
  console.log("kod çalışıyor");
});

const theInput = document.createElement("input");
theInput.setAttribute("type", "text");

theInput.addEventListener("click", (event) => {
  event.target.value = "text";
  event.target.style.border = " 5px solid blue";
});
document.querySelector(".content-section").append(theInput);

document.querySelector("input").addEventListener("keyup", (event) => {
  event.target.value = event.target.value.toUpperCase();
});

document.querySelector("input").addEventListener("keyup", (event) => {
  if (event.key == 3) {
    document.querySelector("body").style.backgroundColor = "blue";
  }
  console.log(event.key);
  event.target.value = event.target.value.toUpperCase();
});
