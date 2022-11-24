import {http} from './config'

export default{
    listar:() => {
        return http.get('/fornecedor')
    },

    salvar:(fornecedor) => {
        return http.post('/fornecedor/', fornecedor)
    },

    editar:(fornecedor) =>{
        return http.put('/fornecedor/'+ fornecedor.fornecedor_id)
    },

    deletar:(fornecedor) => {
        return http.delete('/fornecedor/'+ fornecedor.fornecedor_id)
    }
}