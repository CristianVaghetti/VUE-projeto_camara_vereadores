import {http} from './config'

export default{
    listar:() => {
        return http.get('/utilizar')
    },

    salvar:(utilizar) => {
        return http.post('/utilizar/', utilizar)
    },

    editar:(utilizar) =>{
        return http.put('/utilizar/' + utilizar.utilizar_id + '/', utilizar)
    },

    deletar:(utilizar) => {
        return http.delete('/utilizar/' + utilizar.utilizar_id)
    }
}