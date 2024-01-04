import { useNavigate } from "react-router-dom";
import { imageService } from "../../services/imageService";

export default function ContentItem({ item, mediaType }) {
    const navigate = useNavigate();

    const handleClick = () => {
        if (item.media_type) {
            return navigate(`/${item.media_type}/${item.id}`);
        }
        return navigate(`/${mediaType}/${item.id}`);
    };

    return (
        <li className="cursor-pointer" onClick={handleClick}>
            <img className="rounded" src={imageService("w500", `${item.poster_path}`)} alt="poster" />
            <h4 className="pt-3 text-white text-xs font-semibold">{item.title || item.name}</h4>
        </li>
    );
}
