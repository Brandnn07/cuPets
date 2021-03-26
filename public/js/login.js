const loginFormHandler = async (e) => {
    e.preventDefault();

    const email = document.querySelector('#UPDATE-THIS').value.trim();
    const password = document.querySelector('#UPDATE-THIS').value.trim();

    if (email && password) {
        const response = await fetch('/api/users/login', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            header: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
};

const signupFormHandler = async (e) => {
    e.preventDefault();
    
    const name = document.querySelector('#UPDATE-THIS').value.trim();
    const email = document.querySelector('#UPDATE-THIS').value.trim();
    const password = document.querySelector('#UPDATE-THIS').value.trim();
    
    if (name &&email && password) {
        const response = await fetch('/api/users', {
            method: 'POST',
            body: JSON.stringify({ name, email, password }),
            header: { 'Content-Type': 'application/json' },
        });
    
        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert(response.statusText);
        }
    }
    
}

document
    .querySelector('UPDATE-THIS')
    .addEventListener('submit', loginFormHandler);
document
    .querySelector('UPDATE-THIS')
    .addEventListener('submit', signupFormHandler);