// Seleciona a seção about
const sobre = document.querySelector("#about");

// Seleciona o formulario
const formulario = document.querySelector("#formulario");

// Cria a Expressão Regular, que será utilizada para validar o e-mail
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// Cria a função responsável por preencher o conteúdo da Seção about
async function getApiGithub(){

    try{

        // Consulta as informações do Perfil do Github, através de uma Requisição HTTP
        const dadosPerfil = await fetch(`https://api.github.com/users/rafaelq80`);

        // Converte a resposta para o formato JSON
        const perfil = await dadosPerfil.json();

        // Monta o conteúdo na variável
        let conteudo = `
        
              <!-- Foto do Perfil do Github -->
            <img src="${perfil.avatar_url}" alt="Foto do Perfil - ${perfil.name}">

            <!-- Texto Sobre você -->
            <article id="sobre_texto">

                <h1>Sobre mim</h1>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Quibusdam odit voluptates incidunt inventore rem error harum
                    blanditiis accusamus vitae, minus fugit consequatur?
                    Dolorum maiores magni deleniti modi sit laudantium totam!
                </p>

                <!-- Informações do Github -->
                <div id="sobre_github" class="flex sobre_github">

                    <a class="botao" target="_blank" href="${perfil.html_url}">Github</a>
                    <p>${perfil.followers} Seguidores</p>
                    <p>${perfil.public_repos} Repositórios</p>

                </div>

            </article>

        `

        // Insere o conteúdo na seção about
        sobre.innerHTML = conteudo;

    }catch(error){
        console.error(error);
    }
}

// Função de validação do formulário
formulario.addEventListener('submit', function(event) {
  
    // Impede o envio do Formulário
    event.preventDefault();
  
    const campoNome = document.querySelector('#name');
    const txtNome = document.querySelector('#txtNome');
  
    // Valida o campo name
    if (campoNome.value.length < 3) {
      txtNome.innerHTML = 'O Nome deve ter no minimo 3 caracteres.';
      campoNome.focus();
      return;
    }else{
      txtNome.innerHTML = '';
    }
  
    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');
  
     // Valida o campo e-mail
    if (!campoEmail.value.match(emailRegex)) {
      txtEmail.innerHTML = 'Digite um E-mail válido.';
      campoEmail.focus();
      return;
    }else{
      txtEmail.innerHTML = '';
    }
  
    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
  
     // Valida o campo subject
    if (campoSubject.value.length < 5) {
      txtSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
      campoSubject.focus();
      return;
    }else{
      txtSubject.innerHTML = '';
    }

    // Se todas as validações forem concluídas com êxito, envia o formulário
    formulario.submit();
  
  });

// Executa a função de preenchimento sa seção about
getApiGithub();