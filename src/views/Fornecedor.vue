<template>
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
          <button @click="addFornecedor()" class="btn btn-outline-success">
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
            <td v-if="editar && qualEditar === fornecedor.fornecedor_id"><input v-maska="'##.###.###/####-##'" v-model="fornecedor.fornecedor_cnpj"></td>
            <td v-else>{{fornecedor.fornecedor_cnpj}}</td>
            <td v-if="editar && qualEditar === fornecedor.fornecedor_id"><input v-model="fornecedor.fornecedor_nome"></td>
            <td v-else>{{fornecedor.fornecedor_nome}}</td>
            <td v-if="editar && qualEditar === fornecedor.fornecedor_id"><button @click="editarFornecedor(fornecedor)" class="btn btn-outline-success"><i class="bi bi-check2"></i></button></td>
            <td v-else><button @click="habilitarEdicao(fornecedor)" class="btn btn-outline-primary"><i class="bi bi-pencil"></i></button></td>
            <td v-if="editar && qualEditar === fornecedor.fornecedor_id"><button @click="listar()" class="btn btn-outline-danger"><i class="bi bi-x-lg"></i></button></td>
            <td v-else><button @click="deletarFornecedor(fornecedor)" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button></td>
          </tr>
        </tbody>
      </table>
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
      editar: false,

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
      this.editar = false
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

    addFornecedor() {
      this.mostrar = true
    },

    habilitarEdicao(fornecedor) {
      this.editar = !this.editar
      this.qualEditar = fornecedor.fornecedor_id
    },

    editarFornecedor(fornecedor) {
      Fornecedor.editar(fornecedor).then(resposta => {
          this.listar()
      })
    }
  }
}
</script>
