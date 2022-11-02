import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

const APIKEY = '30502065-ccf9dfd8afed44df162e05d97';

export const searchImage = async (searchValue, page=1) => {
    const responce = await axios.get(`?key=${APIKEY}&q=${searchValue}&page=${page}&image_type=photo&orientation=horizontal&per_page=12`);
    
    return responce.data.hits;
}