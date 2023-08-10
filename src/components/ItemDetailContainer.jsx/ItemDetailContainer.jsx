import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loading from "../Loading/loading";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const collectionProd = collection(db, "products");
        const referenciaAlDoc = doc(collectionProd, id);

        getDoc(referenciaAlDoc)
            .then((res) => {
                if (res.exists()) {
                    const productData = { id: res.id, ...res.data() };
                    setProduct(productData);
                } else {
                    console.log("El producto no existe");
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id]);

    return (
        <>
            {product ? <ItemDetail product={product} /> : <Loading />}
        </>
    );
};

export default ItemDetailContainer;
