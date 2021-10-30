export function fetchCurrencies(){
    return fetch("https://api.coinlore.net/api/tickers/",{method: 'GET'}).then(res => res.json());
}