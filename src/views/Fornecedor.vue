<template>
    <h1>Página dos fornecedores</h1>
</template>

<script>
import Fornecedor from '../services/fornecedor'
export default {
  name: 'fornecedorView',
  mounted(){
    Fornecedor.listar().then(resposta => {
      console.log(resposta)
    })
  }

}
</script>
