import Cards from "./Cards";

const Card = ({cards}) => {
    return (
        <div className="py-10">
            <h1 className="text-center text-5xl font-semibold">Upcoming Events</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 lg:mt-24 lg:mb-6 w-11/12 mx-auto">
                {
                    cards?.map(card => <Cards key={card.id} card={card}></Cards>)
                }
            </div>
        </div>
    );
};

export default Card;