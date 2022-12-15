<template>
  <div class="container row-justify-center">
    <div v-if="cadastro">
      <addMaterial @atualiza="listar()" />
    </div>
    <div v-if="utilizar">
      <usarMaterial @atualiza="listar()" :idMaterial="this.qualUsar"/>
    </div>
  </div>
  <div class="card">
    <div class="card-header">
      <div class="row">
        <div class="col-10">
          <h2>Materiais</h2>
        </div>
        <div class="col-2">
          <button @click="cadMatetial()" class="btn btn-outline-success">
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
            <th scope="col" class="col-2" v-if="adicionar"></th>
            <th scope="col" class="col-3">Fornecedor</th>
            <th scope="col" class="col-2">Tipo</th>
            <th scope="col" class="col-1">Valor</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="material of materiais">
            <td>{{ material.material_descricao }}</td>
            <td>{{ material.material_quantidade }}</td>
            <td v-if="adicionar && qualEditar == material.material_id"><input v-model="material.material_quantidadeAdd"
                type="number" class="form-control"></td>
            <td v-if="adicionar && qualEditar != material.material_id"></td>
            <td>Fornecedor</td>
            <td v-bind="tipoMaterial(material)">{{this.materialTipo}}</td>
            <td>{{ material.material_valor }}</td>
            <td v-if="adicionar && qualEditar == material.material_id"><button @click="salvaAdd(material)"
                class="btn btn-outline-success"><i class="bi bi-check2"></i></button></td>
            <td v-else><button @click="addMaterial(material)" class="btn btn-outline-success"><i
                  class="bi bi-plus-lg"></i></button></td>

            <td v-if="adicionar && qualEditar == material.material_id"><button @click="listar()"
                class="btn btn-outline-danger"><i class="bi bi-x-lg"></i></button></td>
            <td v-else><button @click="utilizarMaterial(material)" class="btn btn-outline-primary"><i class="bi bi-arrow-right"></i></button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Material from "../services/material"
import addMaterial from '../components/addMaterial.vue'
import usarMaterial from '../components/usarMateterial.vue'
export default {
  name: 'materialView',

  components: {
    addMaterial,
    usarMaterial
  },

  mounted() {
    this.listar()
  },

  data() {
    return {
      cadastro: false,
      adicionar: false,
      utilizar: false,
      material: {
        material_descricao: '',
        material_quantidade: '',
        material_valor: '',
        material_fornecedor: '',
        material_tipo: '',
        material_quantidadeAdd: ''
      },
      materiais: [],
    }
  },
  methods: {
    listar() {
      this.cadastro = false
      this.adicionar = false
      this.utilizar = false
      Material.listar().then(resposta => {
        this.materiais = resposta.data
      })
    },

    cadMatetial() {
      this.cadastro = true
    },

    addMaterial(material) {
      this.adicionar = true
      this.qualEditar = material.material_id
    },

    salvaAdd(material) {
      Material.editar(material).then(resposta => {
        this.listar()
      })
    },

    utilizarMaterial(material) {
      this.qualUsar = material.material_id
      this.utilizar = true
    },
    
    tipoMaterial(material){
      switch(material.material_tipo){
        case 1: 
          this.materialTipo = "Limpeza"
          break
        case 2:
          this.materialTipo = "Cozinha"
            break
        case 3:
          this.materialTipo = "Escritório"
            break
      }
    }
  }
}
</script>
