# Churras App 🔥

# Aplicação 🚀

Esse projeto foi criado para que possamos cadastrar um evento (de preferência um churras) para adicionar as pessoas que irão participar, e com o valor que ela irá contribuir.

# Links das Aplicações

### Front-end 💻

🚀 Repositório: https://github.com/KevinPagliuca/barbecue-front

🔥 Deploy: **[barbecue-front.vercel.app](http://barbecue-front.vercel.app/)**

### Back-end 🛠

🚀 Repositório: https://github.com/KevinPagliuca/barbecue-backend

🔥 Deploy: [https://barbecue-backend.herokuapp.com/](https://barbecue-backend.herokuapp.com/)

# Funcionalidades

- Login
- Registro
- Editar perfil
- Excluir perfil
- Alterar senha
- Cadastro de churras
- Listagem de todos os churras do sistema
- Listagem de todos os churras cadastrados pelo usuário logado.
- Editar churras cadastrados pelo usuário logado
- Adicionar participantes no churras
- Excluir churras

# Techs e Libs importantes utilizadas

- **Front-end**
  - **TypeScript**
  - **React.js**
  - **Next.js**
  - Styled Components
  - React Hook Form
  - React Query
  - Date-fns
  - Axios
  - Yup
  - Nookies
- **Back-end**
  - **TypeScript**
  - **Node.js**
  - **prisma.io**
  - **postgres**
  - Express
  - bcryptjs
  - Cors
  - jsonwebtoken

## Descrição do Front-end

<aside>
O sistema conta com todos os formulários seguido de validações, para que nenhum dado importante não deixe de ser mandado, como por exemplo, no login da aplicação, caso você não informe o e-mail ou senha, os campos irão validar para que não envie essa solicitação para o back-end, assim evitando quebras na regra de negócio.

Também foi utilizada as funcionalidades do Next.js de redirecionar o usuário caso ele tente entrar nas páginas protegidas do sistema se ele não estiver autenticado...

Na área logada temos acesso a listagem de todos os churras do sistema, e também todos os churras cadastrados pelo usuário que está autenticado.

</aside>

## Descrição do Back-end

<aside>
O back-end construído com o PrismaORM, conta com validações de autenticação feita por Middleware para que somente usuários autenticados consigam fazer ações no banco de dados, como cadastro, atualização e exclusão de churras e até mesmo a listagem.

</aside>

### Observações

Foi configurado o CI/CD de ambas as aplicações para que cada commit feito gerar um novo build atualizado da aplicação.
