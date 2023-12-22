import { NavLink } from "react-router-dom";
import CustomNavLink from "../ui/CustomNavLink";

export default function CategoryNavbar() {
    const isActiveStyle = 'font-bold text-red'
    return (
        <nav id="categoryNav" className="text-white border-solid border-b-2 border-red mx-24 py-6">
            <ul className="flex flex-row gap-16">
                <CustomNavLink linkTo={"/"} linkText={"Trending"} style={isActiveStyle} />
                <CustomNavLink linkTo={"/now_playing"} linkText={"Now Playing"} style={isActiveStyle} />
                <CustomNavLink linkTo={"/popular"} linkText={"Popular"} style={isActiveStyle} />
                <CustomNavLink linkTo={"/upcoming"} linkText={"Upcoming"} style={isActiveStyle} />
            </ul>
        </nav>
    );
}
