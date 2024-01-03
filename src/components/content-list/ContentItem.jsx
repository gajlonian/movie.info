import { useNavigate, useParams } from "react-router-dom";
import { usePostDetail } from "../../hooks/usePostDetail";
import { imageService } from "../../services/imageService";

export default function ContentItem({ item }) {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/${item.media_type}/${item.id}`)
    }

    return (
        <li className="cursor-pointer" onClick={handleClick}>
            <img className="rounded" src={imageService("w500", `${item.poster_path}`)} alt="poster" />
            <h4 className="pt-3 text-white text-xs font-semibold">{item.title || item.name}</h4>
        </li>
    );
}
