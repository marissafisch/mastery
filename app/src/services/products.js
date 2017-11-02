const API_URL = 'https://practiceapi.devmountain.com/products'

export function index() {
    return fetch(API_URL)
    .then(res => res.json());
}

export function get(id){
    return fetch(`${API_URL}/${id}`)
    .then(res => res.json())
}