
document.addEventListener("DOMContentLoaded", ()=>{
    console.log("DOM Loaded");

    const myListDiv = document.querySelector(".list-div");

    
    const handleFormSubmit = (event,)=>{
        event.preventDefault();

        const submitResults = document.createElement("ul");
        submitResults.classList.add("shopping-list");
        myListDiv.appendChild(submitResults);
        
        const item = new Item(event.target["new-item"].value, event.target.shop.value);
        item.formatName();
        
        const newItem = document.createElement("li");
        const whichShop = document.createElement("p");
        console.log(newItem.textContent);
        
            if(event.target["new-item"].value !== ""){
                newItem.textContent = `${item.name}`
                submitResults.appendChild(newItem);
                whichShop.textContent = `from: ${item.shop}`
                submitResults.appendChild(whichShop)
        
            };


       const handleCommonItems = ()=>{

           const newCommonItem = document.createElement("li");
           const newCommonItem2 = document.createElement("li");
           
           if (event.target.milk.checked && event.target.bread.checked === true ){
               newCommonItem.textContent = event.target.milk.name
               newCommonItem2.textContent = event.target.bread.name
               submitResults.appendChild(newCommonItem)
               submitResults.appendChild(newCommonItem2)
               whichShop.textContent = `from: ${item.shop}`
               submitResults.appendChild(whichShop)
               
            }
            else  if (event.target.milk.checked === true) {
                newCommonItem.textContent = event.target.milk.name
                submitResults.appendChild(newCommonItem)
                whichShop.textContent = `from: ${item.shop}`
                submitResults.appendChild(whichShop)     
            }
            else if(event.target.bread.checked === true) {
                newCommonItem.textContent = event.target.bread.name
                submitResults.appendChild(newCommonItem)  
                whichShop.textContent = `from: ${item.shop}`
                submitResults.appendChild(whichShop)   
            }
        } 

        handleCommonItems();

        document.querySelector(".new-form").reset()
    }

    const handleClearMyList = (event)=>{
        console.log(event);
        const myListDiv = document.querySelector(".list-div");
        myListDiv.innerHTML = "";

    }
    
    const newForm = document.querySelector(".new-form");
    newForm.addEventListener("submit", handleFormSubmit)

    const deleteButton = document.querySelector("#delete-button");
    deleteButton.addEventListener("click", handleClearMyList)

    

});