<template>
    <div class="container text-white text-center p-5">
        <h2>Lista de Subordinados</h2>
        <table class="table table-bordered mt-5">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Apellido</th>
                    <th>Oficio</th>
                    <th>Salario</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="empleado in empleados" :key="empleado.idEmpleado">
                    <td>{{ empleado.idEmpleado }}</td>
                    <td>{{ empleado.apellido }}</td>
                    <td>{{ empleado.oficio }}</td>
                    <td>{{ empleado.salario }}</td>
                </tr>
            </tbody>
        </table>
        <div class="bg-danger mt-4 mb-4 rounded-2 w-50 ms-auto me-auto py-3" v-if="empleados.length == 0">
            <h5>No existen subordinados para este usuario.</h5>
        </div>
        <div class="container">
            <a class="btn btn-primary me-2">Volver</a>
            <button class="btn btn-danger ms-2">Logout</button>
        </div>
    </div>
</template>

<script>
import EmpleadosService from "../services/EmpleadosService";

const service = new EmpleadosService();

export default {
    name: "SubordinatesComponent",
    data() {
        return {
            empleados: []
        }
    },
    mounted() {
        if (service.getToken() == null) {
            this.$router.push('/login');
        }
        else {
            service.getSubordinados().then(response => {
                this.empleados = response.data;
            });
        }
    }
}

</script>

<style></style>