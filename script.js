// windowindow.onload = ()=> displayResult();

let arr=[];
let inputCol = document.getElementById("input");


function displayEmoji(searchQuery=""){

    let filterData = emojiList.filter((e)=>{
        if(e.description.indexOf(searchQuery)!= -1){
        return true;
    }

        if(e.tags.some(elem=>elem.startsWith(searchQuery))){return true;}
        if(e.aliases.some(elem=>elem.startsWith(searchQuery))){return true;}
    })




  
    const results = document.getElementById("serachResult");
    results.innerHTML='';
    filterData.forEach((element)=>{
        
        const tabelRow = document.createElement("tr");
        
        const emoji = document.createElement('td');
        const aliases = document.createElement('td');
        const discription = document.createElement('td');


        // putting value or innerText;
        emoji.innerText = element.emoji;
        aliases.innerText = element.aliases;
        discription.innerText = element.description;
        
        tabelRow.append(emoji, aliases, discription);
        results.append(tabelRow);

    })
}

window.onload = ()=> displayEmoji();

input.addEventListener("keyup",emojiSearch);
function emojiSearch(){
    let inputValue = inputCol.value;
    displayEmoji(inputValue);
}



