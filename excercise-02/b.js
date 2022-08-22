let api = new Promise(function(myResolve, myReject) {
    myResolve(1);
    myReject('Error');
});

let api2 = new Promise(function(myResolve, myReject) {
    myResolve(2);
    myReject('Error');
});

let api3 = new Promise(function(myResolve, myReject) {
    myResolve(3);
    myReject('Error');
});

api.then(function(result) {
    console.log('restult:', result);
    api2.then(function(result2) {
        console.log('result2:', result2);
        api3.then(function(result3) {
            console.log('result3:', result3);
        });
    });
}, function(error) {
    console.log(error);
})