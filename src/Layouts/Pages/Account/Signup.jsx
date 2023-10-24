import Lottie from "lottie-react";
import { useForm } from "react-hook-form";
import ani from './signup.json'
import { useContext } from "react";
import { AuthContext } from "../../../Firebase/AuthProvider";


const Signup = () => {
    const {user, createUser,updateUser} = useContext(AuthContext)
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        const imgURL = 'https://i.ibb.co/PQmgpRy/cat.jpg'
        createUser(data.Email, data.Password)
        .then((result)=>{
            
            const user = result.user;
            console.log(user)
            updateUser(data.Name, imgURL)
            .then(()=>{
                reset();
            })
            
        })
    };
    console.log(errors);
    console.log(user)
   
    // const handleSignUp = (data)=>{
        
    // }
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center md:justify-around items-center md:gap-10">
            <div>
            <form className="form-control w-full max-w-sm text-center" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1 className='text-center text-3xl font-semibold my-5 text-info'>Signup free</h1>
                        
                    <label className="label">
                     <span className="label-text text-info font-semibold">*Enter Your Email</span>
                    </label>
                    <input className="input input-bordered w-full max-w-sm input-accent" type="text" placeholder="Email" {...register("Email", {required: true})} />
                    <label className="label mt-3">
                     <span className="label-text text-info font-semibold">*Enter Your Name</span>
                    </label>
                    <input className="input input-bordered w-full max-w-sm input-accent"  type="text" placeholder="Name" {...register("Name", {required: true})} />
                    
                    <label className="label mt-3">
                     <span className="label-text text-info font-semibold">*Give Password</span>
                    </label>
                    <input className="input input-bordered w-full max-w-sm input-accent" type="password" placeholder="Password" {...register("Password", {required: true})} />
            </div>
            <button type="submit" className="btn btn-accent my-5">Sign Up</button>
            </form>
            </div>

            <div>
                <Lottie className="h-[350px] md:h-[700px]" animationData={ani}></Lottie>
            </div>
        </div>
    );
};

export default Signup;