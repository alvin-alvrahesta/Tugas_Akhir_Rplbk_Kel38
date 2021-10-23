import { useState } from "react";
import Modal from "react-modal"; //React Modal
import './ProductCard.css';

const ProductCard = (props) => {
  //Modul 4 (React Hooks - UseState Hook)
  const [showDesc, setShowDesc] = useState(false);

  const handleBukaDeskripsi = () => setShowDesc(true);
  const handleTutupDeskripsi = () => setShowDesc(false);

  return (

    <div className="grid-item" style={{ backgroundColor: "white", borderRadius: 20, border: "none", boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.1)" }}>
      <img
        src={props.product.image}
        alt={props.product.title}
        style={{
          height: 140,
        }}
      />
      <h3 style={{ margin: "0px" }}>{props.product.title}</h3>
      <h3 style={{ color: "rgb(212, 36, 36)", margin: "5px" }}>Rp {props.product.price} </h3>
      <button style={{ color: "rgb(20, 20, 20)", borderColor: "rgb(20, 20, 20)" }} onClick={handleBukaDeskripsi}>Lihat deskripsi paket</button>

      {/* Modul 5 - Menampilkan Deskripsi dengan Modal */}
      <Modal style={{ height: "120px" }} isOpen={showDesc}>
        <div style={{ margin: "20px", textAlign: "center" }}>
          <h3>Deskripsi Paket :</h3>
          <p>{props.product.description}</p>
          <button onClick={handleTutupDeskripsi}>Tutup</button>
        </div>
      </Modal>

    </div>
  );
};

export default ProductCard;
