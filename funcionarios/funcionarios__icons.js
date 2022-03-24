let iconsName = document.querySelectorAll(".funcionario__name");
let iconsPosition = document.querySelectorAll(".funcionario__position");
let iconsMail = document.querySelectorAll(".funcionario__mail");

for (let i = 0; i < iconsName.length; i++) {

    let previousText = iconsName[i].innerHTML;

    let newText = `<i class="fa-solid fa-user funcionario__name__icon"></i>`+previousText;

    iconsName[i].innerHTML = newText;

}

for (let i = 0; i < iconsPosition.length; i++) {

    let previousText = iconsPosition[i].innerHTML;

    let newText = `<i class="fa-solid fa-briefcase funcionario__position__icon"></i>`+previousText;

    iconsPosition[i].innerHTML = newText;

}

for (let i = 0; i < iconsMail.length; i++) {

    let previousText = iconsMail[i].innerHTML;

    let newText = `<i class="fa-solid fa-at funcionario__mail__icon"></i>`+previousText;

    iconsMail[i].innerHTML = newText;

}