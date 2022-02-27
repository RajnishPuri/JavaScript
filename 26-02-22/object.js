const person = {
    firstName: "John",
    lastName : "Doe",
    id     :  5566
  };
  
  // Display some data from the object:
  document.getElementById("demo").innerHTML =
  person["firstName"] + " " + person["lastName"];