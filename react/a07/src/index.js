import reactDOM from 'react-dom';

const myPage = (
    <div>
        <p>
            <img src="images/logo192.png" alt="logo" width={64}/>
        </p>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of pages, including mobile apps</li>
        </ul>
    </div>
)
    
reactDOM.render(myPage, document.getElementById("root"))