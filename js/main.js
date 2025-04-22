document.addEventListener("DOMContentLoaded", () => {
  const steps = document.querySelectorAll(".wizard-step");
  let currentStep = 0;

  function goToNextStep() {
    steps[currentStep].classList.remove("active");
    currentStep++;
    if (currentStep < steps.length) {
      steps[currentStep].classList.add("active");
    } else {
      document.getElementById("wizard").style.display = "none";
    }
  }

  document.querySelectorAll(".wizard-btn").forEach(btn => {
    btn.addEventListener("click", goToNextStep);
  });
});
