import {parsePath,loadRunFunc} from  "sigment"
import  Routes  from '../router/Routes';

async function Body()  {

  const container = div({class:"body"},'Loading...'); 


  const { componentName, params } = parsePath(Routes);
  console.log(componentName);
  const content = await loadRunFunc(Routes, componentName, params);

   
  container.replaceChildren(content);

  return container;

  
}

export default Body;