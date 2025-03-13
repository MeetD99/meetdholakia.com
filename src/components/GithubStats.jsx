import React, { useEffect, useState } from 'react'

const GithubStats = () => {
    const [githubData, setGithubData] = useState(null);

    useEffect(() => {
        fetch("https://api.github.com/users/MeetD99")
        .then((res) => res.json())
        .then((data) => {setGithubData(data); console.log(data)});
    }, []);
    return (
        <div>GithubStats</div>
    )
}

export default GithubStats