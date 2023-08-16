export async function Repo() {
    const resp = await fetch('https://api.github.com/users/lilospace/repos', {
        cache: 'no-cache'
    })

    const user = await resp.json();

    return (
        <div>
            <h1>user</h1>
            <pre>
                {JSON.stringify(user, null, 2)}
            </pre>
        </div>
    )
}
