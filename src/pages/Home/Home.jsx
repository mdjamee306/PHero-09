import { useLoaderData } from "react-router-dom";
import Banner from "../Banner/Banner";
import Card from "./Card/Card";
import News from "../../layout/Breaking/News";
import Partners from "../../routes/Partners/Partners";

const Home = () => {
    const cards = useLoaderData()
    return (
        <div >
            <Banner></Banner>
            <Card cards={cards}></Card>
            <News></News>
            <Partners></Partners>
        </div>
    );
};

export default Home;