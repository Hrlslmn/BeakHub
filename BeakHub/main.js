var birdsInfo =[{
    Name : "Pineaple Conure",
    Colour : "Red, Yellow, Green",
    Scientific_name : "Pyrrhura molinae"
},{
    Name :"African Grey",
    Colour : "Grey Black Red",
    Scientific_name : "Psittacus erithacus"
},{
    Name :"Cockatiel",
    Colour : "Yellow Orange Grey White",
    Scientific_name : "Nymphicus hollandicus"
}]

function displayInfo(birdName){
    for(let i = 0 ; i<birdsInfo.length ; i++){
        if(birdsInfo[i].Name == birdName){
            document.getElementById("displaySelected").innerHTML = "Bird Name : " + birdsInfo[i].Name  + "</br> " + "Colour: " + birdsInfo[i].Colour + "</br> " + "Scientific Name : " + birdsInfo[i].Scientific_name
            document.getElementById("displaySelected").style.border =  "2px solid black"
            document.getElementById("displaySelected").style.backgroundColor =  "rgb(213, 150, 32)"
            document.getElementById("displaySelected").style.borderRadius = "5px"
            document.getElementById("displaySelected").style.marginTop = "20px"
            document.getElementById("displaySelected").style.fontSize = "15px"
        }
        else{
            console.log("False")
        }
    }
}