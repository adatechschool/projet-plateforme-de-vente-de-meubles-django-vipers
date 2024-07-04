export default function AdminAllProducts({ products }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {products.map((product, index) => (
                <div key={index}>
                    <FurnitureForm product={product} />
                </div>
            ))}
        </div>
    );
}

function FurnitureForm({ product }) {
    const dimensionsRegex = /([\d]+)X([\d]+)X([\d]+)/;

    return (
        <div className="card card-compact card-bordered">
            <form className="card-body box-border" action="post">
                <label htmlFor="name">Name :</label>
                <input
                    className="input input-bordered card-title"
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={product.name}
                />

                <label htmlFor="price">Price :</label>
                <input
                    className="input input-bordered"
                    type="number"
                    step={0.01}
                    min={0.0}
                    name="price"
                    id="price"
                    defaultValue={product.price.toFixed(2)}
                />

                <label htmlFor="dimensions">Dimensions (cm) :</label>
                <input
                    className="input input-bordered"
                    type="text"
                    name="dimensions"
                    id="dimensions"
                    defaultValue={product.dimensions}
                />

                <label htmlFor="description">Description :</label>
                <textarea
                    className="textarea textarea-bordered w-full box-border"
                    name="description"
                    id="description"
                    defaultValue={product.description}
                ></textarea>

                <div className="card-actions justify-between mt-3">
                    <button className="btn bg-[#beaa7c] text-white">
                        Edit
                    </button>
                    <button className="btn bg-red-700 text-white">
                        Delete
                    </button>
                </div>
            </form>
        </div>
    );
}
