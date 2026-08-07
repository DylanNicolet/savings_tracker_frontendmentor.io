import './Homepage.scss';
import Hero from "../../components/Hero/Hero";
import Header from "../../layout/header/Header"
import YourGoals from '../../components/YourGoals/YourGoals';

export default function Homepage() {
    return(
        <>
            <Header />
            <h1 className='sr-only'>Homepage</h1>
            <Hero />
            <YourGoals />
        </>
    )
}