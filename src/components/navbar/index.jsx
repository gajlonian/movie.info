import { Link } from "react-router-dom";
import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import CustomNavLink from "../ui/CustomNavLink";
import { memo } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const Navbar = memo(function Navbar() {
    const { visible, isBehaviorTriggered } = useScrollVisibility();
    const isVisible = visible ? "" : "-translate-y-full transition-all delay-100";
    const bgColor = isBehaviorTriggered && visible ? "bg-black bg-opacity-70 border-none" : "";
    const isMediumDevice = useMediaQuery("only screen and (max-width : 768px)");

    return (
        <nav
            id="mainNavbar"
            className={`sticky top-0 z-50 w-full text-white border-solid border-b-2 border-white border-opacity-10 ${isVisible} ${bgColor}`}
        >
            <div className="md:px-24 px-8 h-16 flex items-center justify-between content-center">
                <div className="">Movie.Info</div>
                <NavbarItems />
            </div>
        </nav>
    );
});

function NavbarItems() {
    const isActiveStyle = "font-bold text-red";
    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <ul className="flex items-center gap-3 md:gap-14 md:flex-row h-full">
            <li onClick={handleClick}>
                <CustomNavLink linkText={"Home"} linkTo={"/"} style={isActiveStyle} />
            </li>
            <CustomNavLink linkText={"Movies"} linkTo={"/movies"} style={isActiveStyle} />
            <CustomNavLink linkText={"Tv Shows"} linkTo={"/tvShows"} style={isActiveStyle} />
            <CustomNavLink linkText={"My List"} linkTo={"/my_list"} style={isActiveStyle} />
        </ul>
    );
}

export default Navbar;
