async function x() {
    console.log('a');
    console.log('b');
    const prom1 = await new Promise((res) => {
        setTimeout(() => {
            console.log('c');
            res();
        }, 3000);
    });
    const prom2 = await new Promise((res) => {
        setTimeout(() => {
            console.log('d');
            res();
        }, 0);
    });
    console.log('e');
}
x();
