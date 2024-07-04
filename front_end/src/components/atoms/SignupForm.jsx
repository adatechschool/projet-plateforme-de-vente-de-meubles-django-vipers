import { useState } from "react";

export default function SignupForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [phone_number, setPhone] = useState("");

    function handleClick(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/users/signup/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user: {
                    username,
                    password,
                    email,
                    phone_number,
                },
            }),
        })
            .then((res) => res.json())
            .then((res) => {
                if (res.success) alert(res.success);
                else throw new Error(res.error);
            })
            .catch((error) => alert(error));
    }

    return (
        <div>
            <h1 className="my-5 font-thin text-2xl">Sign Up</h1>
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
                    htmlFor="email"
                    className="input input-bordered flex items-center gap-2"
                >
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
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

                <label
                    htmlFor="phone"
                    className="input input-bordered flex items-center gap-2"
                >
                    <input
                        type="phone"
                        name="phone"
                        id="phone"
                        placeholder="Phone"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </label>

                <div className="card-actions justify-start mt-3">
                    <button type="submit" className="btn bg-[#beaa7c] text-white">
                        Sign Up
                    </button>
                </div>
            </form>
        </div>
    );
}
