import React from "react"

export default function App() {
    
    /**
     * Challenge: Connect the form to local state
     * 
     * X. Create a state object to store the 4 values we need to save.
     * X. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * X. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * X. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */

    const [formData, setFormData] = React.useState(
        {email: "", passwd: "", passwdConfirmation: "", ok2Newsletter: false}
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

    function handleSubmit(event) {
        event.preventDefault();
        if (formData.passwd == formData.passwdConfirmation){
            console.log("Successfully signed up");

            if (formData.ok2Newsletter) console.log("Thanks for signing up for our newsletter!");
        }
        else{
            console.log("Passwords to not match");
        }
    }
    
    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.email}
                    name="email"
                />
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.passwd}
                    name="passwd"
                />
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    onChange={handleChange}
                    value={formData.passwdConfirmation}
                    name="passwdConfirmation"
                />
                
                <div className="form--marketing">
                    <input
                        type="checkbox" onChange={handleChange}
                        checked={formData.isFriendly}
                        name="ok2Newsletter" 
                        id="ok2Newsletter"
                    />
                    <label htmlFor="ok2Newsletter">I want to join the newsletter</label>
                </div>
                <button className="form--submit">
                    Sign up
                </button>
            </form>
        </div>
    )
}
