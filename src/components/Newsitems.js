// import PropTypes from 'prop-types'
// import React, { Component } from 'react'
import React from 'react'

export default function Newsitems(props) {
  let {title, description,imgUrl, newsurl} = props;
  return (
    <div className='my-3'><div className="card">
    <img src={imgUrl} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title ">{title}..</h5>
      <p className="card-text">{description}...</p>
      <a href={newsurl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
    </div>
  </div></div>
  )
}



// export class Newsitems extends Component {
 

  
//     let {title, description,imgUrl, newsurl} = this.props;
//     return (
//       <div className='my-3'><div className="card">
//       <img src={imgUrl} className="card-img-top" alt="..."/>
//       <div className="card-body">
//         <h5 className="card-title ">{title}..</h5>
//         <p className="card-text">{description}...</p>
//         <a href={newsurl} target="_blank"  rel="noreferrer" className="btn btn-sm btn-primary">Read More</a>
//       </div>
//     </div></div>
//     )
  
// }

// export default Newsitems

