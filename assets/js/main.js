/*===== Page Load =====*/
document.addEventListener("DOMContentLoaded", function () {
  var loaded = parseInt(localStorage.getItem("loaded"), 10),
      loaded_numb = loaded ? loaded + 1 : 1;

  localStorage.setItem("loaded", loaded_numb);

  var navLogo = document.querySelector(".load_Tracker");
  
  if (navLogo) {
    var message = document.createElement("p");
    message.textContent = "LoadTracker " + loaded_numb + " times!";
    navLogo.appendChild(message);
  }
});

/*===== MENU SHOW =====*/
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId);

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      nav.classList.toggle("show");
    });
  }
};
showMenu("nav-toggle", "nav-menu");

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollDown = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav__menu a[href*=" + sectionId + "]"
      );

    if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*===== Contact Information Send =====*/
function sendMail() {
  let isValid = true;

  document.getElementById("nameError").innerText = "";
  document.getElementById("emailError").innerText = "";
  document.getElementById("subjectError").innerText = "";
  document.getElementById("bodyError").innerText = "";

  // Validate Username
  let username = document.getElementById("Name").value;
  if (username.trim() === "") {
    showError("nameError", "Name is required.");
    isValid = false;
    document.getElementById("Name").focus();
  }

  // Validate Email
  let email = document.getElementById("Email").value;
  if (email.trim() === "") {
    showError("emailError", "Email is required.");
    isValid = false;
    document.getElementById("Email").focus();
  }
  if (!validateEmail(email) && email.trim() !== "") {
    showError("emailError", "Please enter a valid email address.");
    isValid = false;
    document.getElementById("Email").focus();
  }

  // Validate Subject
  let subject = document.getElementById("Subject").value;
  if (subject.trim() === "") {
    showError("subjectError", "Subject is required.");
    isValid = false;
    document.getElementById("Subject").focus();
  }

  // Validate Body
  let myText = document.getElementById("myText").value;
  if (myText.trim() === "") {
    showError("bodyError", "Body is required.");
    isValid = false;
    document.getElementById("myText").focus();
  }

  if (username && email && myText && subject && isValid) {
    var link =
      "mailto:svarukolu9@gmail.com" +
      "?cc=sv969@nau.edu" +
      "&subject=" +
      encodeURIComponent(
        document.getElementById("Name").value +
          ": " +
          document.getElementById("Email").value +
          " : " +
          document.getElementById("Subject").value
      ) +
      "&body=" +
      encodeURIComponent(document.getElementById("myText").value);
    window.location.href = link;
  }
}

function showError(spanId, message) {
  document.getElementById(spanId).innerText = message;
}

function validateEmail(email) {
  let re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return re.test(String(email).toLowerCase());
}

/*===== GOOGLE MAPS =====*/
var mapProp;
function myMap() {
  var latLng = new google.maps.LatLng(35.198284, -111.651299);
  mapProp = {
    center: latLng,
    zoom: 6,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  /*===== CREATE THE MAP HERE =====*/
  var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);

  /*===== CREATE MARKER =====*/
  var marker = new google.maps.Marker({
    position: latLng,
    title: "Flagstaff",
    map: map,
    draggable: true,
  });
}
/*===== LOADING GOOGLE MAP HERE =====*/
google.maps.event.addDomListener(window, "load", myMap);

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2000,
  delay: 200,
  //     reset: true
});

sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
sr.reveal(".home__img, .about__subtitle, .about__text, .skills__img", {
  delay: 400,
});
sr.reveal(".home__social-icon", { interval: 200 });
sr.reveal(".skills__data, .work__img, .contact__input", { interval: 200 });
