const API_KEY = "5423d783f28afe7b63135986820d8e3b";

const requests = {
    fetchToprated: '/movie/top_rated?api_key='+ API_KEY +'&language=en-US&page=1',
    fetchTrending: 'trending/all/week?api_key=' + API_KEY,
    fetchPopular : 'https://api.themoviedb.org/3/movie/popular?api_key='+ API_KEY+ '&language=en-US',
    fetchUpcoming : '/movie/upcoming?api_key='+ API_KEY +'&language=en-US&page=1',
}

export default requests;
