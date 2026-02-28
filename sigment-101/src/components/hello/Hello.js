
import '../sigments/sigments';
import './hello.css';
import styles from './hello.module.css'

function Hello()  {

  return div(

    hello({class:"hi "+styles.fnt600},'Hello from sigment ,' ,
       br(), 
       'inspect this element , ', 
       br(), 
       'and see element tag is hello'),

  )

}

export default Hello;