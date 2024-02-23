function submitForm() {
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;

    const requestData = {
        firstName: firstName,
        lastName: lastName
    };

    fetch('/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}
