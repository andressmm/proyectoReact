import { useEffect, useState } from "react";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getProductById } from "../../services/products";

export const ItemDetailsContainer = () => {
  const [detail, setDetail] = useState({});


  const { id } = useParams();

  useEffect(() => {
    getProductById(id)
      .then((data) => setDetail(data))
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <main>
      {Object.keys(detail).length ? (
        <ItemDetail detail={detail} />
      ) : (
        <p>Cargando producto...</p>
      )}
    </main>
  );
};