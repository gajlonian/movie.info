import { useScrollVisibility } from "../../hooks/useScrollVisibility";
import CustomNavLink from "../ui/CustomNavLink";

export default function Navbar() {
    const { visible, isBehaviorTriggered } = useScrollVisibility();
    const isVisible = visible ? "" : "-translate-y-full transition-all delay-100";
    const bgColor = isBehaviorTriggered && visible ? "bg-black bg-opacity-70 border-none" : "";
    const isActiveStyle = 'font-bold text-red'

    return (
        <nav
            id="mainNavbar"
            className={`sticky top-0 z-50 w-full text-white border-solid border-b-2 border-white border-opacity-10 ${isVisible} ${bgColor}`}
        >
            <div className="px-24 h-16 flex items-center justify-between content-center">
                <div className="">Movie.Info</div>
                <ul className="flex items-center gap-14 h-full">
                    <CustomNavLink linkText={"Home"} linkTo={"/"} style={isActiveStyle} />
                    <CustomNavLink linkText={"Movies"} linkTo={"/movies"} style={isActiveStyle} />
                    <CustomNavLink linkText={"Tv Shows"} linkTo={"/tvShows"} style={isActiveStyle} />
                    <CustomNavLink linkText={"My List"} linkTo={"/my_list"} style={isActiveStyle} />
                </ul>
            </div>
        </nav>
    );
}
