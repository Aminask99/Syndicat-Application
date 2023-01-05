import React from 'react'


export default function PdfFille() {
  return (
    <div>
    <div className="container mt-5 mb-3">
    <div className="row">
      <div className="col-md-">
        <div className="card p-3 mb-2">
          <div className="d-flex justify-content-between">
            <div className="d-flex flex-row align-items-center">
              <div className="w-50"><img src="assets/img/appar.jpg" className="card-img-top" alt="..." /> </div>
              <div className="ms-2 c-details">
                <h6 className="mb-0">{item.Name_Client }</h6> <span>1 days ago</span>
              </div>
            </div>
         
          </div>
          <div className="mt-5">
            <p className="heading">la date de facteur:{item.date_facteur}<br /> date de oayment :{item.date_payment}</p>
            <p className="heading">{item.apartement}</p>
            <div className="mt-5">
            <a href="#" className="btn mr-2">Imprémer</a>
              <div className="mt-3"> <span className="text1">32 Applied <span className="text2">facteur</span></span> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </div>
  )
}
