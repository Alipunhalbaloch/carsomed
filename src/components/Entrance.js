import React from "react";
import "./css/entrance.css";
import myImage from '../assets/sv.webp';
import logo from '../assets/wrench-adjustable.svg';
import price from '../assets/fixed-price--my.a6bbeac.svg';
function Entrance() {

  const divStyle = {
    width: '200px', // Adjust width
    height: '100px', // Adjust height
    backgroundImage: `url(${myImage})`, // Replace with your image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px', // Optional for rounded corners
};
    return (
  //   <div className="container" style={{marginTop: '20px'}}>
    
  //   <div className="row" style={{backgroundColor:'#808080',height:'400px',
  //       boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
  //     }}>
  //     <div className="col-sm-8" >
  //       <p>Lorem ipsum...</p>
  //     </div>
  //     <div className="col-sm-4" >
  //       <p>Lorem ipsum...</p>
  //     </div>
      
  //   </div>
  // </div> 

  <div className="container my-4">
   
    <div className="row">
        <div className="col-lg-9">
            <div className="search-container">
                <h3>Buy a Car</h3>
                 <input type="text" className="form-control mb-3" placeholder="Search for cars by Brand, Model, or Keywords"/>
                
                
                
                <div className="row text-center">
                    <div className="col-md-3" style={divStyle}>
                        <div className="card-category" style={{color: 'red'}}>SUV/MPV</div>
                    </div>
                    <div className="col-md-3" style={divStyle}>
                        <div className="card-category" style={{color: 'red'}}>Affordable Rides</div>
                    </div>
                    <div className="col-md-3" style={divStyle}>
                        <div className="card-category " style={{color: 'red'}}>Local Heroes</div>
                    </div>
                    <div className="col-md-3" style={divStyle}>
                        <div className="card-category" style={{color: 'red'}}>Best Value</div>
                    </div>
                </div>
                
                
                <div className="d-flex justify-content-between mt-3">
                
                    <span>Perodua</span>
                    <span>Honda</span>
                    <span>Toyota</span>
                    <span>Proton</span>
                    <span>Nissan</span>
                    <span>Mazda</span>
                    <span>Mitsubishi</span>
                    <span>Kia</span>
                </div>
                
                
                <div className="d-flex justify-content-between mt-2">
                    <span>Hatchback</span>
                    <span>Sedan</span>
                    <span>SUV</span>
                    <span>MPV</span>
                    <span>Coupe</span>
                    <span>Truck</span>
                    <span>Wagon</span>
                    <span>Convertible</span>
                </div>

                
                <div className="d-flex justify-content-between mt-3">
                    <button className="btn btn-outline-secondary">Under RM 30,000</button>
                    <button className="btn btn-outline-secondary">RM 30,000 - 50,000</button>
                    <button className="btn btn-outline-secondary">RM 50,000 - 100,000</button>
                    <button className="btn btn-outline-secondary">Above RM 100,000</button>
                    <button className="btn btn-link">View All Cars</button>
                </div>

                                <div className="d-flex justify-content-between align-items-center mt-3">
                    <span>What's the right car for me? Let us help you find the car you want.</span>
                    <button className="btn btn-warning">Find My Car</button>
                </div>
            </div>
        </div>

        
        <div className="col-lg-3" >
            <h3>Sell Your Car</h3>
            <div className="sidebar-option" style={{backgroundColor:'#EB8317'}}>
            <img src={price} alt="Logo"
                style={{ width: "20px", height: "20px", verticalAlign: "middle" }}
                        />
                        Sell Car</div>
            <div className="sidebar-option" style={{backgroundColor:'#10375C'}}>Get Car Price</div>

           
            <div className="info-box mt-3"><img src={logo} alt="Logo" style={{width: '20px', height: '20px' ,verticalAlign: "middle" }}/>30-45 Min Inspection Time</div>
            <div className="info-box">No Paperwork Hassle</div>
            <div className="info-box">Get paid securely without delay</div>
           
           
            <div className="info-box bg-light mt-3">
                Trade-in for an extra RM1,500 OFF*
                <button className="btn btn-primary btn-block mt-2">Trade-In</button>
            </div>
        </div>
    </div>
</div>



  );
}

export default Entrance;
