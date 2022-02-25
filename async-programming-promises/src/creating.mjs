import setText, { appendText } from "./results.mjs";

export function timeout() {
    let wait = new Promise((resolve) => {
        setTimeout(() => {
            resolve("Timeout");
        }, 1500);
    });

    wait.then((text) => {
        setText(text)
    });
};

export function interval() {
    let counter = 0;
    let wait = new Promise((resolve) => {
        setInterval(() => {
            resolve(`Timeout ${++counter}`);
            console.log(counter);
        }, 1500);
    });

    wait.then((text) => {
            setText(text)
        })
        .finally(() => { appendText(`--done ${counter}`) });
};

export function clearIntervalChain() {
    let counter = 0,
        interval;
    let wait = new Promise((resolve) => {
        interval = setInterval(() => {
            resolve(`Timeout ${++counter}`);
            console.log(`clear interval function counter is: ${counter}`);
        }, 1500);
    });

    wait.then((text) => {
            setText(text)
        })
        .finally(() => { clearInterval(interval) });
};

export function xhr() {
    let request = new Promise((resolve, reject) => {

        let xhr = new XMLHttpRequest();
        xhr.open('GET', 'http://127.0.0.1:3000/users/7'); // user id not found will cause 404
        xhr.onload = () => {
            if (xhr.status === 200) {
                resolve(xhr.responseText);
            } else {
                reject(`Request Status is: ${xhr.statusText}`);
                console.log(`Request Status is: ${xhr.statusText}`);

            }
        };
        xhr.onerror = () => { reject('Request Failed') };
        xhr.send();

    });
    request.then(result => {
            setText(result);
        })
        .catch(reason => {
            setText(reason)
        });
};

export function allPromises() {
    let categories = axios.get('http://127.0.0.1:3000/itemCategories');
    let statuses = axios.get('http://127.0.0.1:3000/orderStatuses');
    let userTypes = axios.get('http://127.0.0.1:3000/userTypes');
    let addressTypes = axios.get('http://127.0.0.1:3000/addressTypes');

    Promise.all([categories, statuses, userTypes, addressTypes])
        .then(([cat, stat, users, add]) => {
            setText('')

            appendText(JSON.stringify(cat.data));
            appendText(JSON.stringify(stat.data));
            appendText(JSON.stringify(users.data));
            appendText(JSON.stringify(add.data));

        }).catch(reasons => {
            setText(reasons);
        });

};

export function allSettled() {
    let categories = axios.get('http://127.0.0.1:3000/itemCategories');
    let statuses = axios.get('http://127.0.0.1:3000/orderStatuses');
    let userTypes = axios.get('http://127.0.0.1:3000/userTypes');
    let addressTypes = axios.get('http://127.0.0.1:3000/addressTypes');

    Promise.allSettled([categories, statuses, userTypes, addressTypes])
        .then(values => {
            let resultes = values.map(v => {
                if (v.status === 'fulfilled') {
                    return `fulfilled ${JSON.stringify(v.value.data[0])} `;
                } else {
                    return `Rejected ${v.reason.message} `;
                }
            });

            setText(resultes);
        })
        .catch(reasons => {
            setText(reasons);
        });
};

// before run this function run command line 'npm run secondary'
export function race() {
    let users1 = axios.get('http://127.0.0.1:3000/users');
    let users2 = axios.get('http://127.0.0.1:3001/users');

    Promise.race([users1, users2])
        .then(value => {
            setText(JSON.stringify(value.data))
        })
        .catch(reason => setText(reason));
};