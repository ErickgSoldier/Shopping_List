<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const menuAberto = ref(false)
const sidebarRef = ref(null)

function toggleMenu() {
  menuAberto.value = !menuAberto.value
}

function handleClickOutside(event) {
  if (menuAberto.value && sidebarRef.value && !sidebarRef.value.contains(event.target)) {
    menuAberto.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div class="layout">
    <header class="header">
      <div class="left">
        <button class="menu-btn" @click.stop="toggleMenu">☰</button>
      </div>

      <h1 class="title">Shopping List</h1>

      <div class="right">
        <button class="config-btn">⚙</button>
      </div>
    </header>

    <aside v-show="menuAberto" ref="sidebarRef" class="sidebar">
      <ul>
        <li>
          <router-link to="/"><button>Home</button></router-link>
        </li>
        <li>
          <router-link to="/listacompras"><button>Listas</button></router-link>
        </li>
        <li>
          <router-link to="/cadastroItem"><button>Adicionar item</button></router-link>
        </li>
        <li>
          <router-link to="/cadastroLista"><button>Adicionar Lista</button></router-link>
        </li>
        <li>
          <router-link to="/relatorios"><button>Relatórios</button></router-link>
        </li>
      </ul>
    </aside>

    <main class="content">
      <router-view />
    </main>

    <footer class="footer">
      <span>Developed by Erick Martins</span>
    </footer>
  </div>
</template>
