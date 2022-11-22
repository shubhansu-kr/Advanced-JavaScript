const fetchAll = async () => {
    const d1 = await fetch('./00_Promises/data1.json')
    const d2 = await fetch('./00_Promises/data2.json')
    const d3 = await fetch('./00_Promises/data3.json')

    console.log(d1, d2, d3);
}

fetchAll()