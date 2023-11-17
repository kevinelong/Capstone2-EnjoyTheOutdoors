document.addEventListener("DOMContentLoaded", e => {
    // SECOND MAKE SURE DATA IS LOADED LIKE THIS
    //document.body.innerHTML += mountainsArray.length; //We should se 48 in the show preview


    // FOURTH LOOP THROUGH ALL DATA AND ADD A NEW OPTION FOR EACH TO THE SELECT
    mountainsArray.forEach(mountain => { //USE FOR EACH METHOD OF THE DATA TO GET 1 AT A TIME IN ARROW FUNCTION
        const option = document.createElement("option"); //CREATE BLANK OPTION ELEMENT
        option.innerHTML = mountain.name; // SET DISPLAY OPTION CONTENT TO NAME
        list.appendChild(option); // PLACE OPTION IN THE SELECT LIST
    }); //END FOR EACH

    function draw(mountain){
        results.innerHTML += `<hr><h1>${mountain.name}</h1>`; //SHOW RESULTS
        results.innerHTML += mountain.desc;
        results.innerHTML += `<h3>Elevation: ${mountain.elevation} feet</h3>`;
        results.innerHTML += `<h3>Effort: ${mountain.effort}</h3>`;
        results.innerHTML += `<img src="./images/${mountain.img}">`;
    }
    // SIXTH - LISTEN FOR LIST CHANGE SELECTION
    list.addEventListener("change", event => {
        results.innerHTML = "";
        let mountain = mountainsArray.find(m => m.name == event.target.value); //FIND DATA
        draw(mountain);
    }); //END LISTENER

    searchInput.addEventListener("keyup", e=>{
        results.innerHTML = "";
        // let mountain = mountainsArray.find(m => m.desc.toLowerCase().includes(searchInput.value.toLowerCase())); //FIND DATA
        // draw(mountain);
        let mountainArray = mountainsArray.filter(m => m.desc.toLowerCase().includes(searchInput.value.toLowerCase())); //FIND DATA
        mountainArray.forEach(draw);
    })

}); // END LOADED