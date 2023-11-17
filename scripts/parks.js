
//GLOBALS
let selectedLocation = "";
let selectedParkType = "";
let filterText = ""

// window.addEventListener("load", e => {
document.addEventListener("DOMContentLoaded", e => {

    searchButton.addEventListener("click", e=>{
        filterText = searchInput.value;
        showResults();
    })


    locationsArray.forEach(location => locationsList.innerHTML += `<option>${location}</option>`);
    parkTypesArray.forEach(pt => parkTypeList.innerHTML += `<option>${pt}</option>`);

    locationsList.addEventListener("change", e => {
        selectedLocation = e.target.value;
        showResults();
    });

    parkTypeList.addEventListener("change", e => {
        selectedParkType = e.target.value;
        showResults();
    });

    function isMatch(p) {
        return (filterText == "" || p.LocationName.includes(filterText) ) &&
               (selectedLocation == "" || p.State == selectedLocation) &&
               (selectedParkType == "" || p.LocationName.includes(selectedParkType));
    }

    function getCard(p) {

        let visit = "";
        if(p.hasOwnProperty("Visit")){
            visit = `<div><a href="${p.Visit}"> Visit: </a></div>`
        }        
        
        // let phone = "";
        // if(p.Phone){
        //     phone = `<div>PHONE: ${p.Phone}</div>`
        // }
        
        // let phone = p.Phone ? `<div>PHONE: ${p.Phone}</div>` : "";

        return `<div class="card">
        ${p.LocationName}
        <div><b>${p.State}</b></div>
        ${visit}
        ${ p.Phone ? `<div>PHONE: ${p.Phone}</div>` : "" }
        </div>`;
    }

    function showResults() {
        results.innerHTML = "";
        const filtered = nationalParksArray.filter(isMatch);
        filtered.forEach(p => results.innerHTML += getCard(p));
    }

    showResults();
}); //END LOADED