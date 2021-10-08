import { useContext } from "react";
import {
  ProductStateContext,
  ProductDispatchContext,
  FetchingContext,
} from "../App";
import Sorter from "./Sorter";
import "./Selector.css";

//Materi function Modul 1
const Selector = () => {
  const isFetching = useContext(FetchingContext);
  const productState = useContext(ProductStateContext);
  const productDispatch = useContext(ProductDispatchContext);

  const handleCategoryButton = (event) => {
    productDispatch({ type: "changeCategory", payload: event.target.name });
  };

  return (
      <div>
          {!isFetching && <h2 style={{textTransform: "uppercase"}}>Kategori : {productState.selectedCategory}</h2>}
        {isFetching ? ( //Materi Ternary Operator Modul 1
          <b>Loading...</b>
          ) : ( //Materi Data Structure (Pengolahan Data Array dengan fungsi Map()) Modul 1
          <ul>
            {productState.categories.map((category, index) => (
              <button
              key={index}
              name={category}
              onClick={handleCategoryButton}
              >{category}</button>
            ))}
          </ul>
        )}
        <Sorter />
      </div>
  );
};

export default Selector;
