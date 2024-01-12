const CardItem = (props) => {
  return (
    <div>
      <div className="card-item">
        <div className="item-detail">
          <h4>{props.infoData.card.info.name}</h4>
          <h5>
            ₹
            {props.infoData.card.info.price / 100 ||
              props.infoData.card.info.defaultPrice / 100}
          </h5>
          <p>{props.infoData.card.info.description}</p>
        </div>

        <div className="item-img">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
              props.infoData.card.info.imageId
            }
            alt="card image"
          />
        </div>
      </div>

      <div>
        <div>
          <hr className="hor-rule2"></hr>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
