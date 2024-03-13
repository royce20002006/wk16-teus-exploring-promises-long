/* ============================== Phase 1 ============================== */
/* -------------------------- exploring async -------------------------- */

function num1() {
    return 5;
} 

async function num2() {
    return 10;
}

console.log("num1", num1());
console.log("num2", num2());
num2().then(result => console.log(result));


/* ============================== Phase 2 ============================== */
/* -------------------------- exploring await -------------------------- */

async function waiting() {
    const value = await num2();
    console.log("waiting", value);
}

waiting();



/* ============================== Phase 3 ============================== */
/* --------------------- creating a custom Promise --------------------- */

async function waitForMyPromise() {
    const promise = new Promise((resolved) => {
        setTimeout(()=>{
            resolved("Class is nearly over!");
        }, 1000)
    });

    const result = await promise;
    console.log("my promise is", result);
}
waitForMyPromise();



/* ============================== Phase 4 ============================== */
/* -------------------------- exploring then --------------------------- */

new Promise ((res) => {
    setTimeout(() => {
        res('phase 4');
    }, 1500)
}).then(r => console.log('then my other promise is', r));



/* ============================== Phase 5 ============================== */
/* ------------------- turn setTimeout into a Promise ------------------ */

function waitAgain(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function heyo() {
    console.log('waiting for now');
    await waitAgain(2000);
    console.log('done with waiting');
}

heyo();



/* ============================== Phase 6 ============================== */
/* -------------------- exploring reject and .catch -------------------- */

const tryRandomPromise = (random) => new Promise((res, rej) => {
    if (random > 0.5) {
        res('success!!!');
    } else {
        rej('random error');
    }
});

for (let i = 1; i < 10; i++) {
    const random = Math.random();
    waitAgain(2000 + random * 1000).then(() => tryRandomPromise(random))
    .then((result) => console.log('random try #', i, result))
    .catch(error => console.error('random try #', i, error));
}



/* ============================== Phase 7 ============================== */
/* ---------------- exploring async/await and try/catch ---------------- */

// Your code here 



/* ============================== Phase 8 ============================== */
/* -------------------- Promises are asynchronous! --------------------- */

// Your code here 
