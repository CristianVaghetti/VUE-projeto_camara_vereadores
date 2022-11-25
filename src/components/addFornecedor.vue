<template>
    <div class="container" style="margin-bottom: 20px;">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10" ><h5>Cadastrar Fornecedor</h5></div>
                            
                            <div class="col-2" style="text-align: end"><button class="btn btn-outline-danger" @click="fechar()"><i class="bi bi-x-lg"></i></button></div>
                        </div>
                    </div>
                   
                    <div class="card-body">
                        <form @submit.prevent="adicionarFornecedor">
                            <div class="row mb-3">
                                <label for="nome" class="col-md-4 col-form-label text-md-end">Nome</label>
                                <div class="col-md-6">
                                    <input v-model="fornecedor.fornecedor_nome" class="form-control" required>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="CNPJ" class="col-md-4 col-form-label text-md-end">CNPJ</label>
                                <div class="col-md-6">
                                    <input v-maska="'##.###.###/####-##'" v-model="fornecedor.fornecedor_cnpj" class="form-control" required>
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
import Fornecedor from '../services/fornecedor'
export default {
    name: 'addFornecedor',

    data() {
        return {
            fornecedor: {
                fornecedor_cnpj: '',
                fornecedor_nome: ''
            }
        }
    },

    methods:{
        adicionarFornecedor(){
            Fornecedor.salvar(this.fornecedor).then(resposta => {
                this.fechar()
            })
        },

        fechar(){
            this.$emit('atualiza')
        }
    }
}
</script>
