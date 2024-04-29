//fetch the api
fetch("https://isro.vercel.app/api/spacecrafts")
// Using catch instead of .then() and catch() .
.then((data)=>{
    // get the api using parse
    return data.json();
})
.then((objectData)=>{
    console.log(objectData.spacecrafts[0].name)
    let tableData="";
    objectData.spacecrafts.map((values)=>{
        //to put the data
        tableData+=`<tr>
        <th>${values.id}</th>
        <td>${values.name}</td>
        </tr>`;
    })
    // to put the data into the table
    document.getElementById("table-body").innerHTML=tableData;
})
.catch((err)=>{
    console.log("Error");
});
