//Object inheritance

baleno ={
    model:'Hatch back',
    varient : ['automatic','manuel'],
    manufacturere : 'maruthi'

}

glanza = {
    manufacturere : 'Toyota'
}

glanza.__proto__ = baleno

console.log(glanza.manufacturere);
console.log(glanza.model);

