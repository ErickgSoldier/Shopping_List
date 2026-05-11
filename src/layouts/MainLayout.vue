<script setup>
// sem lógica por enquanto
</script>

<template>
  <div class="app-layout">
    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="logo">
        <h1>ShoppingList</h1>
      </div>

      <nav class="menu">
        <button class="menu-item active">🏠 Início</button>
        <button class="menu-item">📋 Minhas listas</button>
        <button class="menu-item">⚙️ Config</button>
      </nav>
    </aside>

    <!-- Conteúdo principal -->
    <main class="content">
      <!-- Header -->
      <header class="topbar">
        <div>
          <h2>Minha Lista</h2>
          <p>Visual Home</p>
        </div>

        <button class="new-list-btn">
          + Nova Lista
        </button>
      </header>

      <!-- Área dinâmica -->
      <section class="dynamic-area">
        <div class="placeholder">
          <h3>Área dinâmica da lista</h3>
          <p>
            Aqui futuramente vai renderizar os itens da lista
            escolhida pelo usuário.
          </p>
        </div>
      </section>
    </main>
  </div>
</template>

<style scoped>
/* ===== PALETA =====
Primária: #4F46E5
Secundária: #6366F1
Background: #0F172A
Cards: #1E293B
Texto: #F8FAFC
Texto secundário: #94A3B8
Hover: #312E81
==================== */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Segoe UI", sans-serif;
}

.app-layout {
  display: flex;
  min-height: 100vh;
  background: #0f172a;
  color: #f8fafc;
}

/* ===== SIDEBAR ===== */
.sidebar {
  width: 250px;
  background: #111827;
  border-right: 1px solid #1e293b;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
}

.logo {
  margin-bottom: 40px;
}

.logo h1 {
  font-size: 1.6rem;
  color: #6366f1;
}

.menu {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.menu-item {
  background: transparent;
  border: none;
  color: #cbd5e1;
  padding: 14px;
  border-radius: 12px;
  text-align: left;
  cursor: pointer;
  transition: 0.2s;
  font-size: 0.95rem;
}

.menu-item:hover {
  background: #1e293b;
}

.menu-item.active {
  background: #4f46e5;
  color: white;
}

/* ===== CONTEÚDO ===== */
.content {
  flex: 1;
  padding: 28px;
  display: flex;
  flex-direction: column;
}

/* ===== TOPO ===== */
.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
}

.topbar h2 {
  font-size: 2rem;
  margin-bottom: 4px;
}

.topbar p {
  color: #94a3b8;
}

.new-list-btn {
  background: #4f46e5;
  color: white;
  border: none;
  padding: 12px 18px;
  border-radius: 12px;
  cursor: pointer;
  transition: 0.2s;
  font-weight: bold;
}

.new-list-btn:hover {
  background: #4338ca;
}

/* ===== ÁREA DINÂMICA ===== */
.dynamic-area {
  flex: 1;
  background: #1e293b;
  border-radius: 20px;
  padding: 24px;
  border: 1px solid #334155;
  display: flex;
  justify-content: center;
  align-items: center;
}

.placeholder {
  text-align: center;
  color: #94a3b8;
}

.placeholder h3 {
  margin-bottom: 10px;
  color: #f8fafc;
}

/* ===== RESPONSIVO ===== */
@media (max-width: 768px) {
  .sidebar {
    width: 90px;
  }

  .logo h1 {
    font-size: 1rem;
  }

  .menu-item {
    font-size: 0.8rem;
    padding: 10px;
  }

  .topbar {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
}
</style>