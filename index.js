//deposit-----------------------------

document.getElementById("showButton").addEventListener("click", function () {
  // Get the entered GL No. and Account No.
  var glNoInput = document.getElementById("glNoInput").value;
  var accountNoInput = document.getElementById("accountNoInput").value;

  // Search for a matching record in the table
  var table = document.querySelector("table");
  var rows = table.getElementsByTagName("tr");

  var found = false; // Flag to track if a match was found

  for (var i = 1; i < rows.length; i++) {
    // Start at 1 to skip the header row
    var row = rows[i];
    var glNo = row.cells[2].textContent;
    var accountNo = row.cells[3].textContent;

    if (glNo === glNoInput && accountNo === accountNoInput) {
      // Populate the Full Name with the first and last name from the matching row
      var firstName = row.cells[0].textContent;
      var lastName = row.cells[1].textContent;
      var balance = row.cells[4].textContent;
      document.getElementById("fullName").textContent =
        firstName + " " + lastName;
      document.getElementById("balance").textContent = balance;
      document.getElementById("row2").style.display = "none"; // Show the table
      found = true;
      break; // Exit the loop since we found a match
    }
  }

  // If no match was found, display no matching record found
  if (!found) {
    document.getElementById("fullName").textContent = "";
    document.getElementById("balance").textContent = "";
    document.getElementById("row2").style.display = "none";
    document.getElementById("redSignal").textContent =
      "No matching record found.";
  } else {
    document.getElementById("redSignal").textContent = ""; // Clear no matching record found
  }
});

// second for general journal
document.getElementById("searchButton").addEventListener("click", function () {
  // Get the entered GL No. and Account No.
  var glNoInput = document.getElementById("glNoInput2").value;
  var accountNoInput = document.getElementById("accountNoInput2").value;

  // Search for a matching record in the table
  var table = document.querySelector("table");
  var rows = table.getElementsByTagName("tr");

  var found = false; // Flag to track if a match was found

  for (var i = 1; i < rows.length; i++) {
    // Start at 1 to skip the header row
    var row = rows[i];
    var glNo = row.cells[2].textContent;
    var accountNo = row.cells[3].textContent;

    if (glNo === glNoInput && accountNo === accountNoInput) {
      // Populate the Full Name with the first and last name from the matching row
      var firstName = row.cells[0].textContent;
      var lastName = row.cells[1].textContent;
      var balance = row.cells[4].textContent;
      document.getElementById("fullName2").textContent =
        firstName + " " + lastName;
      document.getElementById("balance2").textContent = balance;
      document.getElementById("row2").style.display = "none"; // Show the table
      found = true;
      break; // Exit the loop since we found a match
    }
  }

  // If no match was found, display no matching record found
  if (!found) {
    document.getElementById("fullName2").textContent = "";
    document.getElementById("balance2").textContent = "";
    document.getElementById("row2").style.display = "none";
    document.getElementById("redSignal2").textContent =
      "No matching record found.";
  } else {
    document.getElementById("redSignal2").textContent = ""; // Clear no matching record found
  }
});

// for passport
document.getElementById("passport").addEventListener("input", function (event) {
  const fileInput = event.target;
  const maxFileSizeInBytes = 50 * 1024; // Max size
  const errorMessage = document.getElementById("error-message");

  if (fileInput.files && fileInput.files[0]) {
    const fileSize = fileInput.files[0].size;

    if (fileSize > maxFileSizeInBytes) {
      errorMessage.textContent =
        "Passport photo size exceeds the maximum allowed size (50KB). Please select a smaller file.";
      fileInput.value = null;
    } else {
      errorMessage.textContent = "";
      const passportDisplay = document.getElementById("passport-display");

      //image element
      const uploadedPassport = document.createElement("img");
      uploadedPassport.src = URL.createObjectURL(fileInput.files[0]);
      uploadedPassport.classList.add("img-fluid");

      passportDisplay.innerHTML = "";
      passportDisplay.appendChild(uploadedPassport);
    }
  }
});
// end of passport
