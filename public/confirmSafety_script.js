window.onload = function(){ 

    var confirmSafetyButton= document.getElementById('confirmSafetyBtn');
    var header = document.getElementById('ElevatorIDHeader');

    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    console.log(urlParams);
    const elevatorID = urlParams.get('id')
    console.log(elevatorID);

    header.innerText = "Elevator ID: " + elevatorID

    confirmSafetyButton.onclick = function() {
        
        /*
        var url = window.location.href;
        var id = 
        var splitUrl = (url.split('/'));
        console.log(splitUrl)
        var newUrl = splitUrl[2] + "/registerVisit?id=123"
        console.log(newUrl);
        */
        location.href = '/registerVisit?id=' + elevatorID;
    }
};

