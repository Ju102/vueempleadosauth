<template>
    <div class="container">
        <h1>Datos del Equipo</h1>
        <div v-if="dataEquipo">
            <div class="card mt-4">
                <div class="card-header">
                    <h3>Equipo</h3>
                </div>
                <div class="card-body">
                    <pre>{{ dataEquipo.equipo }}</pre>
                </div>
            </div>
            <div class="card mt-4">
                <div class="card-header">
                    <h3>Jugadores</h3>
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li v-for="(jugador, index) in dataEquipo.jugadores" :key="index" class="list-group-item">
                            {{ jugador }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div v-else>
            <p>Cargando datos...</p>
        </div>
    </div>
</template>


<!--
npm install vue-router@next --save
npm install axios
-->
<script>
import EmpleadosService from '@/services/EmpleadosService';

const service = new EmpleadosService();

export default {
    name: "DobleComponent",
    data() {
        return {
            dataEquipo: null
        }
    },
    mounted() {
        this.loadDataEquipo();
    },
    methods: {
        loadDataEquipo() {
            service.getDataEquipo().then((data) => {
                this.dataEquipo = data;
                console.log("Datos de equipo cargados:", data);
            }).catch((error) => {
                console.error("Error al cargar datos de equipo:", error);
            });
        }
    }
}
</script>

<style></style>