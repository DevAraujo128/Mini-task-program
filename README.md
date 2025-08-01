# 📋 Mini Task Program

Um programa de linha de comando para gerenciamento de tarefas desenvolvido em Node.js com interface interativa e colorida.

## 🚀 Funcionalidades

- **Criar tarefas**: Adicione novas tarefas com nome único
- **Listar tarefas**: Visualize todas as tarefas com status colorido
- **Atualizar tarefas**: Modifique nome e status das tarefas
- **Deletar tarefas**: Remova tarefas do sistema
- **Persistência de dados**: Tarefas são salvas automaticamente em arquivo JSON
- **Interface interativa**: Menu baseado em prompts com navegação intuitiva

## 📦 Status das Tarefas

O sistema suporta três status diferentes, cada um com sua cor distintiva:

- 🟡 **Em andamento** - Tarefas em progresso
- 🟢 **Concluído** - Tarefas finalizadas
- 🔴 **Cancelada** - Tarefas canceladas

## 🛠️ Tecnologias Utilizadas

- **Node.js** - Runtime JavaScript
- **@clack/prompts** - Interface de prompts interativa
- **chalk** - Formatação e cores no terminal
- **ES Modules** - Sistema de módulos moderno

## 📁 Estrutura do Projeto

```
Mini-task-program/
├── package.json          # Configurações e dependências
├── src/
│   ├── index.js         # Ponto de entrada da aplicação
│   ├── task.json        # Arquivo de persistência das tarefas
│   ├── manager/
│   │   └── task.js      # Gerenciador de tarefas
│   └── menus/
│       ├── main.js      # Menu principal
│       ├── create.js    # Menu de criação
│       ├── list.js      # Menu de listagem
│       └── update.js    # Menu de atualização
```

## 🚀 Como Usar

### Pré-requisitos

- Node.js instalado (versão 14 ou superior)

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd Mini-task-program
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o programa:
```bash
npm run dev
```

### Navegação

1. **Menu Principal**: Escolha entre criar, listar ou sair
2. **Criar Tarefa**: Digite o nome da tarefa (deve ser único)
3. **Listar Tarefas**: Selecione uma tarefa para gerenciar
4. **Gerenciar Tarefa**: 
   - Alterar nome
   - Alterar status
   - Deletar tarefa
   - Voltar ao menu anterior

## 💾 Persistência de Dados

As tarefas são automaticamente salvas no arquivo `src/task.json` sempre que houver modificações. O arquivo é criado automaticamente na primeira execução.

### Estrutura dos Dados

```json
[
  {
    "name": "Nome da Tarefa",
    "status": "Em andamento",
    "createdAt": "2025-01-12T23:06:43.923Z"
  }
]
```

## 🎨 Interface

O programa utiliza cores e formatação para melhorar a experiência do usuário:

- **Verde**: Sucessos e conclusões
- **Amarelo**: Avisos e tarefas em andamento
- **Vermelho**: Erros e tarefas canceladas
- **Cinza**: Informações secundárias

## 🔧 Scripts Disponíveis

- `npm run dev`: Executa o programa
- `npm start`: Alias para `npm run dev`

## 📝 Exemplo de Uso

```
📋 Tarefas

Escolha o que deseja fazer:
❯ Criar uma nova Tarefa
  Listar Tarefa
  Sair

Digite o nome da tarefa:
> Estudar JavaScript

✅ Tarefa criada com sucesso!

Escolha o que deseja fazer:
❯ Criar uma nova Tarefa
  Listar Tarefa
  Sair
```

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👨‍💻 Autor

Desenvolvido como projeto final de programação

---

⭐ Se este projeto foi útil para você, considere dar uma estrela! 
