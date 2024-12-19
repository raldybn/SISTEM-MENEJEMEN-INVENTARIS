import { useState, useRef } from 'react'
import './app.css'


function App({ value }) {


       return (
              <>
                     <Inputbarang />
              </>
       )
}
const Kategoribarang = {
       Elektronik: "Elektronik",
       Pakaian: "Pakaian",
       Makanan: "Makanan",
       Lainnya: "Lainnya",
};

function Inputbarang() {
       const [barang, setListBarang] = useState(["raldy", "kaka"]);

       const formRef = useRef(null);

       const tambahNama = () => setListBarang((list) => {
              // localStorage.setItem["enang", ...list]
              list.
                     setListBarang([])
       });
       return (
              <>
                     {/* <ul>
                            {barang.map((barang) => {
                                   return <li>{barang}</li>;
                            })}
                     </ul>
                     <button onClick={tambahNama} >tambah</button> */}
                     <h1 className='lg:w-max font-bold text-blue-500 p-4 text-center'>SISTEM MANAJEMEN INVENTARIS</h1>
                     <form onSubmit={(event) => handleInputBarang(event)} className="flex flex-col w-full border-white gap-3" ref={formRef}>
                            <input type="text" name="Namabarang" />
                            <input type="number" />
                            <select name="Kategoribarang">
                                   <option value={Kategoribarang.Elektronik}>Elektronik</option>
                                   <option value={Kategoribarang.Pakaian}>Pakaian</option>
                                   <option value={Kategoribarang.Makanan}>Makanan</option>
                                   <option value={Kategoribarang.Lainnya}>Lainnya</option>
                            </select>
                            <input type="number" name="Jumlahbarang" required min="0" placeholder='Jumlah Barang' />
                            <input type="number" name="Harga" min="0" required />
                            <input type="date" name="tanggalmasuk" required min="0" />
                            <button type='submit'>SUBMIT</button>
                            <button type="button" onClick={(event) => resetValue(formRef, event)}>DELETE</button>
                     </form>
              </>
       )
}

function resetValue(formRef, event) {
       event.preventDefault();
       formRef.Reset();
       console.log(formRef);
}

function handleInputBarang(event) {
       event.preventDefault();
       const formData = new FormData(event.target);
       // const item = {
       // }
       // localStorage.setItem();
       // console.log(formData);
       const dataObject = Object.fromEntries(formData); // Convert to object
       const barang = localStorage.getItem("List");
       console.log(barang);
       let list = []
       if (barang == null) {
              list.push(dataObject);
       } else {
              list = [dataObject, ...barang];
       }

       localStorage.setItem("List", JSON.stringify(list));


       console.log(list); // Log the resulting object
}

export default App
