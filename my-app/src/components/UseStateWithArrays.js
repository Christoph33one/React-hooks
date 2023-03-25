import React, {useState} from 'react'
// using useState hookn with arrays
// do not puse push, pop. Use map or filter
function UseStateWithArrays() {
    const [nums, setNums] = useState([1,2,3]);
    // Handler to add numbers 
    const addNums = () =>  {
        // ...nums (spread opertor. view it working!)
        setNums([...nums, nums.length+1]);
    }
    // Handle to remove numbers
    const removeNum = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length -1;
            })
        )
    }
  return (
    <div>
        <button onClick={addNums}>
            Add Item
        </button>
        <button onClick={removeNum}>
            Remove Item
        </button>
        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>

    </div>
  )
}

export default UseStateWithArrays