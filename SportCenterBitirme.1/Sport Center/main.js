"use strict";
// const height = document.querySelector("#height");
// const weight = document.querySelector("#weight");
// const bmiTriangle = document.querySelector("#bmi-tri");


// console.log(bmiTri.style.left  )

const height = document.querySelector("#height");
const weight = document.querySelector("#weight");
const bmiTriangle = document.querySelector(".bmi-tri");

weight.addEventListener("input", () => {
  let bmi = weight.value / (height.value / 100) ** 2;
  let percentage;
  if (bmi > 13.5 && bmi < 18.5) {
    percentage = 4 + ((bmi - 13.5) * 16) / 5;
  } else if (
    (bmi > 27 && bmi < 31) ||
    (bmi >= 31 && bmi < 36) ||
    (bmi >= 36 && bmi < 41)
  ) {
    percentage = 40 + ((bmi - 24.5) * 16) / 5;
  } else if (bmi >= 18.5 && bmi < 25) {
    percentage = 23 + ((bmi - 18.5) * 16) / 7.5;
  }

  if (percentage > 4 && percentage < 86) {
    bmiTriangle.style.left = `${percentage}%`;
  }
});


const classes = [
  {
    category: "Yoga",
    img: "./images/yoga.jpg ",
    id: 1,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: [
      "Saturday-Sunday: 8:00am - 10.00am",
      "Monday-Tuesday: 10:00am - 12.00pm",
      "Wednesday-Friday: 3:00pm - 6.00pm",
    ],
  },
  {
    category: "Group",
    img: "./images/group.webp",
    id: 2,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: [
      "Monday-Sunday: 12:00pm - 12.00pm",
      "Monday-Thursday: 2:00pm - 10.00pm",
      "Wednesday-Friday: 6:00pm - 11.00pm",
    ],
  },
  {
    category: "Solo",
    id: 3,
    img: "./images/solo.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: [
      "Saturday-Sunday: 10:00am - 12.00am",
      "Wednesday-Friday: 2:00pm - 7.00pm",
      "Monday-Tuesday: 12:00pm - 12.00pm",
    ],
  },
  {
    category: "Stretching",
    id: 4,
    img: "./images/stret.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quidem quis earum officiis quam fugit placeat impedit incidunt amet assumenda laboriosam ipsam quisquam perferendis quibusdam, autem, illo eos cupiditate! Debitis aut beatae alias ullam nobis?",
    time: [
      "Monday-Sunday: 11:00am - 12.00pm",
      "Tuesday-Friday: 10:00am - 12.00pm",
      "Wednesday-Friday: 10:00am - 12.00pm",
    ],
  },
];

const btnClasses = document.querySelectorAll(".btn-classes");
const triangle = document.querySelectorAll(".btn-classes div");
const classesContent = document.querySelector(".classes-content");

btnClasses[0].style.backgroundColor = "#fc9b01";

for (let i = 0; i < btnClasses.length; i++) {
  btnClasses[i].addEventListener("click", () => {
    for (let j = 0; j < btnClasses.length; j++) {
      btnClasses[j].style.backgroundColor = "#355592";
      triangle[j].classList.remove("triangle");
    }

    btnClasses[i].style.backgroundColor = "#fc9b01";
    triangle[i].classList.add("triangle");
    classesContent.innerHTML = "";
    const selectedGroup = btnClasses[i].innerText;

    classes.forEach((e) => {
      if (e.category == selectedGroup) {
        showMenu(e, classesContent);
      }
    });
  });
}

function showMenu(e, classesContent) {
  let div = document.createElement("div");
  div.classList.add("content-click");
  div.innerHTML = `  <h2>Why are your ${e.category}?</h2>
    <p>${e.description}</p>
    <h2>When comes ${e.category} Your Time.</h2>
    <p>${e.time[0]}</p>
    <p>${e.time[1]}</p>
    <p>${e.time[2]}</p>

    `;
  let img = document.createElement("img");
  img.classList.add("img-yoga");
  img.src = `${e.img}`;
  img.alt = `${e.category}`;
  classesContent.append(div);
  classesContent.append(img);
}

function fixedNavbar() {
  let navbar = document.querySelector(".navbar-container");
  let scrollValue = window.scrollY;
  if (scrollValue < 600) {
    navbar.classList.remove("fixedNavbar");
  } else {
    navbar.classList.add("fixedNavbar");
  }

  console.log(scrollValue);
}
window.addEventListener("scroll", fixedNavbar);