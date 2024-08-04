// async function getData() {
//     //simulate getting data from server
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }
async function getData() {
    //simulate getting data from server
    // let x=await fetch('https://jsonplaceholder.typicode.com/todos/1')
    // let data = await x.json()
    // .then(response => response.json())
    // .then(json => console.log(json))
    let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json;charst=UTF-8',
        },
    })

    // console.log(data);
    let data = await x.json()
    return data

}
async function main() {
    console.log('Loading modules');
    console.log('Do something else');
    console.log('Load data');

    let data = await getData();

    console.log(data);
    console.log('process data');

    console.log('Task 2');
}
// Example POST method implementation:
async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: "POST",

        headers: {
            "Content-Type": "application/json",

        },

        body: JSON.stringify(data),
    });
    return response.json();
}

postData("https://example.com/answer", { answer: 42 }).then((data) => {
    console.log(data);
});


main()
// data.then((v)=>{

//     console.log(data);
//     console.log('process data');

//     console.log('Task 2');
// })


/**
 * settle means resolve or reject
 * resolve means promise has setteld successfully
 * reject means promise not settled
 */
