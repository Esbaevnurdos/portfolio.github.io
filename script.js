// function toggleDarkMode() {
//   var body = document.body;
//   body.classList.toggle("dark-mode");
// }

// Script for navigation bar
const bar = document.getElementById("bar");
const close = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

if (close) {
  close.addEventListener("click", () => {
    nav.classList.remove("active");
  });
}

document.getElementById("searchInput").addEventListener("input", function () {
  var searchValue = this.value.toLowerCase();
  var projects = document.querySelectorAll(".project");
  projects.forEach(function (project) {
    var projectName = project.dataset.name.toLowerCase();
    if (projectName.includes(searchValue)) {
      project.style.display = "block";
    } else {
      project.style.display = "none";
    }
  });
});

// JavaScript for modal
function openModal(projectName) {
  var modal = document.getElementById("myModal");
  var modalContent = modal.querySelector("p");
  modalContent.textContent = "Hiring modal for " + projectName;
  modal.style.display = "block";
}

function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}

function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}
