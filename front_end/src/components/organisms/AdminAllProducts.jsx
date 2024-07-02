export default function AdminAllProducts({ products }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {products.map((product, index) => (
                <div key={index}>
                    <AdminProduct product={product} />
                    <AdminForm product={product} />
                </div>
            ))}
        </div>
    );
}

function AdminProduct({ product }) {
    return (
        <div className="card card-compact card-bordered">
            <div className="card-body box-border">
                <h2 className="card-title"> {product.name} </h2>

                <div className="card-actions justify-end">
                    <button className="btn bg-[#beaa7c] text-white">
                        Modifier
                    </button>
                </div>
            </div>
        </div>
    );
}

function AdminForm({ product }) {
    return (
        <div className="card card-compact card-bordered">
            <form className="card-body box-border" action="post">
                <label htmlFor="name">Modifier le nom :</label>
                <input
                    className="input input-bordered"
                    type="text"
                    name="name"
                    id="name"
                    defaultValue={product.name}
                />

                <label htmlFor="description">Description :</label>
                <textarea
                    className="textarea textarea-bordered w-full box-border"
                    name="description"
                    id="description"
                    defaultValue={product.description}
                ></textarea>
            </form>
        </div>
    );
}
