const loginFormHandler = async (e) => {
    e.preventDefault();

    const password = document.querySelector('#password').value.trim();
    const user_name = document.querySelector('#username').value.trim();

    if (user_name && password) {
        const response = await fetch('/api/profile/login', {
            method: 'POST',
            body: JSON.stringify({
                user_name: user_name,
                password: password
            }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
};


document
    .querySelector('#loginBtn')
    .addEventListener('click', loginFormHandler);
