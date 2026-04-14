<!--Aqui preciso de campo para nome da lista que será obrigatório + opção de adicionar items na lista + botão para salvar -->

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nomeLista: '',
  itens: [],
})

// simulação de item (depois vem da tela de cadastro)
function adicionarItem() {
  form.itens.push({
    nome: 'Item exemplo',
    quantidade: 1,
  })
}

function removerItem(index) {
  form.itens.splice(index, 1)
}

function salvar() {
  if (!form.nomeLista) {
    alert('Nome da lista é obrigatório')
    return
  }

  if (form.itens.length === 0) {
    alert('Adicione pelo menos um item na lista')
    return
  }

  const lista = {
    nome: form.nomeLista,
    itens: form.itens,
  }

  console.log('Lista salva:', lista)

  // limpar formulário
  form.nomeLista = ''
  form.itens = []
}
</script>

<template>
  <div class="container">
    <h1>Cadastro de Lista</h1>

    <!-- Nome da lista -->
    <div class="campo">
      <label>Nome da lista *</label>
      <input type="text" v-model="form.nomeLista" />
    </div>

    <!-- Botão adicionar item -->
    <button class="add-btn" @click="adicionarItem">+ Adicionar Item</button>

    <!-- Lista de itens -->
    <div v-if="form.itens.length > 0" class="lista-itens">
      <div v-for="(item, index) in form.itens" :key="index" class="item">
        <span>{{ item.nome }} ({{ item.quantidade }})</span>
        <button class="remove-btn" @click="removerItem(index)">Remover</button>
      </div>
    </div>

    <!-- Salvar -->
    <button class="salvar-btn" @click="salvar">Salvar Lista</button>
  </div>
</template>

<style scoped>
:root {
  --primary: #4863fa;
  --primary-dark: #3b52d6;
  --primary-light: #6f85ff;

  --bg: #f5f7ff;
  --white: #ffffff;
  --text: #1e1e1e;
  --gray: #e5e7eb;
}

.container {
  background: var(--bg);
  padding: 20px;
  border-radius: 12px;
  max-width: 400px;
}

h1 {
  margin-bottom: 20px;
}

.campo {
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
}

label {
  margin-bottom: 5px;
  font-weight: bold;
}

input {
  padding: 8px;
  border: 1px solid var(--gray);
  border-radius: 6px;
}

.add-btn {
  margin-bottom: 15px;
  padding: 8px;
  background: var(--primary-light);
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;
}

.lista-itens {
  margin-bottom: 15px;
}

.item {
  display: flex;
  justify-content: space-between;
  background: var(--white);
  padding: 8px;
  border-radius: 6px;
  margin-bottom: 8px;
}

.remove-btn {
  background: red;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.salvar-btn {
  width: 100%;
  padding: 10px;
  background: var(--primary);
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

.salvar-btn:hover {
  background: var(--primary-dark);
}
</style>
