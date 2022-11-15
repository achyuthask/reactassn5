
  
  function Card (props){
    return(
        <div className="Card" 
         >
          <div className="card_body" style={{backroundcolor :"black"}}>
          <img src={props.img} width="100px" height="70px"  style={{padding : "6px 8px"}}/>
             <h2 className="Card_title" >{props.Card_title}</h2>
            <h4 className="Card_subtitle"style={{color :"purple"}}>{props.Card_subtitle}</h4>
            <img src={props.img} width="400px" height="150px"  style={{padding : "6px 800px"}}/>
            <p className="Card_description" >{props.Card_description}</p>
            
        </div>
        </div>
    )
  }

  export default Card;