import { useEffect, useState } from "react";

export default function AdminAllProducts({ products }) {
    const [selectedProduct, setSelectedProduct] = useState({
        id: 0,
        name: "",
        description: "",
        price: 0,
        dimensions: "",
    });

    function handleSwitch(productId) {
        console.log(productId);
        setSelectedProduct(
            products.find((product) => (product.id == productId))
        );
        document.getElementById("furnitureForm").showModal();
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {products.map((product, index) => (
                <div key={index}>
                    <AdminFurniture
                        product={product}
                        switchFurnitureId={handleSwitch}
                    />
                </div>
            ))}
            <FurnitureForm product={selectedProduct} />
        </div>
    );
}

function AdminFurniture({ product, switchFurnitureId }) {
    function handleClick() {
        switchFurnitureId(product.id);
    }

    return (
        <div className="card card-compact card-bordered">
            <div className="card-body">
                <h2 className="card-title"> {product.name} </h2>
                <div className="card-actions justify-end">
                    <button className="btn bg-[#beaa7c]" onClick={handleClick}>
                        Edit
                    </button>
                </div>
            </div>
        </div>
    );
}

function FurnitureForm({ product }) {
    const dimensionsRegex = /([\d]+)X([\d]+)X([\d]+)/;
    const [name, setName] = useState(product.name);
    const [price, setPrice] = useState(product.price);
    const [description, setDescription] = useState(product.description);
    const [dimensions, setDimensions] = useState(product.dimensions);
    const [available, setAvailable] = useState(product.available);

    useEffect(() => {
        setName(product.name);
        setPrice(product.price);
        setDescription(product.description);
        setDimensions(product.dimensions);
        setAvailable(product.available);
    }, [product])

    function handleUpdate(e) {
        e.preventDefault();
        console.log(JSON.stringify({
                ...product,
                name,
                price,
                description,
                dimensions,
                available,
            }))
        fetch("http://127.0.0.1:8000/api/furniture/", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...product,
                name,
                price,
                description,
                dimensions,
                available,
            }),
        })
            .then(() => {
                alert(`Product with id=${product.id} updates successfully !`);
            })
            .cath((error) => console.log(error));
    }

    function handleDelete(e) {
        e.preventDefault();
        fetch("http://127.0.0.1:8000/api/furniture/" + product.id, {
            method: "DELETE",
        })
            .then(() => {
                alert(`Product with id=${product.id} deleted succesfully !`);
                window.location.reload();
            })
            .catch((error) => console.log(error));
    }

    return (
        <dialog className="modal w-full" id="furnitureForm">
            <form
                className="modal-box box-border w-full sm:w-8/12 max-w-5xl flex flex-col gap-4"
                action="post"
                onSubmit={handleUpdate}
            >
                <label className="form-control" htmlFor="name">
                    Name :
                </label>
                <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <label className="form-control" htmlFor="price">
                    Price :
                </label>
                <input
                    className="input input-bordered w-full max-w-xs"
                    type="number"
                    step={0.01}
                    min={0.00}
                    name="price"
                    id="price"
                    defaultValue={product.price}
                    onChange={(e) => setPrice(e.target.value)}
                />

                <label className="form-control" htmlFor="colors">
                    Color :
                </label>
                <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    name="colors"
                    id="colors"
                    disabled
                />

                <label
                    className="form-control w-full max-w-xs"
                    htmlFor="materials"
                >
                    Material :
                </label>
                <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    name="materials"
                    id="materials"
                    disabled
                />

                <label className="form-control" htmlFor="type">
                    Category :
                </label>
                <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    name="type"
                    id="type"
                    disabled
                />

                <label className="form-control" htmlFor="dimensions">
                    Dimensions (cm) :
                </label>
                <input
                    className="input input-bordered w-full max-w-xs"
                    type="text"
                    name="dimensions"
                    id="dimensions"
                    defaultValue={product.dimensions}
                    onChange={(e) => setDimensions(e.target.value)}
                />

                <label className="form-control" htmlFor="description">
                    Description :
                </label>
                <textarea
                    className="textarea textarea-bordered w-full box-border"
                    name="description"
                    id="description"
                    defaultValue={product.description}
                    onChange={(e) => setDescription(e.target.value)}
                ></textarea>

                <label className="form-control" htmlFor="image1">
                    <div className="label">
                        <span className="label-text">Image :</span>
                    </div>

                    <input
                        className="file-input file-input-bordered w-full max-w-xs"
                        type="file"
                        accept="image/png, image/jpeg"
                        name="image1"
                        id="image1"
                        disabled
                    />
                </label>

                <label className="form-control" htmlFor="image2">
                    <div className="label">
                        <span className="label-text">Image :</span>
                    </div>
                    <input
                        className="file-input file-input-bordered w-full max-w-xs"
                        type="file"
                        accept="image/png, image/jpeg"
                        name="image2"
                        id="image2"
                        disabled
                    />
                </label>

                <div className="form-control">
                    <label className="label cursor-pointer">
                        <span className="label-text">Available</span>
                        <input
                            defaultChecked={product.available}
                            type="checkbox"
                            className="checkbox"
                        />
                    </label>
                </div>

                <div className="flex justify-between mt-3 mb-8">
                    <button
                        type="submit"
                        className="btn bg-[#beaa7c] text-white"
                    >
                        Confirm
                    </button>
                    <button
                        className="btn bg-red-700 text-white"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </form>

            <form method="dialog" className="modal-backdrop">
                <button>close</button>
            </form>
        </dialog>
    );
}
