import { useEffect, useState } from "react";

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

    let [types, setTypes] = useState([]);
    let [colors, setColors] = useState([]);
    let [materials, setMaterials] = useState([]);

    useEffect(() => {
        try {
            async function fetchTypes() {
                let typesData = await fetch("http://127.0.0.1:8000/api/type");
                let parsedTypes = await typesData.json();
                setTypes(parsedTypes);
                console.log(parsedTypes);
            }

            async function fetchColors() {
                let colorsData = await fetch("http://127.0.0.1:8000/api/color");
                let parsedColors = await colorsData.json();
                setColors(parsedColors);
            }

            async function fetchMaterials() {
                let materialsData = await fetch(
                    "http://127.0.0.1:8000/api/material"
                );
                let parsedMaterials = await materialsData.json();
                setMaterials(parsedMaterials);
            }

            fetchTypes();
            fetchColors();
            fetchMaterials();
        } catch (error) {console.log(error)}
    }, []);

    return (
        <div className="card card-compact card-bordered">
            <form className="card-body box-border" action="post">
                <label htmlFor="name">Nom :</label>
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
                        Modifier
                    </button>
                    <button className="btn bg-red-700 text-white">
                        Supprimer
                    </button>
                </div>
            </form>
        </div>
    );
}
