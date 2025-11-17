<template>
  <div class="container text-white pt-5">
    <form v-on:submit.prevent="tryLogin()" class="w-25 ms-auto me-auto rounded-3 border-black p-5"
      style="background-color: #004D61;">
      <h4 class="text-center fw-bold">Login</h4>
      <label class="form-label">Username: </label>
      <input class="form-control border-black" type="text" v-model="tryUser.userName"
        placeholder="Escribe tu username" />
      <label class="form-label">Password: </label>
      <input class="form-control border-black" type="text" v-model="tryUser.password"
        placeholder="Escribe tu password" />
      <button class="btn btn-light fw-bold mt-4 w-50 border-black border-2 d-block mx-auto">Login</button>
    </form>
  </div>
</template>

<script>
import EmpleadosService from '@/services/EmpleadosService';


const service = new EmpleadosService();

export default {

  name: "LoginComponent",
  data() {
    return {
      tryUser: {
        userName: "",
        password: ""
      }
    }
  },
  methods: {
    tryLogin() {
      service.login(this.tryUser).then((response) => {
        const token = response && response.data && response.data.response;
        if (token) {
          console.log("Autenticación correcta. Redirigiendo a perfil...");
          service.saveToken(token);
          this.$router.push('/profile');
        } else {
          console.error("Token no recibido en la respuesta de login", response);
          alert("Error de autenticación: no se recibió token. Inténtalo de nuevo.");
        }
      }).catch((error) => {
        console.error("Error en login:", error);
        alert("Error de autenticación: usuario o contraseña incorrectos.");
      });
    }
  }
}

</script>

<style></style>