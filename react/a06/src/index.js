import reactDOM from 'react-dom';

const myPage = (
    <div>
        <p>These are the animals I could have</p>
        <ul>
            <li>Dog</li>
            <li>Cat</li>
            <li>Hamster</li>
        </ul>
        <pre>Testing append!!</pre>
    </div>
)

reactDOM.render(myPage, document.getElementById("root"));
// document.getElementById("root").append(JSON.stringify(page))