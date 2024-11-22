const skillsWrapper = document.querySelector(".skills-wrapper");

skillsWrapper.addEventListener("mouseover", () => {
  skillsWrapper.style.animationPlayState = "paused";
});

skillsWrapper.addEventListener("mouseout", () => {
  skillsWrapper.style.animationPlayState = "running";
});
