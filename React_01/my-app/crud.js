const saveData = (e) => {
    e.preventDefault();
    if(id !="")
        let res = allData.filter((i,index) =>index !=id)
}


const editData = (id) =>{
    let res = alldata.find((i,index) => index != id);
    setAllData = res
}