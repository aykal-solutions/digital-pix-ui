import {Header, SubHeader} from "../Components"
import {CheckList} from "../Components"
import { Button } from 'react-bootstrap';
import './home.css';

const list = [{
    id :1,
    title : 'Complete and verify your personal information'
},{
    id :2,
    title : 'Finalize your pose selection'
}
];

function Home() {
    return (
        <>
            
            <Header title="Welcome,"/>
            <Header title="Elise Wilson"/>
            <SubHeader title="Thank you for participating in your recent photography day!"/>
            <SubHeader title="You are almost finished."/>
            <CheckList checks={list}/>
            {/* <button>continue >></button> */}

            <div class="wrapper">
    <button class="button">Continue >></button>

  

</div>



        </>
    )
}

export default Home;