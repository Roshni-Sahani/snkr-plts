// nav bar
function openNav() {
    document.getElementById("navbar").classList.toggle("end-0");
    document.body.classList.toggle("overflow_hidden");
    document.getElementById("menubtn-icon").classList.toggle("cross")
}

let btn = document.querySelector("#addbtn")
let counting = document.querySelector("#counting")
let minusbtn = document.querySelector("#minusbtn")
btn.addEventListener("click", function () {
    counting.innerHTML = +counting.innerHTML + 1
})
minusbtn.addEventListener("click", function () {
    counting.innerHTML = +counting.innerHTML - 1
})


// //////
function openTab(tabId) {

    var tabButtons = document.querySelectorAll(".tab-button");
    var tabContents = document.querySelectorAll(".tab-content");


    tabContents.forEach(function (tabContent) {
        tabContent.style.display = "none";
    });

    tabButtons.forEach(function (tabButton) {
        tabButton.classList.remove("active");
    });

    document.getElementById(tabId).style.display = "block";

    tabButtons.forEach(function (button) {
        if (button.getAttribute("onclick").includes(tabId)) {
            button.classList.add("active");
        }
    });
}