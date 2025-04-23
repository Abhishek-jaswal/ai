console.log("hello java");

async function loadDqata(){
    const data = await fetchData();
    console.log(data);

}
loadDqata()