import {http} from './config'

export default{
    listar:() => {
        return http.get('/fornecedor')
    },

    consultar:(fornecedor) => {
        return http.get('/fornecedor/' + fornecedor.fornecedor_id + '/detalhes/')
    },

    salvar:(fornecedor) => {
        return http.post('/fornecedor/', fornecedor)
    },

    editar:(fornecedor) =>{
        return http.put('/fornecedor/' + fornecedor.fornecedor_id + '/', fornecedor)
    },

    deletar:(fornecedor) => {
        return http.delete('/fornecedor/' + fornecedor.fornecedor_id)
    }
}