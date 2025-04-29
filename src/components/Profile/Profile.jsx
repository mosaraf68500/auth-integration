import React, { use } from 'react';
import { FirebaseAuthContex } from '../../Contex/FirebaseAuthContex/FirebaseAuthContex';

const Profile = () => {
    const {user}=use(FirebaseAuthContex);
    return (
        <div>
            <p>{user.email}</p>
        </div>
    );
};

export default Profile;