import Topbar from "../../components/topbar/Topbar"
import Feed from "../../components/feed/Feed"
import Rightbar from "../../components/rightbar/Rightbar"
import "./home.css"
import {Col,Row} from "react-bootstrap";
const Home = ()=>{
    return(
        <>
            <Topbar />
            <Row className="homeContainer d-flex mt-2">
                <Col xs={12} md={8} className="feedHome">
                    <Feed />
                </Col>
                <Col xs={12} md={4} className="d-flex mt-2">
                    <Rightbar className="feedRightbar"/>
                </Col>
            </Row>
        </>
    )
}
export default Home;