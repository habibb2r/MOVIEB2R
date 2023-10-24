import { useForm } from 'react-hook-form';
import { BiLogoFacebookCircle } from 'react-icons/bi';
import { BsGoogle } from 'react-icons/bs';
import Lottie from 'lottie-react';
import login from './login.json'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../../Firebase/AuthProvider';

const Signin = () => {
    const {signin,signInGoogle,} = useContext(AuthContext)
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);


  const handleSignIn = (data)=>{
    signin(data.Email,data.Password)
    .then(result =>{
        reset();
        const user = result.user;
        console.log(user);
    })
  }
  const handleGoogle = () =>{
    signInGoogle()
    .then(result => console.log(result))
  }
  console.log(errors);
    return (
       <div className='flex flex-col-reverse md:flex-row justify-center items-center md:gap-5'>
        <div className='w-full md:w-2/4 md:px-5 md:my-10 flex flex-col justify-center items-center'>
                <form className='bg-info form-control w-full max-w-xs p-3 rounded-lg' onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control w-full max-w-xs">
                        <h1 className='text-center text-3xl font-semibold my-5 text-black'>Login Now</h1>
                        
                            <label className="label">
                                <span className="label-text text-black font-semibold">*Enter Your Email</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xs" type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
                        </div>
                        <div className="form-control w-full max-w-xs my-3">
                            <label className="label">
                                <span className="label-text text-black font-semibold">*Enter Your Password</span>
                            </label>
                            <input className="input input-bordered w-full max-w-xs" type="password" placeholder="Password" {...register("Password", {required: true})} />
                            <div className='text-center my-5'>
                                <button onClick={handleSignIn} className='btn btn-accent' type='submit'>Login</button>
                            </div>
                            <div>
                                <p className='text-black'>New User? <Link to='/signup' className='text-neutral font-semibold'>Sign Up</Link> for Free</p>
                            </div>
                        </div>
                </form>
                <div className="form-control w-full max-w-xs">
                        <div className="divider">Or Login With</div>
                        <div className='flex justify-evenly items-center'>
                            <button onClick={handleGoogle} className='btn btn-info'> <BsGoogle className='text-blue-200'></BsGoogle> Google</button>
                            <button className='btn btn-info'> <BiLogoFacebookCircle className='text-lg text-blue-600'></BiLogoFacebookCircle> Facebook</button>
                        </div>
                </div>
                
        </div>

        <div className='md:w-2/4 flex flex-col justify-center items-center'>
                <Lottie className='h-[250px] md:h-[600px]' animationData={login}></Lottie>
        </div>
       </div>
    );
};

export default Signin;