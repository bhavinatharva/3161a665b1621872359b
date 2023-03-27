const postService = async (URL: string, params: any) => {
    let response = {}
    try {
        const result = await fetch(URL, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(params),
        });
        response = await result.json();
        console.log(response)
    } catch (error) {
        console.log('error', error)
    }
    return response
}

const getService = async (URL: string) => {
    let response = {}
    try {
        const result = await fetch(URL, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
        });
        response = await result.json();
        console.log(response)
    } catch (error) {
        console.log('error', error)
    }
    return response
}

export { postService, getService }