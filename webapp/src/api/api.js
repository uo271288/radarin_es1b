
//REACT_APP_API_URI is an enviroment variable defined in the file .env.development or .env.production
export async function addUser(username,email){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/users/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({'name':username, 'email':email})
      })
    return await response.json()
}

export async function getUsers(){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    console.log(apiEndPoint)
    let response = await fetch(apiEndPoint+'/users/list')
    return await response.json()
}

export async function addLocation(webId,location,state,country){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/location/add', {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
            'user':webId, 
            'location':location,
            'state':state,
            'country':country
        })
      })
    return await response.json()
}

export async function getFriendsLocations(){
    /*const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    console.log(apiEndPoint)
    let response = await fetch(apiEndPoint+'/users/list')
    return await response.json()*/
    console.log("Pidiendo localizacionies")
    return {'locs': [ {'altitud':51.505, 'latitud':-0.09},
                            {'altitud':50.505, 'latitud':-1.09},
                            {'altitud':53.505, 'latitud':-3.09}
                        ]}
}

export async function getFriends(webId){
    const apiEndPoint= process.env.REACT_APP_API_URI || 'http://localhost:5000/api'
    let response = await fetch(apiEndPoint+'/friends/list/'+webId+'?user='+webId)
    return await response.json()
}