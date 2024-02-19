# Como criar um projeto Angular do zero:

1. **Baixe e instale o Node.js (a versão LTS é a 20.11):**
sudo apt-get update && sudo apt-get install -y ca-certificates curl gnupg
curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | sudo gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg
NODE_MAJOR=20
echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | sudo tee /etc/apt/sources.list.d/nodesource.list
sudo apt-get update && sudo apt-get install nodejs -y

2. **Atualize o npm se necessário:**
npm install -g npm@latest

2. **Baixar a versão 14 do Angular (apenas se o projeto for igual a esse):**
sudo npm install -g @angular/cli@14
ng version (para confirmar a versão baixada)

2. **Iniciar um projeto novo**
ng new nome-do-projeto

2. **Rodar o projeto**
npm start ou ng serve