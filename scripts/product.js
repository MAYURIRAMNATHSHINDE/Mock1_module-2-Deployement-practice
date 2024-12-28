let loadProductButton=document.getElementById("loadPro");

loadProductButton.addEventListener("click",function(){
    // let cardContainer=document.getElementById("card-cont")
    // let card=document.createElement("div")
    // let description=document.createElement("p");
    // description.textContent=`${}`;
    // let image=document.createElement("img");
    // image.src=;
    
    // let price=document.createElement("h4")
    
    // let rating=document.createElement("h5")
    
    // let title=document.createElement("h3")
    
    
})
let productArray=[];

fetchData().then((data)=>{
    let productArray=[...data];
    console.log(productArray)
})



async function fetchData(){
    try{
        let res=await fetch("https://fakestoreapi.com/products")
    let data=await res.json();
    //console.log(data)
    return data;
    }
    catch(err){
        console.log("Error Occured:",err)
    }
}