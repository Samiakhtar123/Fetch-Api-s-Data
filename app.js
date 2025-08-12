async function getUserData() {
    try{
        let response = await fetch ("https://jsonplaceholder.typicode.com/users");
        let data = await response.json();
        console.log(data);
         const container = document.getElementById('user-container');
        container.innerHTML = data.slice(0,6).map(user => `<li>${user.name} (${user.email}) (${user.phone})</li>`).join('');
    }
    catch(error){
        console.log("Data not fetched",error);
        
    }
    
}
getUserData();

