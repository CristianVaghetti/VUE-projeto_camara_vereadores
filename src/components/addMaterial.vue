<template>
    <div class="container" style="margin-bottom: 20px;">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10" ><h5>Cadastrar Material</h5></div>
                            
                            <div class="col-2" style="text-align: end"><button class="btn btn-outline-danger" @click="fechar()"><i class="bi bi-x-lg"></i></button></div>
                        </div>
                    </div>
                   
                    <div class="card-body">
                        <form @submit.prevent="adicionarMaterial">
                            <div class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Descricao</label>
                                <div class="col-md-6">
                                    <input v-model="material.material_descricao" class="form-control" required>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Quantidade</label>
                                <div class="col-md-6">
                                    <input type="number" v-model="material.material_quantidade" class="form-control" required>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Fornecedor</label>
                                <div class="col-md-6">
                                    <select class="form-select" v-model="material.material_fornecedor">
                                        <option v-for="fornecedor of fornecedores" v-bind:value="fornecedor.fornecedor_id">{{fornecedor.fornecedor_nome}}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Tipo</label>
                                <div class="col-md-6">
                                    <select class="form-select" v-model="material.material_tipo">
                                        <option v-for="tipos of tiposMaterial" v-bind:value="tipos.tipo_id">{{tipos.tipo_descricao}}</option>
                                    </select>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label class="col-md-4 col-form-label text-md-end">Valor</label>
                                <div class="col-md-6">
                                    <input
                                        v-model="material.material_valor"
                                        class="form-control"
                                        v-maska
                                        data-maska="9 99#,##"
                                        data-maska-tokens="9:[0-9]:repeated"
                                        data-maska-reversed
                                    >
                                </div>
                            </div>

                            <div class="row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-outline-success">Cadastrar</button>
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
import Material from '../services/material'
import Fornecedor from '../services/fornecedor'
import Tipos from '../services/tiposMaterial'
export default {
    name: 'addMaterial',

    data() {
        return {
            material: {
                material_descricao: '',
                material_fornecedor: '',
                material_quantidade: '',
                material_valor: '',
                material_tipo: ''
            },

            fornecedores: [],

            tiposMaterial: []
        }
    },

    mounted() {
        this.listarFornecedores()
        this.listarTiposMaterial()
    },

    methods:{
        adicionarMaterial(){
            Material.salvar(this.material).then(resposta => {
                this.fechar()
            })
        },

        fechar(){
            this.$emit('atualiza')
        },

        listarFornecedores(){
            Fornecedor.listar().then(resposta => {
                this.fornecedores = resposta.data
            })
        },

        listarTiposMaterial(){
            Tipos.listar().then(resposta => {
                this.tiposMaterial = resposta.data
            })
        }
    }
}
</script>
