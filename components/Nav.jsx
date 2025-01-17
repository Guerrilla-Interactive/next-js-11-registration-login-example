import { useState, useEffect } from 'react';

import { NavLink } from '.';
import { userService } from 'services';
import Logo from './Logo';

export { Nav };

function Nav() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const subscription = userService.user.subscribe(x => setUser(x));
        return () => subscription.unsubscribe();
    }, []);

    function logout() {
        userService.logout();
    }

    // only show nav when logged in
    if (!user) return null;
    
    return (
        <nav className="navbar navbar-expand navbar-dark">
            <div className="navbar-nav">
                <Logo />
                {/* <NavLink href="/" exact className="nav-item nav-link">Home</NavLink>
                <NavLink href="/users" className="nav-item nav-link">Users</NavLink> */}
                <NavLink href="/elements" className="nav-item nav-link">Elements</NavLink>
                <NavLink href="/sections" className="nav-item nav-link">Sections</NavLink>
                <NavLink href="/components" className="nav-item nav-link">Components</NavLink>
                <a onClick={logout} className="nav-item nav-link">Logout</a>
            </div>
        </nav>
    );
}