<template>
  <div class="container row-justify-center">
    <div v-if="cadastro">
      O meu time!
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-10">
          <h2>Materiais</h2>
        </div>
        <div class="col-2">
          <button @click="addMaterial()" class="btn btn-outline-success">
            <i class="bi bi-person-add">&nbsp;&nbsp;Cadastrar</i>
          </button>
        </div>
      </div>
    </div>
    <div class="card-body">
      <table class="table">
        <thead class="thead-dark">
          <tr>
            <th scope="col" class="col-3">Descrição</th>
            <th scope="col" class="col-2">Quantidade</th>
            <th scope="col" class="col-4">Fornecedor</th>
            <th scope="col" class="col-1">Valor</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="material of materiais">
            <td>{{material.material_descricao}}</td>
            <td>{{material.material_quantidade}}</td>
            <td>Nome fornecedor</td>
            <td>{{material.material_valor}}</td>
            <td><button class="btn btn-outline-success"><i class="bi bi-plus-lg"></i></button></td>
            <td><button class="btn btn-outline-primary"><i class="bi bi-arrow-right"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Material from "../services/material"
export default {
  name: 'materialView',

  mounted() {
    this.listar()
  },

  data() {
    return {
      cadastro: false,
      material: {
        material_descricao: '',
        material_quantidade: '',
        material_valor: '',
        material_detalhes: ''
      },
      materiais: []
    }
  },
  methods: {
    listar() {
      this.cadastro = false
      Material.listar().then(resposta => {
        this.materiais = resposta.data
        console.log(this.materiais)
      })
    },
    addMaterial() {
      this.cadastro = true

    }
  }
}
</script>
