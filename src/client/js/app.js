const entryContainer = document.getElementById('entry-container');
const entryHolder = document.getElementById('entry-placeholder');


//Event listener on submit button, listen for DOMContentLoaded event, initialize processInput
document.addEventListener('DOMContentLoaded', () => {
    const submit = document.getElementById("submit-button");
    submit.addEventListener("click", processInput);
});

//Function initialized by the event listener
const processInput = (event) => {
  event.preventDefault();

  let city = document.getElementById('city').value;
  let startDate = document.getElementById('date-start').value;
  let endDate = document.getElementById('date-end').value;

  if((city==='') || (startDate==='') || (endDate==='')){
    alert("Please enter city, departure date, and return date.")
  } else{
    fetch('http://localhost:8081/process',{
      method: 'POST',
      credentials: 'same-origin',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        city: city,
        startDate: startDate,
        endDate: endDate
      })
    })
    .then((res => res.json()))
    .then((res) => {
      populateData(res);
    })
  }
};





//If default text exists, remove before adding, if no default text, just add new card.
const populateData = (res) => {
    if (document.contains(entryHolder) == true) {
        entryHolder.style.display = "none";
        createCardUI(res);

    } else if (document.contains(entryHolder) == false) {
        createCardUI(res);

    }
};

//Update UI with new card
const createCardUI = (res) => {
  let entryCard = document.createElement('div');
  entryCard.classList.add('entry-card');
  entryContainer.appendChild(entryCard);

  let dataContainer = document.createElement('div');
  dataContainer.classList.add('data-container');
  entryCard.appendChild(dataContainer);

  let imgContainer = document.createElement('div');
  dataContainer.appendChild(imgContainer);

  let tripData = document.createElement('div');
  tripData.classList.add('trip-data');
  dataContainer.appendChild(tripData);

  let addPicture = document.createElement('img');
  let addCity = document.createElement('h3');
  addCity.classList.add('returned-data');
  let addTemp = document.createElement('div');
  addTemp.classList.add('returned-data');
  let addCountdown = document.createElement('div');
  addCountdown.classList.add('returned-data');
  let addStartDate = document.createElement('div');
  addStartDate.classList.add('returned-data');
  let addEndDate = document.createElement('div');
  addEndDate.classList.add('returned-data');
  let addTripLength = document.createElement('div');
  addTripLength.classList.add('returned-data');
  let removeTrip = document.createElement('div');

  addPicture.src = `${res.cityPhoto}`;
  addCity.innerHTML = `<strong>${res.city}</strong>`;
  addCountdown.innerHTML = `This trip is <strong>${res.countdownDays} day(s)</strong> away!`;
  addStartDate.innerHTML = `Departure Date: <strong>${res.startDate}</strong>`;
  addEndDate.innerHTML = `Return Date: <strong>${document.getElementById('date-end').value}</strong>`;
  addTripLength.innerHTML = `Trip Length: <strong>${res.tripLengthDays} day(s)</strong>`;
  addTemp.innerHTML = `Temperature: <strong>${res.temp}°F</strong>`;
  removeTrip.innerHTML = `Remove`;
  removeTrip.id = "remove-trip";

  addPicture.classList.add('entry-img')
  imgContainer.appendChild(addPicture);

  tripData.appendChild(addCity);
  tripData.appendChild(addCountdown);
  tripData.appendChild(addStartDate);
  tripData.appendChild(addEndDate);
  tripData.appendChild(addTripLength);
  tripData.appendChild(addTemp);
  entryCard.appendChild(removeTrip);

  removeTrip.addEventListener("click", () => {
      entryCard.remove();
    });
}

export {
  populateData,
  processInput,
  createCardUI
}
