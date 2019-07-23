
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
  
    let newRow = snapshot.val();

    console.log(newRow);

    let newTR = $("<tr>");

    let tdName = $("<td>").text(newRow.name);

    let tdRole = $("<td>").text(newRow.role);

    let tdDate = $("<td>").text(newRow.date);    
  
    let tdMonths = $("<td>").text("needs calc");    

    let tdRate = $("<td>").text(newRow.rate);

    let tdTotal = $("<td>").text("needs calc"); 
  
    newTR.append(tdName).append(tdRole).append(tdDate).append(tdMonths).append(tdRate).append(tdTotal);

    $("#employeeTable").append(newTR);
  
  }, (errorObject) => {
    console.log("The read failed: " + errorObject.code);
  });
  


  $("#submit-btn").click((evt) => {

    evt.preventDefault();
  
    newName = $("#name-input").val().trim();
    newRole = $("#role-input").val().trim();
    newDate = $("#date-input").val().trim();
    newRate = $("#rate-input").val().trim();
    
    console.log(newName + " " + newRole + " " + newDate + " " + newRate);

    let newEmployee = new Employee(newName, newRole, newDate, newRate);
  
    employees.push(newEmployee);
  
    database.ref("/EmployeeData").push({
      name: newName,
      role: newRole,
      date: newDate,
      rate: newRate
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
  