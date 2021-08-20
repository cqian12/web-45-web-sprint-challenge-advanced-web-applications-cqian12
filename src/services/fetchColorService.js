import axiosWithAuth from '../helpers/axiosWithAuth';

const fetchColorService = (props) => {
    axiosWithAuth()
    .get('/colors')
    .then(res => props.setColors(res.data))
    .catch(err => console.log(err))
}

export default fetchColorService;