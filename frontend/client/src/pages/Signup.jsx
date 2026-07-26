// import { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'


const Signup = () => {
// const navigate = useNavigate()
// const[loading, setLoading] = useState(false)

// const[formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
// })

// const[toast, setToast] = useState(null)

// useEffect(()=>{
// if(toast){
//     const timerId = setTimeout(()=>{
//             setToast(null)
//     },3000)

//     return ()=>clearTimeout(timerId)
// }
// },[toast])

// const handleChange = (e)=>{
//     setFormData({...formData, [e.target.name]:e.target.value})
// }

// const handleSubmit = async (e) =>{
//     e.preventDefault()

// try {   
//         setLoading(true)
//         const response = await fetch('http://localhost:5001/api/user/signup',{
//             method: 'POST',
//             headers: {'Content-Type': 'application/json'},
//             body: JSON.stringify(formData)
//         })
    
//         const data = await response.json()

//         if(!response.ok){
//             throw new Error(data.message || "Signup failed")
//         }

//         setToast({message: "Signup successfully", type: 'success'})
//         setTimeout(()=>{navigate('/login')},1500)

// } catch (err) {
//         setToast({message: err.message, type: 'error'})
        
// } finally {
//     setLoading(false)
// }
// }

  return (
    <div className='flex justify-center  my-20'>
        <div className="card bg-base-300 w-96 shadow-sm">
        <div className="card-body">
            <h2 className="card-title">New Here!? Register Yourself</h2>
            {/* <form onSubmit={handleSubmit}> */}
            <form > 
            <fieldset className="fieldset">
                <label className="label" htmlFor="name">Name</label>
                <input type="text" id="name" className="input" placeholder="Enter your name here" name="name" />
                {/* <input type="text" id="name" className="input" placeholder="Enter your name here" name="name" value={formData.name} onChange={handleChange}/> */}
            </fieldset>

            <fieldset className="fieldset">
                <label className="label" htmlFor="name">Email</label>
                <input type="text" id="email" className="input" placeholder="Enter your email here" name="email" />
                {/* <input type="text" id="email" className="input" placeholder="Enter your email here" name="email" value={formData.email} onChange={handleChange}/> */}
            </fieldset>

            <fieldset className="fieldset">
                <label className="label" htmlFor="name">Password</label>
                <input type="password" id="password" className="input" placeholder="Enter your password here" name="password" />
                {/* <input type="password" id="password" className="input" placeholder="Enter your password here" name="password" value={formData.password} onChange={handleChange}/> */}
            </fieldset>

            <div className="card-actions justify-center mt-5 ">
            <button className="btn btn-primary" type='submit'> create account
            {/* <button className="btn btn-primary" type='submit' disabled={loading}> */}

                {/* {loading ? "Taking you there..." : "Sign up"} */}
            </button>
            </div>

            </form>

        </div>
        </div>

        {/* {toast && (

            <div className="toast toast-end">
            <div className={`alert ${toast.type === 'success' ? 'alert-success': 'alert-error'}`}>
            <span>{toast.message}</span>
            </div>
            </div>
        )} */}
    </div>
  )
}

export default Signup