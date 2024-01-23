import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';

function Landing() {
  const[data, setData] = useState(null)
  const handleLoginSuccess = (credentialResponse) => {
    var credentialResponseDecoded = jwtDecode(credentialResponse.credential);
    console.log(credentialResponseDecoded);
    setData(credentialResponseDecoded)
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={() => {
          console.log('Login Failed');
        }}
      />
      {data && (
        <div>
            <h2>Welcome {data.given_name} {data.family_name}</h2>
        </div>
      )}
    </div>
  );
}

export default Landing;
