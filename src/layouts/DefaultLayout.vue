<script setup></script>

<template>
  <div class="layout">
    <header class="header">
      <div class="left">
        <button class="menu-btn">☰</button>
      </div>

      <h1 class="title">Shopping List</h1>

      <div class="right">
        <button class="config-btn">⚙</button>
      </div>
    </header>

    <main class="content">
      <slot />
    </main>

    <footer class="footer">
      <span>Footer</span>
    </footer>
  </div>
</template>
