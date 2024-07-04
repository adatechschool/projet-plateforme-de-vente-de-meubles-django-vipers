export default function SignupForm() {
    return (
        <div>
            <h1 className="my-5 font-thin text-2xl">Sign Up</h1>
            <form method="post" className="flex flex-col items-start gap-y-5">
                <label
                    htmlFor="username"
                    className="input input-bordered flex items-center gap-2"
                >
                    <input id="username" name="username" type="text" placeholder="Username" />
                </label>

                <label
                    htmlFor="email"
                    className="input input-bordered flex items-center gap-2"
                >
                    <input type="email" name="email" id="email" placeholder="E-mail"/>
                </label>

                <label
                    htmlFor="password"
                    className="input input-bordered flex items-center gap-2"
                >
                    <input type="password" name="password" id="password" placeholder="Password"/>
                </label>

                <div className="card-actions justify-start mt-3">
                    <button className="btn bg-[#beaa7c] text-white">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}
