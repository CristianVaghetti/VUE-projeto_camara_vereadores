import {http} from './config'

export default{
    listar:() => {
        return http.get('/fornecedor')
    },

    salvar:(fornecedor) => {
        return http.post('/fornecedor/', fornecedor)
    },

    deletar:(fornecedor) => {
        return http.delete('/fornecedor/'+ fornecedor.fornecedor_id)
    }
}