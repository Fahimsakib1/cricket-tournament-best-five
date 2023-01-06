// Ami try korchi onno vabe.. code thik ache.. valo moto kaj kaj kore....
// const allCardButtons = document.getElementsByClassName('card-button');
// for(const cardButton of allCardButtons){
//     cardButton.addEventListener('click', function(event){
//         const playerDiv = cardButton.parentNode.parentNode.children[0].innerText; //player der nam gula dekhabe.
//         // const playerDiv = event.target.parentNode.parentNode.children[0].innerText; //player der nam gula dekhabe.
//         // console.log(playerDiv);

//         event.target.setAttribute('disabled', true);
//         // console.log(cardButton);
        


//         const selectPlayerSection = document.getElementById('player-list-item');
//         const createPlayerList = document.createElement('li');
//         createPlayerList.innerText = playerDiv;
//         selectPlayerSection.appendChild(createPlayerList);



//         const playerListLength = selectPlayerSection.children.length;
//         // console.log("Selected Player Number: ", playerListLength);

//         if(playerListLength > 5){

//             alert("You Can't Add More Than 5 Players");
//             event.target.setAttribute('disabled', true);
//             selectPlayerSection.removeChild(createPlayerList);
//             return;

//         }

//     })
   
// }









const playerArray = [];
function selectedPlayer(element){

    //button disable code
    element.disabled = true;
    element.style.color = 'white';
    element.style.backgroundColor = '#A2A9AF';

    const selectPlayerSection = document.getElementById('player-list-item');
    const createNewPlayerList = document.createElement('li');
    createNewPlayerList.style.fontSize = '20px';
    createNewPlayerList.innerText = element.parentNode.parentNode.children[0].innerText;
    //selectPlayerSection.appendChild(createNewPlayerList);

    //object 
    const playerObject = {
        playerName : createNewPlayerList
    }

    //playerArray is for pushing the object element into playerArray[]
    playerArray.push(playerObject);

    for(const i = 1; i<= playerArray.length; i++){
        
        selectPlayerSection.appendChild(createNewPlayerList);
        // console.log('Array Length:', playerArray.length);

        if(playerArray.length > 5 ){
            
            alert("You can't Add More Than 5 Players");
            selectPlayerSection.removeChild(createNewPlayerList);
            element.disabled = true;
            element.style.color = 'white';
            element.style.backgroundColor = '#015196';
            return;
        }

        //else na dile browser er moddhe error ashe
        else{
            return;
        }
    }


}


