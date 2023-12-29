import CategoryItem from "./category-item";

export default function CategoryList({data}) {
    return (
        <ul className="py-6 grid grid-cols-6 gap-8">
            {data.map((item) => (
                <CategoryItem key={item.id} item={item} />
            ))}
        </ul>
    );
}
