Weather Insight
Weather Insight é uma aplicação Next.js que exibe informações meteorológicas. Esta aplicação está configurada para desenvolvimento, construção e execução com Docker e possui uma integração com Storybook para desenvolvimento de componentes.

Requisitos
Certifique-se de ter os seguintes softwares instalados em seu sistema:

Docker
Node.js (para desenvolvimento local)
Yarn (opcional, mas recomendado)
Configuração do Projeto

1. Clonar o Repositório
   bash
   Copiar código
   git clone https://github.com/matheusantonio48/weather-insight.git
   cd weather-insight
2. Configurar Variáveis de Ambiente
   Crie um arquivo .env na raiz do projeto e adicione suas variáveis de ambiente:

env
Copiar código
NEXT_HGBRASIL_API_URL=https://api.hgbrasil.com
NEXT_HGBRASIL_API_KEY=sua_chave_de_api_aqui
NODE_ENV=development 3. Configurar Docker
O projeto está configurado para usar Docker para desenvolvimento e produção. Certifique-se de que o Docker está instalado e configurado em seu sistema.

4. Subir os Containers Docker
   Para iniciar os containers Docker, execute:

bash
Copiar código
docker-compose up --build
Isso irá construir e iniciar os serviços app e storybook conforme definido no arquivo docker-compose.yml.

5. Acessar a Aplicação
   A aplicação Next.js estará disponível em http://localhost:3000
   O Storybook estará disponível em http://localhost:6006
6. Acessar a Aplicação no Vercel
   A aplicação está disponível no Vercel e pode ser acessada no seguinte endereço: Weather Insight no Vercel

Scripts Disponíveis
No package.json, os seguintes scripts estão disponíveis:

dev: Inicia o servidor de desenvolvimento Next.js.
build: Compila a aplicação Next.js para produção.
start: Inicia o servidor Next.js em modo de produção.
lint: Executa o ESLint para verificar o código.
test: Executa os testes com Jest.
check-types: Verifica os tipos TypeScript.
check-format: Verifica o formato do código com Prettier.
format: Formata o código com Prettier.
prepare: Configura o Husky para ganchos de pré-commit.
prepare-commit: Executa lint-staged antes do commit.
clear: Remove node_modules e yarn.lock.
storybook: Inicia o Storybook para desenvolvimento de componentes.
build-storybook: Compila o Storybook para produção.
