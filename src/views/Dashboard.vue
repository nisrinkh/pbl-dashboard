<template>
  <div class="dashboard">

    <!-- Sidebar -->
    <aside class="sidebar">
      <div class="red-strip"></div>

      <div class="sidebar-content">

        <!-- Top Menu -->
        <div>
          <div class="menu-row">
            <span>All Messages</span>
            <strong>50</strong>
          </div>

          <div class="menu-row">
            <span>Unread</span>
          </div>

          <div class="line"></div>

        <button class="menu-btn" @click="goRiwayat">
            Riwayat Chat
        </button>
        </div>

        <!-- Logout -->
        <button class="logout-btn" @click="goHome">
          Logout ↪
        </button>

      </div>
    </aside>

    <!-- Main Content -->
    <main class="main-content">
      <div class="welcome-text">
        Selamat Datang, Admin!
      </div>
    </main>

  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

const goRiwayat = () => {
  router.push('/history')
}

const goHome = () => {
  router.push('/')
}
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.dashboard {
  display: flex;
  min-height: 100vh;
}

/* ======================
   SIDEBAR
====================== */
.sidebar {
  width: 265px;
  background: #242741;
  display: flex;
}

.red-strip {
  width: 55px;
  background: #ef0033;
}

.sidebar-content {
  flex: 1;
  padding: 60px 18px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Menu */
.menu-row {
  display: flex;
  justify-content: space-between;
  color: white;
  font-size: 14px;
  margin-bottom: 12px;
}

.line {
  height: 2px;
  background: white;
  margin: 14px 0;
}

.menu-btn {
  width: 100%;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: bold;
  background: white;
  cursor: pointer;
}

/* Logout */
.logout-btn {
  border: none;
  background: white;
  padding: 12px;
  border-radius: 15px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
}

/* ======================
   MAIN
====================== */
.main-content {
  flex: 1;
  background: #d9dddf;
  display: flex;
  justify-content: center;
  align-items: center;
}

.welcome-text {
  font-size: 28px;
  font-weight: 700;
  color: #666;
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    width: 220px;
  }

  .welcome-text {
    font-size: 22px;
    text-align: center;
    padding: 20px;
  }
}
</style>