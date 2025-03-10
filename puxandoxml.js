// Carregar e exibir todos os projetos do XML
fetch('portfolio.xml')
    .then(response => response.text())
    .then(str => {
        let parser = new DOMParser();
        let xml = parser.parseFromString(str, "application/xml");

        let projetos = xml.getElementsByTagName("projeto");
        let container = document.getElementById("portfolio-container");

        for (let projeto of projetos) {
            let div = document.createElement("div");

            for (let node of projeto.children) {
                let elemento = document.createElement(node.tagName === "link" ? "a" : "p");

                
                if (node.tagName === "pubDate") {
                    
                    elemento.textContent = `Publicado em: ${node.textContent}`;
                } else {
                    elemento.textContent = node.textContent;
                }

                if (node.tagName === "link") {
                    elemento.href = node.textContent;
                    elemento.target = "_blank";
                }

                div.appendChild(elemento);
            }

            container.appendChild(div);
        }
    })
    .catch(error => console.error("Erro ao carregar XML:", error));




