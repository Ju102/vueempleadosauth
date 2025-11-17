import axios from "axios";
import Global from "./../Global";

export default class EmpleadosService {

    login(user) {
        return new Promise(function (resolve, reject) {
            var request = "auth/login";
            var url = Global.apiEmpleados + request;

            axios.post(url, user).then((response) => {
                resolve(response);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    getEmpleado() {
        var request = "api/empleados/perfilempleado";
        var url = Global.apiEmpleados + request;

        return new Promise(function (resolve) {
            axios.get(url, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("auth_token")
                }
            }).then((response) => {
                resolve(response);
            });
        });
    }

    getSubordinados() {
        var request = "api/empleados/subordinados";
        var url = Global.apiEmpleados + request;

        return new Promise(function (resolve) {
            axios.get(url, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("auth_token")
                }
            }).then((response) => {
                resolve(response);
            });
        });
    }

    saveToken(token) {
        localStorage.setItem("auth_token", token);
    }

    getToken() {
        localStorage.getItem("auth_token");
    }

    removeToken() {
        localStorage.removeItem("auth_token");
    }

    getJugadores() {
        var request = "api/jugadores";
        var url = Global.apiEmpleados + request;

        return new Promise(function (resolve) {
            axios.get(url, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("auth_token")
                }
            }).then((response) => {
                resolve(response);
            });
        });
    }

    getEquipo() {
        var request = "api/equipo";
        var url = Global.apiEmpleados + request;

        return new Promise(function (resolve) {
            axios.get(url, {
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem("auth_token")
                }
            }).then((response) => {
                resolve(response);
            });
        });
    }

    getDataEquipo() {
        return Promise.all([
            this.getJugadores().catch(error => {
                console.error("Error al obtener jugadores:", error);
                return { data: null, error: error };
            }),
            this.getEquipo().catch(error => {
                console.error("Error al obtener equipo:", error);
                return { data: null, error: error };
            })
        ]).then(([jugadoresResponse, equipoResponse]) => {
            return {
                jugadores: jugadoresResponse.data,
                equipo: equipoResponse.data,
                hasErrors: jugadoresResponse.error || equipoResponse.error
            };
        });
    }

    getDataEquipoAlternative() {
        const data = {};
        return this.getJugadores().then(jugadoresResponse => {
            data.jugadores = jugadoresResponse.data;
            return this.getEquipo();
        }).then(equipoResponse => {
            data.equipo = equipoResponse.data;
            return data;
        }).catch(error => {
            console.error("Error al obtener datos del equipo:", error);
            data.hasErrors = true;
            return data;
        });
    }
}