import { NavigateTo } from 'sigment';

function Home()  {

  function handleNavigate(){
     NavigateTo(`about`, true) 
     .then(() => console.log("Navigated to about"))
     .catch(console.error);
  }

  function handleNavigateWithParam(id){
     NavigateTo(`about/${id}`, true) 
     .then(() => console.log("Navigated to about"))
     .catch(console.error);
  }

  return div({id:"home"},
    
    h1('Hello from Sigment',
    br(),
    span('  +TypeScript'),
    br(),
    span('   +Vite')),
    div({class:"examples"},
      div(
        a({href:"/counter"},"Counter Example State")
      ),
      div(
        a({href:"/hello"},"Add Sigment Hello Example")
      ),
      div(
        a({href:"javascript:void(0)", onClick: () => handleNavigate()},
		      "Navigate to About without render all page")
      ),
      div(
        a({href:"javascript:void(0)", onClick: () => handleNavigateWithParam(1)},
		      "Navigate to About without render all page plus parameter")
      )
    ),
 
  );

}

export default Home;