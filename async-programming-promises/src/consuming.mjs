import setText, { appendText, showWaiting, hideWaiting } from "./results.mjs";

export function get() {
    axios.get('http://127.0.0.1:3000/orders/1')
        .then(({ data }) => {
            setText(JSON.stringify(data))
        });
}

export function getCatch() {
    axios.get('http://127.0.0.1:3000/orders/123') // using deferent parameter to cause an error to cath him
        .then(({ data }) => {
            setText(JSON.stringify(data))
        })
        .catch(err => {
            setText(err)
        })
}

export function chain() {
    axios.get('http://127.0.0.1:3000/orders/1')
        .then(({ data }) => {
            return axios.get(`http://127.0.0.1:3000/addresses/${data.shippingAddress}`);
        })
        .then(({ data }) => {
            setText(`city ${data.city}`);
        });
}

export function chainCatch() {
    axios.get('http://127.0.0.1:3000/orders/1')
        .then(({ data }) => {
            return axios.get(`http://127.0.0.1:3000/addresses/${data.shippingAddress}`);
        })
        .then(({ data }) => {
            setText(`city ${data.my.city}`); // add my to the city her to cause an error
        })
        .catch(err => { // it will catch any error in previous then get 'orders' and then get 'addresses'
            setText(err)
        });
}

export function final() {
    showWaiting();

    axios.get('http://127.0.0.1:3000/orders/1')
        .then(({ data }) => {
            return axios.get(`http://127.0.0.1:3000/addresses/${data.shippingAddress}`);
        })
        .then(({ data }) => {
            setText(`city ${data.city}`);
        })
        .catch(err => { // it will catch any error in previous then get 'orders' and then get 'addresses'
            setText(err)
        })
        .finally(() => {
            setTimeout(() => {
                hideWaiting();
            }, 1500);
            appendText(' -- completely updated')
        });
}