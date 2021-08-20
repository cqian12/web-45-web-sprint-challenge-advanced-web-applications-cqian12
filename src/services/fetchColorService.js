import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = () => {
    return (axiosWithAuth()
    .get('/colors'))
    // .then(res => {
    //     console.log(res.data)
    //     return res
    //   })
}

export default fetchColorService;