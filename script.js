function showContent(tipo) {
    const conteudo = document.getElementById('conteudo');
    if (tipo === 'sobre') {
      conteudo.innerHTML = `
        <h3>Sobre Mim</h3>
        <p>Meu nome é Davi, tenho 21 anos, sou de <strong>Governador Valadares - MG</strong> e atuo como <strong>Desenvolvedor</strong>. Sou apaixonado por tecnologia, programação e jogos, e estou constantemente buscando maneiras de unir essas paixões em projetos criativos e desafiadores.</p>
        <p>Atualmente, estou desenvolvendo um <strong>plugin de profissões não combativas para Minecraft</strong>, focado em oferecer experiências envolventes por meio de progressão, exploração e criação. As profissões que desenvolvo — como <em>Flecheiro</em>, <em>Ferreiro</em> e <em>Imbuidor</em> — contam com evoluções, tarefas específicas e recompensas conforme o progresso do jogador.</p>
        <p>Tenho experiência em <strong>Delphi</strong>, linguagem com a qual trabalho praticamente todos os dias. Tenho experiência também em <strong>Java</strong> com a IDE <strong>IntelliJ</strong> para meus projetos no Minecraft, criando sistemas personalizados com integração a banco de dados.</p>
        <p>Uso o <strong>banco de dados SQLite</strong> para gerenciar os dados dos jogadores e manter o desempenho e estabilidade da aplicação.</p>
        <p>Nos momentos livres, gosto de jogar no computador. Meus gêneros favoritos são jogos <strong>criativos</strong>, <strong>competitivos</strong>, <strong>MMORPGs</strong> e com forte <strong>narrativa</strong>, como <em>Minecraft</em>, <em>Valorant</em>, <em>Sea of Thieves</em>, <em>Albion Online</em> e <em>Red Dead Redemption</em>.</p>
        <p>Sou dedicado, curioso e movido por desafios que me permitem utilizar da criatividade para crescer tanto de forma técnica quanto pessoalmente.</p>
      `;
    } else if (tipo === 'formacao') {
      conteudo.innerHTML = `
        <h3>Formação Educacional e Idiomas</h3>
        <p>Graduando em Engenharia de Software.</p>
        <p>Curso técnico em Informática.</p>
        <p>Curso de Desenvolvimento de aplicações Web.</p> 
        <p>Falante de português nativo, inglês avançado e em curso no idioma italiano.</p>
      `;
    } else if (tipo === 'portfolio') {
      conteudo.innerHTML = `
        <h3>Portfólio</h3>
        <ul>
          <li><a href="#" target="_blank">Projeto 1 - Plugin de Minecraft</a></li>
          <li><a href="#" target="_blank">Projeto 2 - Jogo da Velha em Java</a></li>
          <li><a href="#" target="_blank">Projeto 3 - Gerenciador de arquivos em Delphi</a></li>
        </ul>
      `;
    } else if (tipo === 'contato') {
      conteudo.innerHTML = `
        <h3>Contato</h3>
        <p><strong>Email:</strong> davimaiagv@gmail.com</p>
        <p><strong>Telefone:</strong> (33) 99830-7506</p>
      `;
    }
  }
  
  document.getElementById('sol').addEventListener('click', () => {
    location.reload();
  });  