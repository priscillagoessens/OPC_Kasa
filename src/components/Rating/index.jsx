import redStar from "../../assets/picto/StarFull.svg";
import greyStar from "../../assets/picto/StarEmpty.svg";

function Rating({rating}){
    const stars = [1, 2, 3, 4, 5];
    return(
        <div className="rate-container">
        {stars.map((star) =>
          rating >= star ? (
            <img
              key={star.toString()}
              className="etoile"
              src={redStar}
              alt="star"
            />
          ) : (
            <img
              key={star.toString()}
              className="etoile"
              src={greyStar}
              alt="star"
            />
          )
        )}
      </div>
    )
}

export default Rating