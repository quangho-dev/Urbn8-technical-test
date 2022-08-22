async function api() {
    console.log('result: ',1);

    const result2 = await api2();
    console.log('result2: ',result2);

    const result3 = await api3();
    console.log('result3: ',result3);

};

async function api2() {
    return 2;
};

function api3() {
    return 3;
};

api();