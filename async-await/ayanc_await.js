
function fetchData() {
    return new Promise((resolved) => {

        setTimeout(() => {
            resolved("Data loaded!")
        }, 2000)


    })
}


//it is act as more synch. ways

async function getData() {

    console.log("start");
    const result = await fetchData();
    console.log(result)
    console.log("END");
}


getData();