import React from 'react'

const ShoppingPage = ({items,setItems}) => {
 const list=[
    {
        logo:"https://m.media-amazon.com/images/I/61HPXe9ziML._AC_UL480_FMwebp_QL65_.jpg",
        title:"Hindware Smart Appliances | Nadia IN 90 cm Chimney | 1500 CMH |Curved Glass | Filterless | Auto Clean | Touch Control, Motion Sensor | 10 Yrs Warranty on Motor & 2 Yrs on Product (Black)",
        price:13999,
        mrp:"30,950",
        save:"1,500"
    },
    {
        logo:"https://m.media-amazon.com/images/I/81diUrv+yiL._AC_UL480_FMwebp_QL65_.jpg",
        title:"LG 20 L Solo Microwave Oven (MS2043BP, Black, Health plus Menu, I-Wave Technology, Indian Cuisine, Even Reheat & Defrost, Auto Cook Menu, Anti-Bacterial Cavity & Steam Clean)",
        price:15999,
        mrp:"25,999",
        save:"1,000"
    },
    {
        logo:"https://m.media-amazon.com/images/I/71dmDpFCQ3L._AC_UL480_FMwebp_QL65_.jpg",
        title:"Samsung 23 L Solo Microwave Oven (MS23A3513AK/TL, Black, Auto Cook Programs, Child Safety Lock, Memory Feature, Deodorization, Ceramic Enamel Cavity with 10 year warranty)",
        price:7799,
        mrp:"10,900",
        save:"500"
    },
        {
        logo:"https://m.media-amazon.com/images/I/71TwTzVcVqL._AC_UY327_FMwebp_QL65_.jpg",
        title:"Samsung Galaxy Book4 (Gray, 16GB RAM, 512GB SSD) | 15.6 Full HD Screen | Intel Core i5 1335U Processor | Windows 11 Home | MS Office 2021 | Fingerprint Reader | Intel Iris XE Graphics | RJ45 LAN Port",
        price:49950,
        mrp:"79,000",
        save:"2000"
    },
    {
      logo: "https://m.media-amazon.com/images/I/21Pmr4hiY3L._AC_AA360_.jpg",
      title: "Epson Ecotank L3216 A4 All-in-one Colour Ink Tank Printer, White",
      price: 10999,
      mrp:"15,590",
      save:"200"
    },
    {
      logo: "https://m.media-amazon.com/images/I/71GmXuy7EgL._AC_AA360_.jpg",
      title: "Samsung 385 L, 2 Star, Convertible 5-in-1 Digital Inverter, with Display Frost Free Double Door Refrigerator",
      price: 42390,
      mrp:"57,890",
      save:"3000"
    },
    {
      logo: "https://m.media-amazon.com/images/I/51oYlo9Y5sL._AC_UL480_FMwebp_QL65_.jpg",
      price: 2799,
      mrp:"8,000",
      title:"KENT Classic Hot Air Fryer 4L 1300 W | 80% Less Oil | Instant Electric Air Fryer | Auto Cut Off | Fry, Grill, Roast, Steam, and Bake | 1 Year Warranty | Black",
      save:"1000"
    },
    {
      logo: "https://m.media-amazon.com/images/I/61yOHMcWNhL._AC_UL480_FMwebp_QL65_.jpg",
      price: 999,
      mrp:"1800",
      title:"KENT Super Egg Boiler | 3 Boiling Modes | Stainless Steel Body and Heating Plate | 6 Eggs at a Time | Automatic Turn-Off | Silver",
      save:"500"
    },
 ]
  return (
    <>
    <div className='overflow-y-auto h-[80vh]'>
     <h1 className='m-2 font-semibold text-xl'>Results</h1>
     <p className='m-2 '>Check each product page for other buying options</p>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {list.map((item,index)=>(
     <div key={index} className='p-8'>
        <div className='bg-[#f7f7f7]'><img className='bg-[#f7f7f7] w-[90%]' src={item.logo}></img></div>

        <p className='font-semibold mt-5 hover:text-yellow-600 cursor-pointer'>{item.title}</p>
        <p className='mt-2'>4.0 ⭐⭐⭐⭐</p>
        <p className='text-[gray]'>100+bought in past month</p>
        <div className='flex'>
        <p>₹</p>
        <div className='flex items-end'>
        <h1 className='font-bold text-[150%]'>{item.price}</h1>
         <p className='ml-2 text-[#6c6989]'>M.R.P: <s>₹{item.mrp}</s></p>
        </div>
        </div>
        <p className='bg-[#7fda69] font-semibold w-fit px-1'>Save ₹{item.save}</p> 
        <p>with coupon
            FREE delivery as soon as <strong>Wed, 31 Dec, 7 am - 9 pm</strong></p>
            <div className='mt-4'>
                <button
                  className="
                    bg-[#ffd814]
                    font-semibold
                    rounded-full
                    p-1 px-3
                    transition-all duration-200
                    hover:bg-[#f7ca00]
                    active:scale-95
                    active:bg-[#e6b800]
                    focus:outline-none
                    focus:ring-2 focus:ring-[#ffd814] focus:ring-offset-2
                  "
                  onClick={() => {
                    setItems(prev => [...prev, { ...item, count: 1 }]);
                  }}
                >
                  Add to cart
                </button>

            </div>
            
        </div>
      ))}

     </div>
   </div>
    </>
  )
}

export default ShoppingPage