import { useState, useRef } from 'react'
import './app.css'


function App({ value }) {
       const db = JSON.parse(localStorage.getItem("List")) ?? [];
       const [barang, setListBarang] = useState(db);
       const [selectedItem, setSelectedItem] = useState()

       const handleSetListBarang = (dataObject) => {
              const list = JSON.parse(localStorage.getItem("List")) ?? [];
              list.push(dataObject);
              setListBarang(() => list)
              localStorage.setItem("List", JSON.stringify(list));
       }

       const handleRemoveBarang = () {

       }
       return (
              <>
                     <h1 className='lg:w-max font-bold text-blue-500 p-4 text-center'>SISTEM MANAJEMEN INVENTARIS</h1>

                     <div className="grid gap-12">
                            <InputBarang setListBarang={handleSetListBarang} />
                            <h1>Barang yang di pesan</h1>
                            <DisplayBarang barang={barang} />
                     </div>
              </>
       )
}
const Kategoribarang = {
       Elektronik: "Elektronik",
       Pakaian: "Pakaian",
       Makanan: "Makanan",
       Lainnya: "Lainnya",
};

function DisplayBarang({ barang }) {
       return (
              <table>
                     <thead>
                            <tr>
                                   <th>Nama Barang</th>
                                   <th>Kategori Barang</th>
                                   <th>Jumlah Barang</th>
                                   <th>Harga Barang</th>
                                   <th>Tanggal Masuk</th>
                            </tr>
                     </thead>
                     <tbody>
                            {

                                   barang.map(({ namabarang, kategoribarang, jumlahbarang, harga, tanggalmasuk }, index) => {

                                          return (
                                                 <tr key={index}>
                                                        <td>{namabarang}</td>
                                                        <td>{kategoribarang}</td>
                                                        <td>{jumlahbarang}</td>
                                                        <td>{harga}</td>
                                                        <td>{tanggalmasuk}</td>
                                                 </tr>

                                          )
                                   })
                            }
                     </tbody>
              </table>
       )
}


function InputBarang({ setListBarang }) {

       return (
              <form onSubmit={(event) => handleInputBarang(event, setListBarang)} className="flex flex-col w-full border-white gap-5">
                     <input type="text" name="namabarang" className='h-9' placeholder='Nama Barang' />
                     {/* <input type="number" /> */}
                     <select name="kategoribarang" className='h-9'>
                            <option value={Kategoribarang.Elektronik}>Elektronik</option>
                            <option value={Kategoribarang.Pakaian}>Pakaian</option>
                            <option value={Kategoribarang.Makanan}>Makanan</option>
                            <option value={Kategoribarang.Lainnya}>Lainnya</option>
                     </select>
                     <input type="number" name="jumlahbarang" className='h-9' required min="0" placeholder='Jumlah Barang' />
                     <input type="number" name="harga" min="0" className='h-9' required placeholder="Harga Barang" />
                     <input type="date" name="tanggalmasuk" className='h-9' required min="0" />
                     <div className='flex gap-3'>
                            <button type='submit' className='hover:bg-green-500 font-extrabold w-1/2'>SUBMIT</button>
                            <button type="button" className='hover:bg-red-500 font-extrabold w-1/2'>DELETE</button>
                     </div>
              </form>
       )
}


function handleInputBarang(event, setListBarang) {
       event.preventDefault();
       const formData = new FormData(event.target);
       // const item = {
       // }
       // localStorage.setItem();
       // console.log(formData);
       const dataObject = Object.fromEntries(formData); // Convert to object
       setListBarang(dataObject);

}

export default App
