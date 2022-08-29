import {Fragment} from "React";
import MainHeader from "./main-header";

function Layout(props){
    return(
        <Fragment>
            <MainHeader />
            <main>
                {props.children}
            </main>
        </Fragment>);
}

export default Layout;