document.addEventListener("DOMContentLoaded", function () {
    const skillBoxes = document.querySelectorAll(".skill-box");
  
    skillBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add("show");
      }, index * 480); // Intervalo de 750ms entre cada caixa
    });
  });
  