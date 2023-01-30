(async () => {
   const publicEvents = async (username) => {
        try {
            let response = await fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${keys.github}`}});
            // console.log(response);
            let data = await response.json();
            // console.log(data)
            return data

        } catch (error) {
            console.log(error)
        }
    }

    const timeCommit = async (username) => {
        try {
           let time = await publicEvents(username)
            let lastCommit = time[0].created_at;
            // console.log(lastCommit)
            const date = new Date(`${lastCommit}`);
           return `${username}'s last commit was on: ${date.toLocaleDateString()} @ ${date.toLocaleTimeString('en-US')}`
        } catch (error) {
        console.log(error)
    }
        console.log(timeCommit)
    }

    let answer = await timeCommit("jonaGonzo")
    console.log(answer)
})();