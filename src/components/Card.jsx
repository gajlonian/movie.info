export default function Card({imgUrl}) {
    return (
        <div className="text-white h-3/5 flex flex-col rounded-lg shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] md:max-w-3xl md:flex-row">
            <img
                className="h-96 w-full rounded-t-lg object-cover md:h-auto md:!rounded-none md:!rounded-l-lg"
                src={imgUrl}
                alt=""
            />
            <div className="flex flex-col justify-start p-6">
                <h5 className="mb-2 text-xl font-medium">Card title</h5>
                <p className="mb-4 text-base text-red">
                    This is a wider card with supporting text below as a natural lead-in to additional
                    content. This content is a little bit longer.
                </p>
                <p className="text-xs">Last updated 3 mins ago</p>
            </div>
        </div>
    );
}
