function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
  
    // Inicializa uma string vazia para armazenar os resultados formatados
    let resultados = "";
  
    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    if (!campoPesquisa) {
      section.innerHTML = "<p>Nada foi encontrado. Digite algo no campo de pesquisa.</p>"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    let nome = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada piloto na lista de pilotos
    for (let piloto of pilotos) {
      nome = piloto.nome.toLowerCase();
      descricao = piloto.descricao.toLowerCase();      
      tags = piloto.tags.toLocaleLowerCase();

      if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
        // Constrói o HTML para cada piloto, formatando os dados de nome, nacionalidade, títulos e descrição
        resultados += `
          <div class="item-resultado">
            <h2>${piloto.nome}</h2>
            <h3>${piloto.nacionalidade}</h3>
            <p>Número de títulos mundiais: ${piloto.titulosMundiais}</p>
            <p class="descricao-meta">${piloto.descricao}</p>
            <a href=${piloto.link} target="_blank">Mais informações</a>
          </div>
        `;        
      }
    }
  
    if (!resultados) {
      resultados = "<p>Nada foi encontrado.</p>"
    }    

    // Atribui o HTML gerado para a seção de resultados, atualizando a página
    section.innerHTML = resultados;
  }