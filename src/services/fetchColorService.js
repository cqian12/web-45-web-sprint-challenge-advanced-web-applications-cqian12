import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return (axiosWithAuth()
    .get('/colors'))
    .then(res => {
        console.log(res.data)
        return res
      })
    .catch(err=> console.log(err))
}

export default fetchColorService;