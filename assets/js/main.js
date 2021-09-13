console.log('wetter_app')

//1. mit fetch hole data von json
function showData(){ 

    return fetch(`https://api.openweathermap.org/data/2.5/weather?q=frankfurt,DE&lang=de&appid=a8ce46a3c76b754bd7786a22f785f812`)
    // .then(response=>console.log(response))// der macht:object 'response' übergeben
        .then(response=>response.json()) //konvert response body zum object mit json-api in response object
        .then(data=>{
            console.log(data);
            let newTuete=data.weather
            console.log(newTuete);

            newTuete.forEach(elt=>{
                let main=elt.main
                let description=elt.description
              
                let newTuete2=new Container(main,description)
            newTuete2.showContainer();
        })
    
    } ) //data return

}


showData ()
class Container{
    constructor(
        main,
        description,
      
        
    ){
        this.main = main;
        this.description=description;
      
     
    }
    showContainer(){
        document.getElementById("currentData").innerHTML +=`
        <p>${this.main}</p>
        <p>${this.description}</p>
     
           
        `
    }
}
