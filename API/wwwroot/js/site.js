let localHost = "https://localhost:7271/"

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('orderForm').addEventListener('submit', async function(event) {
        event.preventDefault();


        const item = {
            id: document.getElementById('itemId').value,
            name: document.getElementById('itemName').value
        };

        // Make the API call
        fetch("https://localhost:7271/Paypal", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            //body: JSON.stringify(item)
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
            .then(data => {
                alert('User added successfully!');
                
                return response.json();
            })
            .then((order) => order.id)
            .catch(error => alert(error.message));
    });
});
