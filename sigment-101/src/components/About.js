import { NavigateTo } from 'sigment';

function About(props)  {

  function handleNavigate(){
     NavigateTo("/")
     .then(() => console.log("Navigated to home"))
     .catch(console.error);
  }

  return div(
    p(`About us The fine-grained reactive framework for 
        building lightning-fast apps — no virtual DOM, no JSX, no transpilation.`),
    p("more about sigment you can find in our website,",
       a({href:"https://sigment.dev/guides/#intro"},"sigmnet")),
    (props.id) && div(`the param id is  ${props.id}`),
    div(button({ onClick: () => handleNavigate() },"back"))
  )

}

export default About;