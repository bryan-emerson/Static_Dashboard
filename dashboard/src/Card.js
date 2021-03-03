function Card(props) {
  // const {tile, author, body, comments} = props.post;
  // const allComments = comments.map(comment=><li>some comment</li>)
  return(
    <div className="card-container">
      <div className="indvCard">
       <h6>Reviews</h6>
       <h4>1,281</h4>
      </div>
      <div className="indvCard">
        <h6>Average Rating</h6>
        <h4>4.6</h4>
      </div>
      <div className="indvCard">
        <h6>Sentiment Analysis</h6>
        <h4>960</h4>
        <h4>122</h4>
        <h4>321</h4>
      </div>
      <div className="indvCard">
        <h6>Website Visitors</h6>
        <h4>821</h4>
        <div className="inside-box"></div>
      </div>
    </div>
  )
}

export default Card;