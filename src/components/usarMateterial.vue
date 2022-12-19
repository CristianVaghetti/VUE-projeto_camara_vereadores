<template>
    <div class="container" style="margin-bottom: 20px;">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h5>Utilizar Material</h5>
                            </div>

                            <div class="col-2" style="text-align: end"><button class="btn btn-outline-danger"
                                    @click="fechar()"><i class="bi bi-x-lg"></i></button></div>
                        </div>
                    </div>

                    <div class="card-body">
                        <form @submit.prevent="utilizarMaterial">
                            <div class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Destino</label>
                                <div class="col-md-6">
                                    <select class="form-select" v-model="utilizado.destino_id" required>
                                        <option value="1">Limpeza</option>
                                        <option value="2">Cozinha</option>
                                        <option value="3">Escritório</option>
                                        <option v-for="vereador of vereadores" v-bind:value="vereador.vereador_id">{{ vereador.vereador_nome }}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Quantidade</label>
                                <div class="col-md-6">
                                    <input v-model="utilizado.utilizado_quantidade" type="number" class="form-control" required>
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-outline-success">Utilizar</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Vereador from '../services/vereador'
import Utilizar from "../services/utilizar"
export default {
    name: 'usarMaterial',

    props: ['idMaterial'],

    data() {
        return {
            vereadores: [],
            utilizado: {
                material_id: this.idMaterial,
                utilizado_quantidade: '',
                destino_id: ''
            }
        }
    },

    mounted() {
        this.listarVereadores()
    },

    methods: {
        fechar() {
            this.$emit('atualiza')
        },
        listarVereadores() {
            Vereador.listar().then(resposta => {
                this.vereadores = resposta.data
            })
        },
        utilizarMaterial() {
            Utilizar.salvar(this.utilizado).then(resposta => {
                this.fechar()
            })
        }
    },


}
</script>
