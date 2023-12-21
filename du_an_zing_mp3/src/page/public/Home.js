import Slider from "../../components/Slider";
import {NewRelease} from "../../components";

const Home = () =>{
    return (
        <div className={'overflow-y-auto w-full'}>
            <Slider/>
            <NewRelease/>
        </div>
    )
}
export default Home