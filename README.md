# Instruções para Rodar e Testar a Aplicação

Este guia fornecerá instruções sobre como rodar e testar a aplicação, bem como acessar suas diferentes rotas.

## Pré-requisitos

Antes de começar, certifique-se de ter o seguinte instalado em sua máquina:

- Node.js em sua versão LTS, de preferência, e npm 

## Passos para Executar a Aplicação

Siga os passos abaixo para rodar a aplicação:

1. **Instalação de Dependências:**

   Abra o terminal e navegue até o diretório raiz do projeto. Execute o seguinte comando para instalar as dependências necessárias:

   ```
   npm install
   ```

2. **Execução da Aplicação:**

   Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar a aplicação:

   ```
   npm run dev
   ```

3. **Acesso à Aplicação:**

   Uma vez que a aplicação seja iniciada com sucesso, você pode acessá-la em seu navegador web utilizando o seguinte endereço:

   ```
    http://localhost:5173/login
   ```

## Testando a Aplicação

Para testar a aplicação, siga os seguintes passos:

1. **Testes Manuais:**

   Você também pode testar manualmente a aplicação acessando-a no navegador e interagindo com suas diferentes funcionalidades e páginas.

## Acessando as Rotas da Aplicação
   Você poderá utilizar a principio um dos três usuários que estão hardcoded para logar no sistema

- Email: alice@example.com, Senha: senhaAlice
- Email: bob@example.com, Senha: senhaBob
- Email: charlie@example.com, Senha: senhaCharlie

A aplicação possui as seguintes rotas disponíveis:

- `/login`: Página de login.
- `/mainHome`: Página principal.
- `/userHome/:id`: Página de home do usuário, onde `:id` é o identificador do usuário.
- `/userInfos/:id`: Página de informações do usuário, onde `:id` é o identificador do usuário.
- `/squad`: Página de squads.
- `/cadastroparticipantes`: Página para cadastrar participantes.
- `/cadastrosquad`: Página para cadastrar squads.
- `/cadastrotask`: Página para cadastrar tasks.
- `/admin`: Página de administração.

Você pode acessar essas rotas adicionando a rota correspondente ao final do endereço raiz da aplicação.

---

Com estas instruções, você deve ser capaz de rodar, testar e explorar a aplicação de forma adequada.

Achamos alguns problemas relacionado aos armazenamento de estados das paginas da aplicação, pelo fato de que, no presente momento, todos estão hardcoded, para fins de demonstração,
logo, ao atualizar a pagina, se tentar retornar para alguma pagina cujo seja necessario o id de algum integrante, irá receber um 404, pois o estado estará
resetado, problema esse que será resolvido futuramente com a implementação de um sistema de autenticação e sessões

Algumas features podem estar redundantes ou exageradas, o que será resolvido futuramente, com a resolução de débitos tecnicos de todos os integrantes da equipe
e com um melhor alinhamento da mesma e melhor definição do escopo da aplicação, assim também, uma melhor elicitação de requisitos.
