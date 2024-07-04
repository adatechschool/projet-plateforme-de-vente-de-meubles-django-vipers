export default function LoginForm() {
    return (
        <div className="flex flex-col">
            <h1 className="my-5 text-2xl">Log In</h1>
            <form method="post" className="flex flex-col items-start gap-y-5">
                <label
                    htmlFor="username"
                    className="input input-bordered flex items-center gap-2"
                >
                    Username
                    <input id="username" name="username" type="text" />
                </label>

                <label
                    htmlFor="email"
                    className="input input-bordered flex items-center gap-2"
                >
                    E-mail
                    <input type="email" name="email" id="email" />
                </label>

                <label
                    htmlFor="password"
                    className="input input-bordered flex items-center gap-2"
                >
                    Password
                    <input type="password" name="password" id="password" />
                </label>

                <div className="card-actions justify-start mt-3">
                    <button className="btn bg-[#beaa7c] text-white">
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
}
