import {Form} from "../../components/form/Form";
import {Video} from "../../components/video/Video";
import {Maps} from "../../components/map/Map";
import {Question} from "../../components/question/Question";
import {Footer} from "../../components/footer/Footer";

export function Main() {
    return(
        <div>
        <Form />
    <Video />
    <Maps />
    <Question />
    <Footer />
        </div>
    )
}