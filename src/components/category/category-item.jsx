import { imageService } from "../../services/imageService";

export default function CategoryItem({ item }) {
    return (
        <li>
            <img className="rounded" src={imageService("w500", `${item.poster_path}`)} alt="poster" />
            <h4 className="pt-3 text-white text-xs font-semibold">{item.title}</h4>
        </li>
    );
}
