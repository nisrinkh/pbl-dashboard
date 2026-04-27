<template>
  <div class="page">
    <!-- HEADER -->
    <!-- TEMPLATE HEADER -->
<header class="header">
  <div class="header-left">
    <img :src="logo" alt="logo" class="header-logo" />
    <span>Bakesbangpol Boyolali</span>
  </div>

  <!-- BUTTON BACK -->
  <button class="back-btn" @click="goHome">Back</button>
</header>

    <!-- LOGIN CONTENT -->
    <main class="main-content">
      <div class="login-card">
        <h2>Login</h2>

        <label>Email</label>
        <input v-model="email" type="email" placeholder="Masukkan email" />

        <label>Password</label>
        <input
          v-model="password"
          type="password"
          placeholder="Masukkan password"
        />

        <button class="login-btn" @click="login">Login</button>

        <div class="divider">
          <span></span>
          <p>atau</p>
          <span></span>
        </div>

        <button class="google-btn">
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="google"
          />
          Login dengan Google
        </button>

        <p class="forgot">Lupa Password? Klik di sini</p>
      </div>
    </main>

    <!-- FOOTER -->
    <footer class="footer">
      <div class="footer-container">
        <div class="footer-left">
          <img :src="logo" alt="logo" class="footer-logo" />

          <div class="footer-text">
            <h3>Badan Kesatuan Bangsa dan Politik</h3>
            <p>Kabupaten Boyolali</p>

            <div class="contact-item">
              <span class="icon">📞</span>
              <span>(0276) 321087</span>
            </div>

            <div class="contact-item">
              <span class="icon">✉️</span>
              <span>bakesbangpol@boyolali.go.id</span>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          Copyright@2026 Boyolali. Developed by System Hub
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import logo from "../assets/Logo_Boyo2.png"

const router = useRouter()

const email = ref("")
const password = ref("")

const login = () => {
  if (!email.value || !password.value) {
    alert("Isi email dan password!")
    return
  }

  router.push("/")
}

/* tombol back */
const goHome = () => {
  router.push("/")
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
}

/* PAGE */
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #8d96a6;
}

/* HEADER */
.header {
  height: 55px;
  background: #252742;
  display: flex;
  justify-content: space-between;   /* penting */
  align-items: center;
  padding: 0 22px;
}

.header-left {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  font-size: 22px;
  font-weight: bold;
}

.header-logo {
  width: 30px;
  height: 30px;
  object-fit: contain;
}

.back-btn {
  border: none;
  background: white;
  color: #252742;
  padding: 8px 22px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 14px;
  cursor: pointer;
  transition: 0.2s;
}

.back-btn:hover {
  background: #eaeaea;
}
/* MAIN */
.main-content {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
}

/* LOGIN CARD */
.login-card {
  width: 420px;
  background: #f3163a;
  border-radius: 28px;
  padding: 35px;
  color: white;
  text-align: center;
}

.login-card h2 {
  font-size: 24px;
  margin-bottom: 22px;
}

.login-card label {
  display: block;
  text-align: left;
  margin-top: 14px;
  margin-bottom: 6px;
  font-size: 14px;
}

.login-card input {
  width: 100%;
  padding: 14px 18px;
  border: none;
  border-radius: 30px;
  outline: none;
  font-size: 14px;
}

.login-btn {
  margin-top: 18px;
  border: none;
  background: white;
  color: black;
  font-weight: bold;
  padding: 10px 28px;
  border-radius: 25px;
  cursor: pointer;
  font-size: 15px;
}

.divider {
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 22px 0;
}

.divider span {
  flex: 1;
  height: 2px;
  background: white;
}

.divider p {
  font-size: 14px;
}

.google-btn {
  width: 100%;
  border: none;
  border-radius: 25px;
  padding: 10px;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  font-size: 14px;
}

.google-btn img {
  width: 18px;
}

.forgot {
  margin-top: 18px;
  font-size: 13px;
  cursor: pointer;
}

/* FOOTER */
.footer {
  background: #f3f3f3;
  padding: 35px 55px 15px;
  border-top: 1px solid #ddd;
}

.footer-container {
  display: flex;
  flex-direction: column;
}

.footer-left {
  display: flex;
  align-items: flex-start;
  gap: 18px;
}

.footer-logo {
  width: 34px;
  height: 34px;
  object-fit: contain;
  margin-top: 4px;
}

.footer-text h3 {
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #111;
}

.footer-text p {
  margin: 2px 0 18px;
  font-size: 14px;
  color: #444;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
  font-size: 14px;
  color: #222;
}

.icon {
  width: 18px;
  text-align: center;
}

.footer-bottom {
  margin-top: 35px;
  font-size: 13px;
  color: #333;
}

/* RESPONSIVE */
@media (max-width: 600px) {
  .login-card {
    width: 100%;
  }

  .footer {
    padding: 25px;
  }

  .footer-text h3 {
    font-size: 18px;
  }

  .header-left {
    font-size: 18px;
  }
}
</style>