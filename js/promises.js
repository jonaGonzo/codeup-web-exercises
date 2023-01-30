async function publicEvents(){
    try {
            let response = await fetch("https://api.github.com/users/jonaGonzo/events/public", {headers: {'Authorization': `token ${keys.github}`}});
            console.log(response);
        return response.json()
    }catch (error){
            console.log(error)
    }
}

