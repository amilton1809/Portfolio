document.addEventListener("DOMContentLoaded", function () {
    const skillBoxes = document.querySelectorAll(".skill-box");
  
    skillBoxes.forEach((box, index) => {
      setTimeout(() => {
        box.classList.add("show");
      }, index * 480); // Intervalo de 750ms entre cada caixa
    });
  });
  
  // Efeito Smooth no Scroll
  
  document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".projetos .projetos-card, .contatos .formulario-contato");
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target); 
        }
      });
    }, {
      threshold: 0.6 // Ajuste para 0.2 (20%) de visibilidade para iniciar o efeito
    });
  
    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });
  });
  