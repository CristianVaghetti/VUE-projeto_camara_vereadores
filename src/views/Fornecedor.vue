<template>
  <div>
    <div class="container row-justify-center">
      <div v-if="mostrar">
        <addFornecedor @atualiza="listar()"/>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <div class="row">
          <div class="col-10">
            <h2>Fornecedores</h2>
          </div>
          <div class="col-2">
            <button @click="addEditFornecedor()" class="btn btn-outline-success">
              <i class="bi bi-person-add">&nbsp;&nbsp;Cadastrar</i>
            </button>
          </div>
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
              <td><input v-maska="'##.###.###/####-##'" v-model="fornecedor.fornecedor_cnpj"></td>
              <td><input v-model="fornecedor.fornecedor_nome"></td>
              <td><button @click="editarFornecedor(fornecedor)" class="btn btn-outline-primary"><i class="bi bi-pencil"></i></button></td>
              <td><button @click="deletarFornecedor(fornecedor)" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import addFornecedor from '../components/addFornecedor.vue'
import Fornecedor from '../services/fornecedor'
export default {
  name: 'fornecedorView',

  components: {
    addFornecedor
  },

  data() {
    return {
      mostrar: true,

      fornecedor: {
        fornecedor_cnpj: '',
        fornecedor_nome: '',
      },
      fornecedores: [],
    }
  },

  mounted() {
    this.listar()
  },

  methods: {
    listar() {
      this.mostrar = false
      Fornecedor.listar().then(resposta => {
        this.fornecedores = resposta.data
      })
    },

    deletarFornecedor(fornecedor) {
      if (confirm("Deseja realmente excluir " + fornecedor.fornecedor_nome + " ?")) {
        Fornecedor.deletar(fornecedor).then(resposta => {
          this.listar()
        })
      }
    },

    editarFornecedor(fornecedor = false) {
      console.log(fornecedor)
    }
  }
}
</script>
