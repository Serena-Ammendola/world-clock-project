function updateTime() {
  // Dublin
  let dublinElement = document.querySelector("#dublin");
  let dublinDateElement = dublinElement.querySelector(".date");
  let dublinTimeElement = dublinElement.querySelector(".time");
  let dublinTime = moment().tz("Europe/Dublin");

  dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
  dublinTimeElement.innerHTML = dublinTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //San Antonio
  let santAntonioElement = document.querySelector("#sant-antonio");
  let santAntonioDateElement = santAntonioElement.querySelector(".date");
  let santAntonioTimeElement = santAntonioElement.querySelector(".time");
  let santAntonioTime = moment().tz("US/Central");

  santAntonioDateElement.innerHTML = santAntonioTime.format("MMMM Do YYYY");
  santAntonioTimeElement.innerHTML = santAntonioTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );

  //Naples
  let naplesElement = document.querySelector("#naples");
  let naplesDateElement = naplesElement.querySelector(".date");
  let naplesTimeElement = naplesElement.querySelector(".time");
  let naplesTime = moment().tz("Europe/Rome");

  naplesDateElement.innerHTML = naplesTime.format("MMMM Do YYYY");
  naplesTimeElement.innerHTML = naplesTime.format(
    "hh:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
