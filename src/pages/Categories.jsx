import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer/itemlistcontainer";
import Search from "../components/Search/search";
import Loading from "../components/Loading/loading";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase";

const Categories = () => {
    const { id } = useParams();

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        setLoading(true);

        const coleccionProducts = id ? query(collection(db, "products"), where("category", "==", id)) : collection(db, "products");

        getDocs(coleccionProducts)
            .then((res) => {
                const list = res.docs.map((product) => {
                    return {
                        id: product.id,
                        ...product.data()
                    };
                });

                if (searchTerm) {
                    const filteredProducts = list.filter((product) =>
                        product.name.toLowerCase().includes(searchTerm.toLowerCase())
                    );
                    setProducts(filteredProducts);
                } else {
                    setProducts(list);
                }

                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id, searchTerm]);

    return (
        <>
            <Search setSearchTerm={setSearchTerm} />
            <h1 className="h1Pages">{id}</h1>
            <div className="bodyCategories">
            {loading ? (
                <Loading />
            ) : products.length === 0 ? (
                <p className="notFindProducts">No se encontraron productos.</p>
            ) : (
                <ItemListContainer products={products} loading={loading} />
            )}
            </div>
        </>
    );
}

export default Categories;