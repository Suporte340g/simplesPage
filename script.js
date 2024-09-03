//comment slider
let comment = document.querySelectorAll('.comment');
let active = 0;

function loadComments() {
    comment[active].style.zIndex = 3;
    comment[active].style.transform = 'none';
    comment[active].style.filter = 'none';
    comment[active].style.opacity = 1;


    let count = 0;
    for (let i = active + 1; i < comment.length; i++) {
        count++;
        comment[i].style.transform = `translateX(${300 * count}px) scale(${1 - 0.2 * count}) perspective(20px) rotateY(-0.5deg)`; 
        comment[i].style.filter = 'blur(5px)';
        comment[i].style.zIndex = 2 - count;
        comment[i].style.opacity = count > 2 ? 0 : 1 - 0.2 * count;
    }

    count = 0;
    for (let i = (active - 1); i >= 0; i--) {
        count++;
        comment[i].style.transform = `translateX(-${300 * count}px) scale(${1 - 0.2 * count}) perspective(20px) rotateY(0.5deg)`; 
        comment[i].style.filter = `blur(4px)`;
        comment[i].style.zIndex = 2 - count;
        comment[i].style.opacity = count > 2 ? 0 : 1 - 0.2 * count;
    }
}
loadComments()

let next = document.getElementById('next');
let prev = document.getElementById('prev');

next.onclick = function (){
    active = active + 1 < comment.length ? active + 1 : active;
    loadComments();
}

prev.onclick = function (){
    active = active - 1 >= 0 ? active - 1 : active;
    loadComments();
}

//print selector

let printContainer = document.getElementById('print-container')
let print01 = document.getElementById('print01').onclick = function(){printContainer.style.backgroundImage = 'url(assets/images/prints/print01.jpg)'};
let print02 = document.getElementById('print02').onclick = function(){printContainer.style.backgroundImage = 'url(assets/images/prints/print02.jpg)'};
let print03 = document.getElementById('print03').onclick = function(){printContainer.style.backgroundImage = 'url(assets/images/prints/print03.jpg)'};
let print04 = document.getElementById('print04').onclick = function(){printContainer.style.backgroundImage = 'url(assets/images/prints/print04.jpg)'};
let print05 = document.getElementById('print05').onclick = function(){printContainer.style.backgroundImage = 'url(assets/images/prints/print05.png)'};

// clients section

let clientSideBar = document.querySelectorAll(".clients-side-bar .activity");
let clientBlock = document.querySelectorAll(".client-block-container");
for (let i = 0; i < clientSideBar.length; i++) {
    clientSideBar[i].addEventListener("click", function() {
        clientSideBar.forEach(function(li) {
            li.classList.remove("cli-active");
        });
        this.classList.add("cli-active");
        let actValue = this.getAttribute("data-act");
        clientBlock.forEach(function(block) {
            block.style.display = "none"
        });
        if (actValue == "activity-01") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-02") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-03") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-04") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-05") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-06") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-07") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-08") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-09") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-10") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-11") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-12") {
            document.querySelector("." + actValue).style.display = "grid";
        } else if (actValue == "activity-13") {
            document.querySelector("." + actValue).style.display = "grid";
        } else {
            console.log("hello");
        }
    })
}
