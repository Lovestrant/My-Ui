import React from 'react'
import './Homepage.css'


function Homepage() {
    // //Hook states
     //const [products, setProducts] = useState("")
    // const [cost, setCost] = useState("Free Software")
    // const [description, setDescription] = useState("A Google product")
    // const [location, setLocation] = useState("USA")
    // const [Youtube, setYoutube] = useState("Youtube")

    // //Methods
    // const handleClick = () => {
    //     if(products==="") {
    //         setProducts(<Dropdown />);
    //     }else{
    //         setProducts("");
    //     }
    

    // }

    // //Method to display states used
    // const handleState = () => {
    //     if(products === "" || products === <Dropdown />) {
    //         setProducts(<State1 />);
    //     }else{
    //         setProducts("");
    //     }
        
    // }

    // //Method to display city
    // const handleCity = () => {

    //     if(products === "" || products === <Dropdown />) {
    //         setProducts(<City1 />);
    //     }else{
    //         setProducts("");
    //     }
    // }
   
        const [items] = React.useState([
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Telangana",
                    "city": "Bodhan"
                },
                "discription": "Its a good product",
                "date": "2018-05-29T18:27:21.163Z",
                "time": "2016-11-01T17:40:09.148Z",
                "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Maharashtra",
                    "city": "Pachora"
                },
                "discription": "Its a good product",
                "date": "2020-04-26T12:17:48.773Z",
                "time": "2019-06-27T01:17:04.500Z",
                "image": "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Telangana",
                    "city": "Kagaznagar"
                },
                "discription": "Its a good product",
                "date": "2013-12-25T07:59:06.666Z",
                "time": "2012-05-14T06:21:52.338Z",
                "image": "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Maharashtra",
                    "city": "Tirora"
                },
                "discription": "Its a good product",
                "date": "2017-10-06T11:24:22.085Z",
                "time": "2021-10-19T11:35:28.772Z",
                "image": "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Telangana",
                    "city": "Sangareddy"
                },
                "discription": "Its a good product",
                "date": "2018-03-13T17:21:43.886Z",
                "time": "2017-08-21T21:48:09.472Z",
                "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Chhattisgarh",
                    "city": "Bhilai Nagar"
                },
                "discription": "Its a good product",
                "date": "2012-12-09T11:46:04.394Z",
                "time": "2020-03-16T12:29:53.577Z",
                "image": "https://toppng.com/uploads/preview/sitemap-infos-transparent-i-phone-x-phone-in-hand-11563198189tafc9ocrkg.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Andhra Pradesh",
                    "city": "Vizianagaram"
                },
                "discription": "Its a good product",
                "date": "2019-12-10T14:24:18.670Z",
                "time": "2013-06-15T17:16:47.872Z",
                "image": "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Maharashtra",
                    "city": "Talegaon Dabhade"
                },
                "discription": "Its a good product",
                "date": "2014-08-01T12:27:41.993Z",
                "time": "2015-09-26T01:05:58.334Z",
                "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Andhra Pradesh",
                    "city": "Gudivada"
                },
                "discription": "Its a good product",
                "date": "2020-03-01T18:11:42.975Z",
                "time": "2014-08-27T01:33:39.486Z",
                "image": "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Telangana",
                    "city": "Siddipet"
                },
                "discription": "Its a good product",
                "date": "2021-02-12T07:13:25.175Z",
                "time": "2019-06-08T01:49:07.832Z",
                "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Chhattisgarh",
                    "city": "Dalli-Rajhara"
                },
                "discription": "Its a good product",
                "date": "2015-01-02T17:12:38.216Z",
                "time": "2020-05-09T13:37:33.805Z",
                "image": "https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Chhattisgarh",
                    "city": "Bhatapara"
                },
                "discription": "Its a good product",
                "date": "2013-08-26T00:00:05.984Z",
                "time": "2021-07-17T08:56:38.750Z",
                "image": "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Chhattisgarh",
                    "city": "Dhamtari"
                },
                "discription": "Its a good product",
                "date": "2017-12-06T03:59:27.136Z",
                "time": "2015-05-11T22:54:13.032Z",
                "image": "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Manipur",
                    "city": "Lilong"
                },
                "discription": "Its a good product",
                "date": "2017-07-10T17:33:58.847Z",
                "time": "2017-12-21T22:39:06.119Z",
                "image": "https://www.pngall.com/wp-content/uploads/2016/05/Phone-Download-PNG.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Maharashtra",
                    "city": "Pandharkaoda"
                },
                "discription": "Its a good product",
                "date": "2019-04-18T02:15:18.538Z",
                "time": "2016-07-13T16:41:43.996Z",
                "image": "https://w7.pngwing.com/pngs/915/345/png-transparent-multicolored-balloons-illustration-balloon-balloon-free-balloons-easter-egg-desktop-wallpaper-party-thumbnail.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Andhra Pradesh",
                    "city": "Markapur"
                },
                "discription": "Its a good product",
                "date": "2017-12-25T23:30:32.179Z",
                "time": "2017-08-08T08:26:12.861Z",
                "image": "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Maharashtra",
                    "city": "Nagpur"
                },
                "discription": "Its a good product",
                "date": "2015-08-15T13:22:39.365Z",
                "time": "2013-03-22T14:24:54.293Z",
                "image": "https://www.researchgate.net/profile/Serge-Belongie/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png"
            },
            {
                "product_name": "Oil and Naturel gas limited",
                "brand_name": "Oil",
                "price": 1400,
                "address": {
                    "state": "Andhra Pradesh",
                    "city": "Salur"
                },
                "discription": "Its a good product",
                "date": "2020-08-24T10:28:29.063Z",
                "time": "2020-10-03T22:51:56.479Z",
                "image": "https://png.pngtree.com/png-clipart/20190920/original/pngtree-chemical-glass-product-illustration-png-image_4626884.jpg"
            }
        ]);
       

    return (
        <div>
        <div class="container-fluid">
            <div class="row">
                <div class="col-sm-12">
                    
                </div>
                <div class="col-sm-3" className='leftRow'>
                <div className='Hello'>
                <p>
                <br></br>
                <select>
                    
                {items.map(item => (
                    <option
                    key={item.product_name}
                    value={item.product_name}
                    >
                    {item.product_name}
                    </option>
                ))}
                </select>
                </p>
                   
                <p>
                <select>
                {items.map(item => (
                    <option
                    key={item.state}
                    value={item.address.state}
                    >
                    {item.address.state}
                    </option>
                ))}
                </select>

                </p>
                <select>
                {items.map(item => (
                    <option
                    key={item.address.city}
                    value={item.address.city}
                    >
                    {item.address.city}
                    </option>
                ))}
                </select>

                </div>
               
                </div>
                <div class="col-sm-9">
                <h2>Edvora</h2>
                <h5 style={{Color:'grey'}}>Products</h5>
                <h6>Product name</h6>
                <hr></hr>

                <div class="row">
                    <div class="col-sm-12" className='divdisplay'>
                    
                    <div className='mydiv'>
                    {items.map(item => (
                        <div className='innerDiv'>
                   <img src={item.image} alt="image" width={100} height={100} />
                    
                    <div className='thediv'>
                    <label className='pName'>{item.product_name}</label>
                   <p className='brand'>{item.brand_name}</p>
                   <p className='price'>{item.price}</p>
                    </div>
                    
                   <p className='date'>{item.date}</p>
                   <p className='city'>{item.address.city}</p>
                  </div>
                ))}
                    </div>
             </div> 
                    
                </div>
                        <h6>Product Name</h6>
                        <hr></hr>
                <div class="row">
                <div class="col-sm-12" className='divdisplay'>
                <div className='mydiv'>
                 {items.map(item => (
                        <div className='innerDiv'>
                   <img src={item.image} alt="image" width={100} height={100} />
                   <p className='pName'>{item.product_name}</p>
                   <p className='brand'>{item.brand_name}</p>
                   <p className='price'>{item.price}</p>
                   <p className='date'>{item.date}</p>
                   <p className='city'>{item.address.city}</p>
                  </div>
                 
                ))}
                 </div>
               </div> 
                </div>

                </div>
            </div>
        </div>
 
        </div>
    )
}

export default Homepage
