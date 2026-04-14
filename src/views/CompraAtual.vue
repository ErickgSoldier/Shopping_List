<script setup>
import { reactive } from 'vue'
const lista = reactive([
  {
    nome: '',
    qtde: 1,
    preco: 10,
    checked: false,
  },
  {
    nome: '',
    qtde: 1,
    preco: 15,
    checked: false,
  },
])

function calcularValor(item) {
  return (item.qtde * item.preco).toFixed(2)
}

function adicionar(index) {
  lista[index].checked = true
}
</script>

<template>
  <h1></h1>
  <div class="container">
    <table>
      <thead>
        <tr>
          <th>✔</th>
          <th>Item</th>
          <th>Qtde</th>
          <th>Valor</th>
          <th>Adicionar</th>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(item, index) in lista" :key="index">
          <!-- Coluna 1 -->
          <td>
            <input type="checkbox" v-model="item.checked" disabled />
          </td>

          <!-- Coluna 2 -->
          <td>
            {{ item.nome }}
          </td>

          <!-- Coluna 3 -->
          <td>
            <input type="number" v-model.number="item.qtde" min="1" />
          </td>

          <!-- Coluna 4 -->
          <td>R$ {{ calcularValor(item) }}</td>

          <!-- Coluna 5 -->
          <td>
            <button @click="adicionar(index)">Adicionar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.container {
  background: var(--bg);
  padding: 20px;
  border-radius: 12px;
}

table {
  width: 100%;
  border-collapse: collapse;
  background: var(--white);
  border-radius: 12px;
  overflow: hidden;
}

th {
  background: var(--primary);
  color: var(--white);
  padding: 12px;
}

td {
  padding: 10px;
  border-bottom: 1px solid var(--gray);
  text-align: center;
}

input[type='number'] {
  width: 60px;
  padding: 5px;
  border: 1px solid var(--gray);
  border-radius: 6px;
}

button {
  background: var(--primary);
  color: var(--white);
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}

button:hover {
  background: var(--primary-dark);
}
</style>

<!--Voltar aqui depois e refazer-->
