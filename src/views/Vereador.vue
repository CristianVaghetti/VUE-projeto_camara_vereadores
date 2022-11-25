<template>
  <div class="container row-justify-center">
    <div v-if="mostrar">
      <addVereador @atualiza="listar()"/>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-10">
          <h2>Vereadores</h2>
        </div>
        <div class="col-2">
          <button @click="addVereador()" class="btn btn-outline-success">
            <i class="bi bi-person-add">&nbsp;&nbsp;Cadastrar</i>
          </button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col" class="col-4">Matrícula</th>
            <th scope="col" class="col-7">Nome</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="vereador of vereadores">
            <td v-if="editar && qualEditar === vereador.vereador_id"><input v-maska="'######'" v-model="vereador.vereador_matricula"></td>
            <td v-else>{{vereador.vereador_matricula}}</td>
            <td v-if="editar && qualEditar === vereador.vereador_id"><input v-model="vereador.vereador_nome"></td>
            <td v-else>{{vereador.vereador_nome}}</td>
            <td v-if="editar && qualEditar === vereador.vereador_id"><button @click="editarVereador(vereador)" class="btn btn-outline-success"><i class="bi bi-check2"></i></button></td>
            <td v-else><button @click="habilitarEdicao(vereador)" class="btn btn-outline-primary"><i class="bi bi-pencil"></i></button></td>
            <td v-if="editar && qualEditar === vereador.vereador_id"><button @click="listar()" class="btn btn-outline-danger"><i class="bi bi-x-lg"></i></button></td>
            <td v-else><button @click="deletarVereador(vereador)" class="btn btn-outline-danger"><i class="bi bi-trash"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import addVereador from '../components/addVereador.vue'
import Vereador from '../services/vereador'
export default {
  name: 'vereadorView',

  components: {
    addVereador
  },

  data() {
    return {
      mostrar: false,
      editar: false,

      vereador: {
        vereador_matricula: '',
        vereador_nome: '',
      },
      vereadores: [],
    }
  },

  mounted() {
    this.listar()
  },

  methods: {
    listar() {
      this.mostrar = false
      this.editar = false
      Vereador.listar().then(resposta => {
        this.vereadores = resposta.data
      })
    },

    deletarVereador(vereador) {
      if (confirm("Deseja realmente excluir " + vereador.vereador_nome + " ?")) {
        Vereador.deletar(vereador).then(resposta => {
          this.listar()
        })
      }
    },

    addVereador() {
      this.mostrar = true
    },

    habilitarEdicao(vereador) {
      this.editar = !this.editar
      this.qualEditar = vereador.vereador_id
    },

    editarVereador(vereador) {
      Vereador.editar(vereador).then(resposta => {
          this.listar()
      })
    }
  }
}
</script>
