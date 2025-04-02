document.getElementById('jobApplicationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let contact = document.getElementById('contact').value;
    
    if (!name  !email  !contact) {
        alert('Please fill out all required fields.');
        return;
    }
    
    alert('Application submitted successfully!');
    this.reset();
});