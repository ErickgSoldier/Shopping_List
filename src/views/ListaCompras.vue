<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const listas = ref([
  { id: 1, nome: 'Compra do mês' },
  { id: 2, nome: 'Mercado rápido' },
])

function irParaCadastro() {
  router.push('/cadastroLista')
}

function abrirLista(lista) {
  router.push(`/lista/${lista.id}`)
}

// 3 - Editar lista
function editarLista(lista) {
  const novoNome = prompt('Editar nome:', lista.nome)
  if (!novoNome) return

  lista.nome = novoNome
}

// 4 - Excluir com confirmação
function excluirLista(id) {
  const confirmar = confirm('Tem certeza que deseja excluir esta lista?')
  if (!confirmar) return

  listas.value = listas.value.filter((l) => l.id !== id)
}
</script>

<template>
  <div class="container">
    <h1>Listas de Compras</h1>

    <!-- Botão adicionar -->
    <button class="btn-add" @click="irParaCadastro">+ Nova Lista</button>

    <table>
      <tbody>
        <tr v-for="lista in listas" :key="lista.id">
          <!-- Coluna 1 (clicável) -->
          <td class="clicavel" @click="abrirLista(lista)">
            {{ lista.nome }}
          </td>

          <!-- Coluna 2 -->
          <td>
            <button class="btn-editar" @click.stop="editarLista(lista)">Editar</button>
          </td>

          <!-- Coluna 3 -->
          <td>
            <button class="btn-excluir" @click.stop="excluirLista(lista.id)">Excluir</button>
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
  border-radius: var(--radius);
}

h1 {
  margin-bottom: 15px;
  color: var(--text);
}

/* BOTÃO ADICIONAR */
.btn-add {
  margin-bottom: 15px;
  padding: 10px;
  width: 100%;
  background: var(--primary);
  color: var(--white);
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
}

.btn-add:hover {
  background: var(--primary-dark);
}

/* TABELA */
table {
  width: 100%;
  border-collapse: collapse;
  background: var(--white);
  border-radius: var(--radius);
  overflow: hidden;
}

td {
  padding: 10px;
  border-bottom: 1px solid var(--gray);
}

/* LINHA CLICÁVEL */
.clicavel {
  cursor: pointer;
  transition: var(--transition);
}

.clicavel:hover {
  color: var(--primary);
  font-weight: bold;
}

/* BOTÕES */
button {
  padding: 6px 10px;
  border: none;
  border-radius: var(--radius);
  cursor: pointer;
  color: var(--white);
  transition: var(--transition);
}

.btn-editar {
  background: var(--primary);
}

.btn-editar:hover {
  background: var(--primary-dark);
}

.btn-excluir {
  background: #ef4444;
}

.btn-excluir:hover {
  background: #dc2626;
}
</style>
