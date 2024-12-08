import React from 'react'
import { FaUser } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    const navigate = useNavigate();

    const closeModal = () => {
        document.getElementById("my_modal_3").close();
    };

    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box bg-gradient-to-tr from-pink-500 to-yellow-500 w-96 text-white">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {/* Close button now only closes the modal */}
                        <button type="button" onClick={closeModal} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        
                        <h3 className="font-bold text-2xl">Log in</h3>
                        <div className="mt-4 space-y-2">
                            <span className='text-bold text-xl'>Email</span>
                            <br />
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-80 px-3 py-2 border rounded-md outline-none text-black"
                                {...register("email", { required: true })}
                            /><br />
                            {errors.email && <span className='text-red-700'>This field is required</span>}
                        </div>

                        <div className="mt-4 space-y-2">
                            <span className='text-bold text-xl'>Password</span>
                            <br />
                            <input
                                type="password"
                                placeholder="Enter your Password"
                                className="w-80 px-3 py-2 border rounded-md outline-none text-black"
                                {...register("password", { required: true })}
                            /><br />
                            {errors.password && <span className='text-red-700'>This field is required</span>}
                        </div>

                        <div className="flex justify-around mt-6">
                            {/* Login button that submits the form */}
                            <button type="submit" className="flex items-center px-5 py-3 text-white border border-gray-300 rounded-lg bg-black ">
                                <FaUser className="mr-2" /> Login
                            </button>
                            <p>
                                Not registered?{" "}
                                <Link
                                    to="/signup"
                                    className="underline text-black text-bold cursor-pointer"
                                    onClick={() => {
                                        closeModal(); // Close the login modal
                                        navigate('/signup'); // Navigate to signup page
                                    }}
                                >
                                    Signup
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </dialog>
        </div>
    )
}

export default Login;
