import {http} from './config'

export default{
    listar:() => {
        return http.get('/vereador')
    },

    consultar:(vereador) => {
        return http.get('/vereador/' + vereador.vereador_id + '/detalhes/')
    },

    salvar:(vereador) => {
        return http.post('/vereador/', vereador)
    },

    editar:(vereador) =>{
        return http.put('/vereador/' + vereador.vereador_id + '/', vereador)
    },

    deletar:(vereador) => {
        return http.delete('/vereador/' + vereador.vereador_id)
    }
}