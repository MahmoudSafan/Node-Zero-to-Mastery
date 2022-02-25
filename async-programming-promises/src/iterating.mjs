import { append } from 'express/lib/response';
import setText, { appendText } from './results.mjs';

export async function get() {
    let { data } = await axios.get('http://127.0.0.1:3000/orders/1');
    setText(JSON.stringify(data))
}

export async function getCatch() {
    try {
        let { data } = await axios.get('http://127.0.0.1:3000/orders/123'); // id 123 will cause an error
        setText(JSON.stringify(data));

    } catch (err) {
        setText(err);
    }
}

export async function chain() {
    try {
        let { data } = await axios.get('http://127.0.0.1:3000/orders/1');
        let { data: address } = await axios.get(`http://127.0.0.1:3000/addresses/${data.shippingAddress}`);

        setText(JSON.stringify(address.city))

    } catch (err) {
        setText(err);
    }
}

export async function concurrent() {
    try {
        // the two apis will kick off at the same time, note they aren't awaited
        const orderStatuses = axios.get('http://127.0.0.1:3000/orderStatuses');
        const orders = axios.get('http://127.0.0.1:3000/orders');

        setText("")

        const { data: statuses } = await orderStatuses;
        const { data: order } = await orders;

        appendText(JSON.stringify(statuses));
        appendText(JSON.stringify(order[0]));
    } catch (err) {
        setText(err);
    }
}

export async function parallel() {
    setText('');

    Promise.all([
        (async() => {
            const { data } = await axios.get('http://127.0.0.1:3000/orderStatuses');

            appendText(JSON.stringify(data));
        }),
        (async() => {
            const { data } = await axios.get('http://127.0.0.1:3000/orders');

            appendText(JSON.stringify(data));
        })
    ])
}