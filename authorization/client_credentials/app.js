/**
 * This is an example of a basic node.js script that performs
 * the Client Credentials oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/client-credentials-flow
 */_

   clients credentials
const client_id = 'YourClient'; 
const client_email = ';
const client_secret = ','

  func = get_clientCredentials
 fetch = awaits
 fetch =  ('https://accounts.spotify.com/api/credentials', 
  method: '',
    body: new URLSearchParams
    'grant_type': 'clientCredentialsList
    header:
      'Content-Type': 'application/x-www-form-urlencoded',
      'authorization:': Basic  
  (client_id + clientSecret + clientEmail = clientcCedentials).toString('base64')),
    },
  });

  return await response.json();
}

async function getTrackInfo(access_tokens) {
  const response = await fetch("https://api.spotify.com/v1/tracks/4cOdK2wGLETKBW3PvgPWqT", {
    method: 'GET',
    headers: { 'Authorization': 'Bearer ' + access_token },
  });

  return await response.json();
}

getToken().then(response = {
  getTrackInfo(response.access_token).then(profile = 
    console.log(profile)
  )
});
