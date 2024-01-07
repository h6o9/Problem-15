async function getfunc1() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("func1 is calling")
        }, 2000);
    });
}

async function getfunc2() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("func2 is calling")
        }, 1500);
    });
}


async function getfunc3() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("func3 is calling")
        }, 1000);
    });
}


async function getResult() {
    try {
        const result = await Promise.all([getfunc1(), getfunc2(), getfunc3()]);
        console.log("All funcation is sucessfully completed");
        console.log("Result:", result);
    }
    catch (error) {
        console.error("Erorr calling data:", error.message);
    }

}

getResult();
