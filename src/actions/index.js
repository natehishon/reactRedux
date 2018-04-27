export const FETCH_VENDOR = 'FETCH_VENDOR';
export const ROOT_URL = 'https://data.cityofchicago.org/resource/rjgc-4h37.json?$order=amount DESC&$limit=10';

export function fetchVendors() {

    const request = axios.get(ROOT_URL);

    return {
        type: 'FETCH_VENDOR',
        payload: request
    }
}