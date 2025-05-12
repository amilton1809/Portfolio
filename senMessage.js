function sendMessage(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const name = document.getElementById("name").value.trim();
    const message = document.getElementById("message").value.trim();
    
    if (!name || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    const whatsappNumber = "5511959946164"; // Exemplo: 5511999999999
    const text = `Olá, meu nome é ${encodeURIComponent(name)} e gostaria de falar o seguinte: ${encodeURIComponent(message)}`;
    const url = `https://api.whatsapp.com/send?phone=${5511959946164}&text=${text}`;

    window.open(url, "_blank");
  }