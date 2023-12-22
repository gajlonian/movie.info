import { NavLink } from "react-router-dom";

export default function CustomNavLink({ linkTo, style, linkText }) {
    const getActiveStyle = ({ isActive }) => (isActive ? style : "");
    return (
        <NavLink to={`${linkTo}`} className={getActiveStyle}>
            {linkText}
        </NavLink>
    );
}
