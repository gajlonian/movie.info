import ContentItem from "./ContentItem";

export default function ListItem({data}) {
    return (
        <ul className="py-6 grid grid-cols-6 gap-8">
            {data.map((item) => (
                <ContentItem key={item.id} item={item} />
            ))}
        </ul>
    );
}
