<!--Essa tela deve ser acessada através do botão de adicionar item que será colocado na tela de lista de items -->

<script setup>
import { reactive } from 'vue'

const form = reactive({
  nome: '',
  tipoUnidade: '',
  quantidade: null,
  valor: null,
})

function salvar() {
  if (!form.nome || !form.tipoUnidade || !form.quantidade || !form.valor) {
    alert('Preencha todos os campos obrigatórios')
    return
  }

  const item = {
    nome: form.nome,
    unidade: form.tipoUnidade,
    quantidade: form.quantidade,
    valor: form.valor,
  }

  console.log('Item salvo:', item)

  form.nome = ''
  form.tipoUnidade = ''
  form.quantidade = null
  form.valor = null
}
</script>

<template>
  <div class="container">
    <h1>Cadastro de Item</h1>

    <!-- Campo 1 -->
    <div class="campo">
      <label>Nome do item *</label>
      <input type="text" v-model="form.nome" />
    </div>

    <!-- Campo 2 -->
    <div class="campo">
      <label>Unidade de medida *</label>

      <div class="linha">
        <select v-model="form.tipoUnidade">
          <option disabled value="">Selecione</option>
          <option value="unidade">Unidade</option>
          <option value="caixa">Caixa</option>
        </select>

        <input type="number" placeholder="Qtd" v-model.number="form.quantidade" min="1" />
      </div>
    </div>

    <!-- Campo 3 -->
    <div class="campo">
      <label>Valor *</label>
      <input type="number" v-model.number="form.valor" step="0.01" />
    </div>

    <!-- Botão -->
    <button @click="salvar">Salvar</button>
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
  color: var(--text);
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

input,
select {
  padding: 8px;
  border: 1px solid var(--gray);
  border-radius: 6px;
}

.linha {
  display: flex;
  gap: 10px;
}

.linha input {
  width: 80px;
}

button {
  width: 100%;
  padding: 10px;
  background: var(--primary);
  color: var(--white);
  border: none;
  border-radius: 8px;
  cursor: pointer;
}

button:hover {
  background: var(--primary-dark);
}
</style>
