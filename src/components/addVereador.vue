<template>
    <div class="container" style="margin-bottom: 20px;">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10" ><h5>Cadastrar Vereador</h5></div>
                            
                            <div class="col-2" style="text-align: end"><button class="btn btn-outline-danger" @click="fechar()"><i class="bi bi-x-lg"></i></button></div>
                        </div>
                    </div>
                   
                    <div class="card-body">
                        <form @submit.prevent="adicionarVereador">
                            <div class="row mb-3">
                                <label for="nome" class="col-md-4 col-form-label text-md-end">Nome</label>
                                <div class="col-md-6">
                                    <input v-model="vereador.vereador_nome" class="form-control" required>
                                </div>
                            </div>

                            <div class="row mb-3">
                                <label for="CNPJ" class="col-md-4 col-form-label text-md-end">Matricula</label>
                                <div class="col-md-6">
                                    <input v-maska="'######'" v-model="vereador.vereador_matricula" class="form-control" required>
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
import Vereador from '../services/vereador'
export default {
    name: 'addVereador',

    data() {
        return {
            vereador: {
                vereador_matricula: '',
                vereador_nome: ''
            }
        }
    },

    methods:{
        adicionarVereador(){
            Vereador.salvar(this.vereador).then(resposta => {
                this.fechar()
            })
        },

        fechar(){
            this.$emit('atualiza')
        }
    }
}
</script>
