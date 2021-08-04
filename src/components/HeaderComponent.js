import React from 'react';
import { Navbar, Icon, NavItem, Dropdown, Divider } from 'react-materialize';
import { useHistory, Link } from 'react-router-dom';

const HeaderComponent = () => {
    const user = JSON.parse(localStorage.getItem("state"));
    const history = useHistory();
    const handleLogout = () => {
        localStorage.removeItem('tokenInLearning');
        localStorage.removeItem('state');
        history.push('/');
    }
    return (
        <>
            <Navbar
                alignLinks="right"
                brand={<a className="brand-logo" href="#" style={{marginLeft: "30px"}}>Logo</a>}
                id="mobile-nav"
                menuIcon={<Icon>menu</Icon>}
                options={{
                    draggable: true,
                    edge: 'left',
                    inDuration: 250,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 200,
                    preventScrolling: true
                }}
                className="indigo darken-3"
            >
                <NavItem>
                    <Link to="/home">Home</Link>
                </NavItem>
                <NavItem>
                    <Link to="/courses">Pelatihan</Link>
                </NavItem>
                {/* <Dropdown
                    id="pelatihan"
                    options={{
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                    }}
                    trigger={<a href="#!">Pelatihan{' '}<Icon right>arrow_drop_down</Icon></a>}
                >
                    <a href="#">
                    Gratis
                    </a>
                    <Divider />
                    <a href="#">
                    Premium
                    </a>
                </Dropdown> */}
                <Dropdown
                    id="akun"
                    options={{
                    alignment: 'left',
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                    }}
                    trigger={<a href="#!">{ user.name }{' '}<Icon right>account_circle</Icon></a>}                    
                >
                    <a href="#">
                    Pembayaran
                    </a>
                    <a href="#">
                    Ubah Password
                    </a>
                    <Divider />
                    <a onClick={handleLogout}>
                        Logout
                    </a>
                </Dropdown>
                <div style={{marginRight: "30px"}}></div>
            </Navbar>
        </>
    );
}

export default HeaderComponent;