import React, { useState } from 'react';
import Header1 from '../Header_Component/Header1';
import ViewAlias from '../Signup_Component/ViewAlias';
import Description1 from './Description1';
import CredPage from '../Signup_Component/CredPage';

function HomePage(props) {
    const [admindtls] = useState({
        title: "Admin",
        desc: "Manage turf at admin level",
        button: "Manage"
    });
    const [userdtls] = useState({
        title: "User",
        desc: "Manage turf at user level",
        button: "Book"
    });

    return (
        <>
            <div
                style={{
                    backgroundImage: `url('/images/home.jpg')`,
                    backgroundSize: 'cover',  // Optional: scales image to cover the container
                    backgroundPosition: 'center',  // Optional: centers the image
                    backgroundRepeat: 'no-repeat',  // Optional: prevents image from repeating
                    height: '100vh'  // Optional: adjust height as needed
                }}
            >
                <Header1 cred={props.cred} />
                <Description1 />
                <br />
                <ViewAlias dtls={admindtls} setcred={props.setcred} />
                <br />
                <ViewAlias dtls={userdtls} setcred={props.setcred} />
                <CredPage cred={props.cred} setcred={props.setcred} setcontents={props.setcontents} setview={props.setview} />
                <h1 className="clear1">&nbsp;</h1>
            </div>
        </>
    );
}

export default HomePage;
