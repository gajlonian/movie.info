import { imageService } from "../../services/imageService";

export default function Item({ item }) {
    return (
        <li className="cursor-pointer" >
            <img className="rounded" src={imageService("w500", `${item.poster_path}`)} alt="poster" />
            <h4 className="pt-3 text-white text-xs font-semibold">{item.title}</h4>
        </li>
    );
}
