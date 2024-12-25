//fetch all user and display 

function fetchUsers(){
    fetch("https://prickly-tourmaline-gazelle.glitch.me/users")
    .then(res=>res.json())
    .then(data=>{
        let userlist=document.getElementById("userlist");
        console.log(data);
    })
}
// Update user with id 1
document.getElementById('updateuserbtn').addEventListener('click', () => {
    const updatedUser = {
        name: 'Alice', // New name
        email: 'alice@example.com'
    };

    fetch(`${"https://prickly-tourmaline-gazelle.glitch.me/users"}/1`, {
        method:'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedUser)
    })
    .then(response => response.json())
    .then(() => {
        console.log('User updated');
        fetchUsers(); // Fetch the updated list of users
    })
    .catch(error => console.error('Error updating user:', error));
});
// Delete user with id 1
document.getElementById('deleteuserbtn').addEventListener('click', () => {
    fetch(`${"https://prickly-tourmaline-gazelle.glitch.me/users"}/1`, {
        method: 'DELETE'
    })
    .then(() => {
        console.log('User deleted');
        fetchUsers(); // Fetch the updated list of users
    })
    .catch(error => console.error('Error deleting user:', error));
});

// Initial fetch when page loads
fetchUsers();