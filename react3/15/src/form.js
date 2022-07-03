import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: "", comment: "", isFriendly: true, employment: "", favColor:""}
    )
    
    
    function handleChange(event) {
        const {name, value, type, checked} = event.target;
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value
            }
        });
    }
    
    
    function handleSubmit(event){
        event.preventDefault();
        console.log(formData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="FirstName"
                onChange={handleChange}
                value={formData.firstName}
                name="firstName" 
            />
            <input
                type="text"
                placeholder="LastName"
                onChange={handleChange}
                value={formData.lastName}
                name="lastName"
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                value={formData.email}
                name="email"
            />            
            <textarea
                placeholder="Comment"
                onChange={handleChange}
                value={formData.comment}
                name="comment"
            />
            <input 
                type="checkbox" 
                onChange={handleChange}
                checked={formData.isFriendly}
                name="isFriendly" 
                id="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            
            <fieldset>
                <legend>Current employment status</legend>
                
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>

            <br />
            
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor" 
                name="favColor" 
                value={formData.favColor}
                onChange={handleChange}>
                <option value="">-- Choose --</option>
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br/>
            <br/>
            <button>Submit</button>
        </form>)
}