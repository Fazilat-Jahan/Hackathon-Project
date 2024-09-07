
const toggleButton= document.getElementById("toggleSkills");
const skillsContent= document.getElementById("skillsContent");
toggleButton?.addEventListener("click", () =>{
  if (skillsContent?.classList.contains("hidden")) {
    skillsContent.classList.remove("hidden");
    toggleButton.textContent="Hide Skills";
  } else {
    skillsContent?.classList.add("hidden");
    toggleButton.textContent="Show Skills";
  }
});