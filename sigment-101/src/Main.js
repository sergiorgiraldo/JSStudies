
import {MyApp,mount} from  "sigment"
import Header from "./components/Header"
import Body from "./components/Body"
import Footer from "./components/Footer"
import './assets/css/index.css'
import Routes from "./router/Routes"


MyApp.cleanHtml(true);
MyApp.setMaxCacheSize(50);
MyApp.setRoute(Routes);

async function Main() {  


     const app = fragment(
      Header(),
        await Body(),
      Footer()
    );

     mount("root",app); 

}

 Main();


export default Main;