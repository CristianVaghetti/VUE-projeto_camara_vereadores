import {http} from './config'

export default{
    listar:() => {
        return http.get('/fornecedor', {
            headers: {'Access-Control-Allow-Origin': '*'}
        })
        
    }
}