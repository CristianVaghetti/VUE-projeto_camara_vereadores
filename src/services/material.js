import {http} from './config'

export default{
    listar:() => {
        return http.get('/material')
    },

    consultar:(material_id) => {
        return http.get('/material/' + material_id)
    },

    salvar:(material) => {
        return http.post('/material/', material)
    },

    editar:(material) =>{
        return http.put('/material/' + material.material_id + '/', material)
    },

    deletar:(material) => {
        return http.delete('/material/' + material.material_id)
    }
}