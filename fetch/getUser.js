//fetch used to get values
async function getUsers() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let users = await response.json();
        console.log("first 10  users");
        users.slice(0,3).forEach(usr => {
            console.log(`# ${usr.id} : ${usr.username}`);
            
        });
        
    } catch (error) {
        console.error("Error fetching datas:",error);
    }
}
getUsers();