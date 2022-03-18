

function post(path, payload){
    return fetch(path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
       body: JSON.stringify(payload)
    }).catch(console.log).then((res) => res.json());
}


export default {post}