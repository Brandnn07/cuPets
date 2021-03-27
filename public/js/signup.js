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
    console.log(name, user_name, description, pet_name, pet_type, pet_interest);

    if (name && user_name && description && pet_name && pet_type && pet_interest) {
        const response = await fetch('/api/profile', {
            method: 'POST',
            body: JSON.stringify({ name, user_name, description, pet_name, pet_type, pet_interest }),
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