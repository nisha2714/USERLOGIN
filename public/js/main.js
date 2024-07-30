document.getElementById('userForm').addEventListener('submit', async (e) => {
    e.preventDefault();

    const user = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        mobileNo: document.getElementById('mobileNo').value,
        emailId: document.getElementById('emailId').value,
        address: {
            street: document.getElementById('street').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            country: document.getElementById('country').value
        },
        loginId: document.getElementById('loginId').value,
        password: document.getElementById('password').value
    };

    if (!user.firstName || !user.lastName || !user.mobileNo || !user.emailId || !user.loginId || !user.password) {
        alert('Please fill in all required fields.');
        return;
    }

    if (!/^[0-9]{10}$/.test(user.mobileNo)) {
        alert('Mobile number must be 10 digits.');
        return;
    }

    if (!/^\S+@\S+\.\S+$/.test(user.emailId)) {
        alert('Invalid email format.');
        return;
    }

    if (!/^[a-zA-Z0-9]{8}$/.test(user.loginId)) {
        alert('Login ID must be 8 alphanumeric characters.');
        return;
    }

    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/.test(user.password)) {
        alert('Password must be at least 6 characters long, include an uppercase letter, a lowercase letter, a number, and a special character.');
        return;
    }

    try {
        const response = await fetch('/api/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            alert('User saved successfully!');
        } else {
            const errorData = await response.json();
            alert('Failed to save user: ' + errorData.message);
        }
    } catch (error) {
        alert('An error occurred.');
    }
});

