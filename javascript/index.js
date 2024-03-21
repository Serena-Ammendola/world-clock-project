function updateTime() {
  // Dublin
  let dublinElement = document.querySelector("#dublin");
  if (dublinElement) {
    let dublinDateElement = dublinElement.querySelector(".date");
    let dublinTimeElement = dublinElement.querySelector(".time");
    let dublinTime = moment().tz("Europe/Dublin");

    dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
    dublinTimeElement.innerHTML = dublinTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //San Antonio
  let santAntonioElement = document.querySelector("#sant-antonio");
  if (santAntonioElement) {
    let santAntonioDateElement = santAntonioElement.querySelector(".date");
    let santAntonioTimeElement = santAntonioElement.querySelector(".time");
    let santAntonioTime = moment().tz("US/Central");

    santAntonioDateElement.innerHTML = santAntonioTime.format("MMMM Do YYYY");
    santAntonioTimeElement.innerHTML = santAntonioTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }

  //Naples
  let naplesElement = document.querySelector("#naples");
  if (naplesElement) {
    let naplesDateElement = naplesElement.querySelector(".date");
    let naplesTimeElement = naplesElement.querySelector(".time");
    let naplesTime = moment().tz("Europe/Rome");

    naplesDateElement.innerHTML = naplesTime.format("MMMM Do YYYY");
    naplesTimeElement.innerHTML = naplesTime.format(
      "hh:mm:ss [<small>]A[</small>]"
    );
  }
}
function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `
  <div class="city">
 <div>
  <h2>${cityName}</h2>
<div class="date">${cityTime.format("MMMM Do YYYY")}</div>
</div>
<div class="time">${cityTime.format("hh:mm:ss")} <small>${cityTime.format(
    "A"
  )}</small></div>
</div>
<a href="/">Back to homepage</a> `;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);

updateCity();
setInterval(updateCity, 1000);
