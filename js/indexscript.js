console.log("hi");
var textoption = document.querySelector(".main");
var imgbox = document.querySelector(".imageBox");
textoption.addEventListener("mouseenter", function () {
    imgbox.style.display = 'block';
})
textoption.addEventListener("mouseleave", function () {
    imgbox.style.display = "none";
})
var options = document.querySelectorAll(".option")
options.forEach(function (e) {
    e.addEventListener('mouseenter', function () {
        var image = e.getAttribute("data-img")
        imgbox.style.backgroundImage = `url(${image})`
    })
})