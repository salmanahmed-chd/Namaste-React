const CardItem = (props) => {
  return (
    <div className="">
      <div className="flex justify-between">
        <div className="">
          <h4 className="font-bold text-lg my-4">{props.infoData.card.info.name}</h4>
          <h5 className="font-medium my-2">
            ₹
            {props.infoData.card.info.price / 100 ||
              props.infoData.card.info.defaultPrice / 100}
          </h5>
          <p className="mt-2 mb-6 text-sm font-medium text-slate-600">{props.infoData.card.info.description}</p>
        </div>

        <div className="my-6">
          <img
            src={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/" +
              props.infoData.card.info.imageId
            }
            alt="card image" className="w-40 shadow-md"
          />
        </div>
      </div>

      <div>
        <div>
          <hr className="my-8"></hr>
        </div>
      </div>
    </div>
  );
};

export default CardItem;
