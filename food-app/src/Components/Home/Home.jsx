import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import icon from "../Images/icon.png";
import { getProd } from "../Redux/Action";
export const Home = () => {
  const products = useSelector((state) => state.allProducts.products);
  console.log("data", products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getProd());
  }, []);
  return (
    <div>
      <div className="sub-nav">
        <div className="lft">Food List</div>
        <div className="rit">Favourites</div>
      </div>

      <div className="prodetails">
        {products.map((el) => (
          <div
            onClick={() => navigate(`/${el.id}`)}
            className="data_container"
            key={el.id}
          >
            <img src={icon} alt="not found" className="icon_img" />
            <div className="line">
              <h3>
                {el.product_name} ({el.generic_name})
              </h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
