//*HOMEWORK*

products = [
    { pid: 100, pName: 'apple', band: '5g', price: 120000, display: 'led' },
    { pid: 101, pName: 'samsaung', band: '5g', price: 45000, display: 'led' },
    { pid: 102, pName: 'blackberry', band: '4g', price: 50000, display: 'led' },
    { pid: 103, pName: 'nokia', band: '3g', price: 1200, display: 'lcd' },
    { pid: 104, pName: 'motorola', band: '4g', price: 10000, display: 'lcd' }
]

console.log('1---------product name');

//1. print product name only

for (let pD of products) {
    // console.log(pD);
    console.log(pD.pName);

}

console.log('Array method------------');

products.forEach(pro => { console.log(pro.pName) });

console.log('2---------------all mobile details whose display is lcd');

//2. print all mobile details whose display is lcd

for (let pD1 of products) {
    //console.log(pD1);

    if (pD1.display == 'lcd') {
        console.log(pD1);

    }
}

console.log('Array method--------');

products.filter((pro) => pro.display == 'lcd').forEach((item) => console.log(item))


console.log('3-------5g mobile phone name');

//3. print 5g mobile phone name

for (let pD2 of products) {
    //console.log(pD2);

    if (pD2.band == '5g') {
        console.log(pD2.pName);

    }
}

console.log('Array method-----------');

products.filter((pro) => pro.band == '5g').forEach((item) => console.log(item.pName))


console.log('4-----sort mobile based on price');

//4. sort mobile based on price


sorted = products.sort((p1, p2) => p1['price'] - p2['price'])
console.log(sorted);

//name only
products.sort((p1, p2) => p1['price'] - p2['price']).forEach((item)=>console.log(item.pName))

console.log('5----costly mobile');

//5. print costly mobile

costly = products.reduce((c1, c2) => c1.price > c2.price ? c1 : c2)
console.log(costly.pName);

console.log('6-----low cost mobile');

//6. print low cost mobile

lowcost = products.reduce((lc1, lc2) => lc1['price'] < lc2['price'] ? lc1 : lc2)
console.log(lowcost.pName);