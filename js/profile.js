const popup_bg = document.querySelector('.popUp-bg').addEventListener('click', popClose);
const popClosebtn = document.querySelector('#popClose').addEventListener('click', popClose);
const add = document.querySelector('.bi-plus-circle').addEventListener('click', popOpen);

const DashNavClosebtn = document.querySelector('#DashNavClose').addEventListener('click', DashNavClose);
const DashNav_bg = document.querySelector('.Nav-Dashboard-bg').addEventListener('click', DashNavClose);
const openmenu = document.querySelector('#Dashmenu').addEventListener('click', DashNavOpen);

function popClose() {
    document.querySelector('.popUp').classList.toggle('open');
    document.querySelector('#pop-bg').classList.add('d-none');
}

function popOpen() {
    document.querySelector('.popUp').classList.toggle('open');
    document.querySelector('#pop-bg').classList.remove('d-none');
}

function DashNavClose() {
    document.querySelector('.Nav-Dashboard').classList.toggle('open');
    document.querySelector('.Nav-Dashboard-bg').classList.add('d-none');
}

function DashNavOpen() {
    document.querySelector('.Nav-Dashboard').classList.toggle('open');
    document.querySelector('.Nav-Dashboard-bg').classList.remove('d-none');
}

toggle();
window.onresize = function() {
    toggle();
}

function toggle() {
    console.log(document.documentElement.clientWidth);

    if (document.documentElement.clientWidth < 1200) {
        document.getElementById('Nav_Dashboard').classList.add('Nav-Dashboard');
    } else {
        document.getElementById('Nav_Dashboard').classList.remove('Nav-Dashboard');
    }
}

$(".dashboardNav").click(function(e) {
    if (e.target.parentElement.tagName === "LI") {
        for (let i = 0; i < this.children.length; i++) {
            this.children[i].classList.remove("active");
        }
        e.target.parentElement.classList.add("active");
        Dashboard_view(e.target.parentElement.id.replace("-btn", " "));
        DashNavClose();
    }
})

function Dashboard_view(view) {
    $('#Dashboard').addClass("d-none");
    $('#Profile').addClass("d-none");
    $('#Payment').addClass("d-none");
    $('#Order-history').addClass("d-none");
    $('#' + view).removeClass("d-none");
}