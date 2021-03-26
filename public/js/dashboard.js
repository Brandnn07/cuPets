const delButtonHandler = async (e) => {
    if (e.target.hasAttribute('UPDATE-THIS')) {
        const id = e.target.getAttribute('UPDATE-THIS');

        const response = await fetch(`/api/UPDATE-THIS/${id}`, {
            method: 'DETELE',
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to delete project');
        }
    }
};

document
    .querySelector('UPDATE-THIS')
    .addEventListener('click', delButtonHandler);