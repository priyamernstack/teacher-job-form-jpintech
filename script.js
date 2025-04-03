document.getElementById("jobApplicationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Get form values
    let postApplied = document.getElementById("postApplied").value;
    let name = document.getElementById("name").value;
    let fatherHusbandName = document.getElementById("fatherHusbandName").value;
    let address = document.getElementById("address").value;
    let contactNo = document.getElementById("contactNo").value;
    let mobile = document.getElementById("mobile").value;
    let dob = document.getElementById("dob").value;
    let email = document.getElementById("email").value;
    let maritalStatus = document.getElementById("maritalStatus").value;
    let spouseName = document.getElementById("spouseName").value;
    let education = document.getElementById("education").value;
    let workAddress = document.getElementById("workAddress").value;
    let numChildren = document.getElementById("numChildren").value;

    // Validation
    if (postApplied === "" || name === "" || fatherHusbandName === "" || address === "" || 
        contactNo === "" || mobile === "" || dob === "" || email === "") {
        alert("Please fill in all required fields!");
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Display confirmation
    alert("Form submitted successfully!");

    // Reset the form after submission
    document.getElementById("jobApplicationForm").reset();
});
