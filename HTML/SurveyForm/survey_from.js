document.getElementById('submitBtn').addEventListener('click', function () {
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;

    // Validate email format
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Validate mobile number format (10 digits)
    const mobilePattern = /^[0-9]{10}$/;
    if (!mobilePattern.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    // If all validations pass, proceed with form submission
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    let dob = document.getElementById('dob').value;
    let country = document.getElementById('country').value;
    let gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : '';
    let profession = document.getElementById('profession').value;

    let message = `First Name: ${firstName}\nLast Name: ${lastName}\nDate of Birth: ${dob}\nCountry: ${country}\nGender: ${gender}\nProfession: ${profession}\nEmail: ${email}\nMobile: ${mobile}`;
    alert(message);
    document.getElementById('surveyForm').reset();
});