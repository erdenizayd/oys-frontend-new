import { useContext } from "react";
import { Link, useLocation, NavLink } from "react-router-dom";
import RoleContext from "../context/rolecontext";

function NavigationComponent() {
    const location = useLocation();
    const {role} = useContext(RoleContext);

    return (
        <div className="navigation">
            <span className="title" >Navigasyon</span>
            <nav>
                <NavLink to="/" className={
                    () => (
                        location.pathname === "/" ? "navactive" : "nav"
                        )}>Anasayfa</NavLink>
                {localStorage.getItem("role") === 'admin' ? "" : <NavLink to="/my_courses" className={
                    () => (
                        location.pathname === "/my_courses" ? "navactive" : "nav"
                    )}>Kayıtlı Derslerim</NavLink>}
                <NavLink to="/courses" className={
                    () => (
                        location.pathname === "/courses" ? "navactive" : "nav"
                    )}>Tüm Dersler</NavLink>
                <NavLink to="/users" className={
                    () => (
                        location.pathname === "/users" ? "navactive" : "nav"
                    )}>Kullanıcılar</NavLink>
                <NavLink to="/classes" className={
                    () => (
                        location.pathname === "/classes" ? "navactive" : "nav"
                    )}>Sınıflar</NavLink>
            </nav>
            
        </div>
    )
}

export default NavigationComponent;