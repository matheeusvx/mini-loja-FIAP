# 🛒 App Carrinho (React Native)

Um aplicativo simples de e-commerce feito com **React Native**, que permite visualizar produtos, adicionar itens ao carrinho e calcular o valor total.

---

## 📱 Funcionalidades

* ✅ Listagem de produtos
* ✅ Adicionar produtos ao carrinho
* ✅ Contador de itens no carrinho
* ✅ Visualização dos itens adicionados
* ✅ Cálculo automático do total da compra
* ✅ Navegação simples entre telas

---

## 🧱 Estrutura do Projeto

```
/data
  └── produtos.js

/context
  └── CarrinhoContext.js

/screens
  ├── ProdutosScreen.js
  └── CarrinhoScreen.js

App.js
```

---

## 📦 Tecnologias Utilizadas

* React Native
* Expo (recomendado)
* Context API (gerenciamento de estado)

---

## 🚀 Como rodar o projeto

### 1. Clone o repositório

```
git clone <seu-repo>
cd <nome-do-projeto>
```

### 2. Instale as dependências

```
npm install
```

ou

```
yarn
```

---

### 3. Inicie o projeto

Se estiver usando Expo:

```
npx expo start
```

---

### 4. Abra no dispositivo

* 📱 **Celular:** escaneie o QR Code com o Expo Go
* 🤖 **Android:** pressione `a` no terminal
* 🍎 **iOS:** pressione `i` (apenas Mac)

---

## 🛠️ Como funciona

### 📌 Produtos

Os produtos estão mockados no arquivo:

```
data/produtos.js
```

Exemplo:

```js
{ id: '1', nome: '🎧 Fone Bluetooth', preco: 199.90 }
```

---

### 🛒 Carrinho (Context API)

O estado global do carrinho é gerenciado em:

```
context/CarrinhoContext.js
```

Funções disponíveis:

* `adicionar(produto)` → adiciona item ao carrinho
* `carrinho` → lista de itens

---

### 📺 Telas

#### ProdutosScreen

* Lista os produtos
* Permite adicionar ao carrinho

#### CarrinhoScreen

* Exibe os itens adicionados
* Mostra o valor total da compra

---

## 💰 Cálculo do total

O total é calculado com:

```js
const total = carrinho.reduce((soma, item) => soma + item.preco, 0);
```

---

## 🔄 Navegação

A navegação é feita de forma simples usando `useState` no `App.js`:

```js
const [tela, setTela] = useState('produtos');
```

---

## 📌 Melhorias futuras

* 🔄 Remover itens do carrinho
* 🔢 Alterar quantidade de produtos
* 💾 Persistência com AsyncStorage
* 🚀 Navegação com React Navigation
* 💳 Integração com pagamento

---

## 🤝 Contribuição

Sinta-se à vontade para contribuir com melhorias!

---

## 📄 Licença

Este projeto é apenas para fins de estudo.
