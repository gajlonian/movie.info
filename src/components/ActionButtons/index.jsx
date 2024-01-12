export default function ActionButtons() {
    return (
        <div className="mt-16 flex gap-4">
            <ActionButton name={'Add to list'} customStyle={'border-solid border-white border hover:bg-white hover:text-black'} />
            <ActionButton name={'Watch trailer'} customStyle={'bg-red hover:bg-opacity-70'} />
        </div>
    );
}

function ActionButton({ name, customStyle }) {
    return <button className={`font-sm h-10 w-36 rounded-full font-semibold ${customStyle}`}>{name}</button>;
}
