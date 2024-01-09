import CustomDropdown from './CustomDropdown'

export default function FeaturedHeader({ items, setView, view, sectionName }) {

    return (
        <div className="mx-8 md:mx-24  border-solid border-b-2 border-red flex flex-row items-center justify-between py-6">
            <CustomDropdown items={items} setView={setView} view={view} />
            <h1 className="text-white text-xl opacity-50">{sectionName}</h1>
        </div>
    );
}

