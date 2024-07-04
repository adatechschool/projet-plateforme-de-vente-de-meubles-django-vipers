import { useState, useEffect } from "react";

export function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchFurniture() {
            let data = await fetch(url);
            let parsedData = await data.json();
            setData(parsedData);
        }
        fetchFurniture();
    }, [url]);

    return [data];
}

export function useFetchFurniture() {
    const [furniture, setFurniture] = useState([]);

    useEffect(() => {
        async function getData(url) {
            let data = await fetch(url);
            let parsedData = await data.json();
            return parsedData;
        }

        async function fetchData() {
            const [allFurniture, types, colors, materials] = await Promise.all([
                getData("http://127.0.0.1:8000/api/furniture"),
                getData("http://127.0.0.1:8000/api/type"),
                getData("http://127.0.0.1:8000/api/color"),
                getData("http://127.0.0.1:8000/api/material"),
            ]);
            let detailedFurnitureList = allFurniture.map((furniture) => {
                const colorsNames = colors.filter((color) =>
                    furniture.colors.includes(color.id)
                );
                const typeName = types.find(
                    (type) => (furniture.type = type.id)
                );
                const materialsNames = materials.filter((material) =>
                    furniture.materials.includes(material.id)
                );
                return {
                    ...furniture,
                    colors: colorsNames,
                    type: typeName,
                    materials: materialsNames,
                };
            });
            console.log("modified furniture list :", detailedFurnitureList);
            setFurniture(detailedFurnitureList);
        }
        fetchData();
    }, []);

    return [furniture];
}
