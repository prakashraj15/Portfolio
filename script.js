function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

function changeText() {
    const titles = ["AI Engineer", "ML Engineer","Deep Learning Specialist", "CV Engineer", "NLP Engineer", "Software Engineer"];
    const randomIndex = Math.floor(Math.random() * titles.length);
    const jobelement = document.getElementById("job");
    jobelement.classList.add("fade-out");
    setTimeout(() => {
        jobelement.innerHTML = titles[randomIndex];
        jobelement.classList.remove("fade-out");
    }, 500);
}

setInterval(changeText, 3000);