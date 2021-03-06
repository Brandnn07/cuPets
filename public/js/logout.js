const logout = async () => {
    const response = await fetch('/api/profile/logout', {
        method: 'POST',
        header: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
        document.location.replace('/');
    } else {
        alert(response.statusText);
    }
};

document.querySelector('#logoutBtn').addEventListener('click', logout);