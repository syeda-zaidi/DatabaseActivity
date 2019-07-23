
let config = {
    apiKey: "AIzaSyA8ittWnw7U7K8a7Rgsgz7T3Owi6XCoqWw",
    authDomain: "fir-test-ad074.firebaseapp.com",
    databaseURL: "https://fir-test-ad074.firebaseio.com",
    projectId: "fir-test-ad074",
    storageBucket: "",
    messagingSenderId: "371590315074",
    appId: "1:371590315074:web:f50de714abe3392f"
  };
  
  firebase.initializeApp(config);
  
  let database = firebase.database();
  
  let employees = [];
  
  let newName;
  let newRole;
  let newDate;
  let newRate;
  
  database.ref("/EmployeeData").on("child_added", (snapshot) => {
  
    // if (snapshot.child("").exists() && snapshot.child("highPrice").exists()) {
  
    // }
  
    // highPrice = snapshot.val().highPrice;
    // highBidder = snapshot.val().highBidder;
  
  
  
    // $("#highest-bidder").text(highPrice);
    // $("#highest-price").text(highBidder);
  
    
  
  
  }, (errorObject) => {
    console.log("The read failed: " + errorObject.code);
  });
  
  alert("here2");


  $("#submit-btn").click((evt) => {


    alert("here");
    // evt.preventDefault();
  
    newName = $("#name-input").val().trim();
    newRole = $("#role-input").val().trim();
    newDate = $("#date-input").val().trim();
    newRate = $("#rate-input").val().trim();
    
    console.log(newName + " " + newRole + " " + newDate + " " + newRate);

    let newEmployee = new Employee(newName, newRole, newDate, newRate);
  
    employees.push(newEmployee);
  
    database.ref("/EmployeeData").push({
      // name: newName,
      // role: newRole,
      // date: newDate,
      // rate: newRate

      newEmployee
    });
  
  
  });
  
  class Employee {
  
    constructor(name, role, date, rate) {
  
      this.name = name;
      this.role = role;
      this.date = date;
      this.rate = rate;
    }
  }
  