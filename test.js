const http = require('http'); // 1. require('http');
let myname = () => {
    return "Here is my IP address" // 2. return string
}
callHttpbin = async () => { // 3. async 4. callHttpbin()
    let promise = new Promise((resolve, reject) => {
        http.get('http://httpbin.org/ip', (res) => {
            let str = "";
            res.setEncoding('utf8');
            res.on('data', (data) => {
                str += data;
            });
            res.on('end', () => {
                let result = JSON.parse(str);
                myips = result.origin;
                resolve(myips); // 5. resolve with myips
            });
        });
    });

    let result = await promise;

    return result // 6. add return
}
executeAsyncTask = async () => { // 7. async
    const valueA = await callHttpbin()
    const valueB = myname();
    console.log(valueB + " " + valueA);
} // 8. Added closing bracket

executeAsyncTask() // 9. create function call

// Output Here is my IP address 149.24.160.1, 149.24.160.1
