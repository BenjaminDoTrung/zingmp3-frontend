import Slider from "../../components/Slider";
import {Chill, Sections} from "../../components";
import {NewRelease} from "../../components";
import Hot from "../../components/Hot";
import {NewRelease} from "../../components";


const Home = () =>{
    return (
        <div className={'overflow-y-auto w-full'}>
            <Slider/>
            <NewRelease/>
            {/*<Sections data={top100}/>*/}
            {/*<Sections data={xone}/>*/}
            {/*<Sections data={newMusic}/>*/}
            <Chill/>
            <Hot/>
        </div>
    )
}
export default Home