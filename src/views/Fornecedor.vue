<template>
  <div>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-10">
            <h2>Fornecedores</h2>
          </div>
          <div class="col-2"><button type="button" class="btn btn-success">Cadastrar</button></div>
        </div>
      </div>
      <div class="card-body">
        <table class="table">
          <thead class="thead-dark">
            <tr>
              <th scope="col" class="col-4">CNPJ</th>
              <th scope="col" class="col-7">Nome</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fornecedor of fornecedores">
              <td>{{ fornecedor.fornecedor_cnpj }}</td>
              <td>{{ fornecedor.fornecedor_nome }}</td>
              <td><button style="background-color: rgba(0, 0, 255, 0.36)" type="button" class="btn"><i class="bi bi-pencil"></i></button></td>
              <td><button style="background-color: rgba(255, 0, 0, 0.50)" type="button" class="btn"><i class="bi bi-trash"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Fornecedor from '../services/fornecedor'
export default {
  name: 'fornecedorView',

  data() {
    return {
      fornecedores: [],
    }
  },

  mounted() {
    Fornecedor.listar().then(resposta => {
      console.log(resposta.data)
      this.fornecedores = resposta.data
    })
  }
}
</script>
