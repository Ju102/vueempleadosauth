<template>
    <h1>profile</h1>
    <table>
        <tr>
            <td>Nombre:</td>
            <td>{{ empleado.idEmpleado }}</td>
        </tr>
        <tr>
            <td>Apellido:</td>
            <td>{{ empleado.apellido }}</td>
        </tr>
        <tr>
            <td>Email:</td>
            <td>{{ empleado.salario }}</td>
        </tr>
    </table>
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
        service.getEmpleado().then(response => {
            this.empleado = response.data;
        });
    }
}

</script>

<style></style>