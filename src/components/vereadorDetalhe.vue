<template>
    <div class="container" style="margin-bottom: 20px;">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-10">
                                <h5>{{vereador_detalhes[0].vereador_nome}}</h5>
                            </div>

                            <div class="col-2" style="text-align: end">
                                <button class="btn btn-outline-danger" @click="fechar()"><i class="bi bi-x-lg"></i></button>
                            </div>
                        </div>
                    </div>

                    <div class="card-body">
                        <table class="table">
                            <thead class="thead-dark">
                                <tr>
                                    <th scope="col" class="col-4">Material</th>
                                    <th scope="col" class="col-5">Quantidade</th>
                                    <th scope="col" class="col-2">Data utilizada</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="gasto of gastos">
                                    <td>{{ gasto.material_id }}</td>
                                    <td>{{ gasto.utilizado_quantidade }}</td>
                                    <td>{{ gasto.utilizado_data }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'vereadorDetalhe',

    props:['detalhamento'],

    data() {
        return {
            vereador_detalhes: this.detalhamento,
            gastos : this.detalhamento[0].vereadorGastos
        }
    },

    methods:{
        fechar(){
            this.$emit('atualiza')
        }
    }
}
</script>