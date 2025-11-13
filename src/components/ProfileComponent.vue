<template>
    <div class="container text-white text-center p-5">
        <h2>Información personal</h2>
        <table class="table table-bordered mt-5">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                    <th>Director</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{{ empleado.idEmpleado }}</td>
                    <td>{{ empleado.apellido }}</td>
                    <td>{{ empleado.oficio }}</td>
                    <td>{{ empleado.salario }}</td>
                    <td>{{ empleado.director }}</td>
                </tr>
            </tbody>
        </table>
        <div class="container">
            <a class="btn btn-primary me-2">Ver Subordinados</a>
            <button class="btn btn-danger ms-2">Logout</button>
        </div>
    </div>
</template>

<script>
import EmpleadosService from "../services/EmpleadosService";

const service = new EmpleadosService();

export default {
    name: "ProfileComponent",
    data() {
        return {
            empleado: {}
        }
    },
    mounted() {
        if (service.getToken() == null) {
            this.$router.push('/login');
        }
        else {
            service.getEmpleado().then(response => {
                this.empleado = response.data;
            });
        }
    },
    methods: {
        logout() {
            service.logout();
            this.$router.push('/login');
        }
    }
}

</script>

<style></style>