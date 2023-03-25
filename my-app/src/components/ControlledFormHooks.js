import React, {useState} from 'react'


// Compare code to the ControlledForm.js file. Notice how Hooks refreactor the code!

// defind a state value e.g values form ControlledForm.js
// using the setter mehtod with the useState hook
function ControlledFormHooks() {
    const [name, setName] = useState('');
    const [category, setCatergory] = useState('website');
    const [comments, setComments] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name,category, comments);
    }

    return (
        // updated the onChange and it;s value attributes to use new setters and properties e.g line 22, 35, 50 
        <div>
            <h2>Please fill out the form below:</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="id-name">Your Name:</label>
                    <input
                    // removed this keyword references including the onSubmit handler
                        value={name}
                        onChange={
                            (e) =>  setName(e.target.value)}
                        id="id-name"
                        name="name"
                        type="text"
                    />
                </div>
                <div>
                    <label htmlFor="id-category">Query category:</label>
                    <select
                        id="id-category"
                        name="category"
                        value={category}
                        onChange={
                            (e) => setCatergory(e.target.value)}
                    >
                        <option value="website">Website issue</option>
                        <option value="order">Order issue</option>
                        <option value="general">General inquiry</option>

                    </select>
                </div>
                <div>
                    <label htmlFor="id-comments">Comments:</label>
                    <textarea
                        id="id-comments"
                        name="comments"
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                    />
                </div>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}

export default ControlledFormHooks