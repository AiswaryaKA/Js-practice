weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

wd = {}

for(let data of weatherData){
    district = data.district
    currentweather = data.weather
    if (district in wd){
        oddTemp = wd[district]
        if(oddTemp>currentweather){
               wd[district]= oddTemp
         }else{
              wd[district]=currentweather
        }
    }else{
           wd[district]=currentweather
    }
}
console.log(wd);
