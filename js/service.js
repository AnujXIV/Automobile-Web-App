document.getElementsByClassName('SectionImage1').item(0).addEventListener('mouseover', S1_hover);
document.getElementsByClassName('SectionImage1').item(0).addEventListener('mouseout', S1_hoverEnd);
document.getElementsByClassName('SectionImage2').item(0).addEventListener('mouseover', S2_hover);
document.getElementsByClassName('SectionImage2').item(0).addEventListener('mouseout', S2_hoverEnd);


function S1_hover() {
    document.getElementById('S2').classList.add('ImageEffect');
    document.getElementById('S2').style.transform = "translateX(55%)";
}

function S1_hoverEnd() {
    document.getElementById('S2').classList.remove('ImageEffect');
    document.getElementById('S2').style.transform = "translateX(0%)";
}

function S2_hover() {
    document.getElementById('S1').classList.add('ImageEffect');
    document.getElementById('S1').style.transform = "translateX(-55%)";
}

function S2_hoverEnd() {
    document.getElementById('S1').classList.remove('ImageEffect');
    document.getElementById('S1').style.transform = "translateX(0%)";
}