import { useState } from "react";

export default function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function handleClick(e) {
        e.preventDefault();
        console.log({
            username,
            password,
        });
        fetch("http://127.0.0.1:8000/users/login/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
        })
        .then((res) => res.json())
        .then((res) => {
            if (res.login) alert(res.message)
            else throw new Error(res.error)
        })
        .catch(error => alert(error))
    }

    return (
        <div className="flex flex-col">
            <h1 className="my-5 font-thin text-2xl">Log In</h1>
            <form
                method="post"
                className="flex flex-col items-start gap-y-5"
                onSubmit={handleClick}
            >
                <label
                    htmlFor="username"
                    className="input input-bordered flex items-center gap-2"
                >
                    <input
                        id="username"
                        name="username"
                        type="text"
                        placeholder="Username"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label
                    htmlFor="password"
                    className="input input-bordered flex items-center gap-2"
                >
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>

                <div className="card-actions justify-start mt-3">
                    <button
                        type="submit"
                        className="btn bg-[#beaa7c] text-white"
                    >
                        Log In
                    </button>
                </div>
            </form>
        </div>
    );
}
