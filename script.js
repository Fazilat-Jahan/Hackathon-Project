// const toggleButton = document.getElementById("toggleSkills");
// const skillsContent = document.getElementById("skillsContent");
// toggleButton?.addEventListener("click", () => {
//   if (skillsContent?.classList.contains("hidden")) {
//     skillsContent.classList.remove("hidden");
//   } else {
//     skillsContent?.classList.add("hidden");
//   }
// });
var toggleButton = document.getElementById("toggleSkills");
var skillsContent = document.getElementById("skillsContent");
toggleButton === null || toggleButton === void 0 ? void 0 : toggleButton.addEventListener("click", function () {
    if (skillsContent === null || skillsContent === void 0 ? void 0 : skillsContent.classList.contains("hidden")) {
        skillsContent.classList.remove("hidden");
        toggleButton.textContent = "Hide Skills";
    }
    else {
        skillsContent === null || skillsContent === void 0 ? void 0 : skillsContent.classList.add("hidden");
        toggleButton.textContent = "Show Skills";
    }
});
