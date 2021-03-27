// const signupv1FormHandler = async (e) => {
//     e.preventDefault();
//     console.log('this is working');
//     const name = document.querySelector('#name').value.trim();
//     const email = document.querySelector('#email').value.trim();
//     const password = document.querySelector('#password').value.trim();

//     if (name && email && password) {
//         const response = await fetch('/api/users', {
//             method: 'POST',
//             body: JSON.stringify({ name, email, password }),
//             header: { 'Content-Type': 'application/json' },
//         });

//         if (response.ok) {
//             document.location.replace('/profile');
//         } else {
//             alert(response.statusText);
//         }
//     }

// }

const signupv2FormHandler = async (e) => {
    e.preventDefault();

    const name = document.querySelector('#name').value.trim();
    const user_name = document.querySelector('#username').value.trim();
    const description = document.querySelector('#description').value.trim();
    const pet_name = document.querySelector('#petName').value.trim();
    const pet_type = document.querySelector('#petType').value.trim();
    const pet_interest = document.querySelector('#petInterest').value.trim();
    const profile = {name: name, user_name: user_name, description: description, pet_name: pet_name, pet_type: pet_type, pet_interest: pet_interest }
    
    if (profile) {
        const response = await fetch('/api/profile', {
            method: 'POST',
            body: JSON.stringify({ profile }),
            header: { 'Content-Type': 'application/json' },
        });
        console.log(response);

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }

}
// document
//     .querySelector('#signupBtn')
//     .addEventListener('click', signupv1FormHandler);
document
    .querySelector('#signupBtn')
    .addEventListener('click', signupv2FormHandler);