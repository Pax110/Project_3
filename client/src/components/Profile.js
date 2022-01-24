import React from 'react';
import {useUserAuth} from './context/UserAuthContext'

const Profile = () => {
    const {user} = useUserAuth()

  return <div>
      <strong>Profile</strong>
      <div><strong>Email: </strong>{user && <div>{user.email}</div>}</div>
      <div><strong>Name: </strong></div>{user && <div>{user.displayName}</div>}
  </div>
}

export default Profile;









// import React from 'react';
// import {useUserAuth} from './context/UserAuthContext'
// function Profile() {
//     const {user} = useUserAuth()
//     console.log("user",user);
//   return <div>Profile</div>
// }

// export default Profile;
