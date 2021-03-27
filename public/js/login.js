const loginFormHandler = async (e) => {
    e.preventDefault();

    const password = document.querySelector('#password').value.trim();
    const username = document.querySelector('#username').value.trim();

    if (username && password) {
        const response = await fetch('/api/profile/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            header: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/profile');
        } else {
            alert(response.statusText);
        }
    }
};


document
    .querySelector('UPDATE-THIS')
    .addEventListener('submit', loginFormHandler);
