import redStar from "../../assets/picto/StarFull.svg";
import greyStar from "../../assets/picto/StarEmpty.svg";

function Rating({rating}){
    const stars = [1, 2, 3, 4, 5]; //creer un tableau de 5 etoiles voir array.fill
    return(
        <div className="rate-container">
          {/* on genere une img pour chaque element du tableau 
          si la valeur rating est superieur a la valeur en cours 
          alors etoile rouge sinon etoile grise */}
          {stars.map((star, index) =>
            rating >= star ? (
              <img key={index} className="etoile" src={redStar} alt="star"/>
            ) : (
              <img key={index} className="etoile" src={greyStar} alt="star"/>
            )
          )}
      </div>
    )
}

export default Rating