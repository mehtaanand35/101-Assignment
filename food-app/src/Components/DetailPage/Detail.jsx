import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Icon from "../Images/icon.png";
import { selectedProd } from "../Redux/Action";

export const Detail = () => {
  const { id } = useParams();
  let product = useSelector((state) => state.product);

  const dispatch = useDispatch();
  useEffect(() => {
    if (id && id !== "") dispatch(selectedProd(id));
  }, []);
  return (
    <div className="details_container">
      <div className="prod_name">
        <img src={Icon} alt="not found" className="icon_img" />
        <h3 className="prod_align">{product.product_name}</h3>
      </div>

      <table>
        <tbody>
          {Object.keys(product).map((key, index) => {
            return (
              <tr key={index}>
                <td>{key}</td>
                <td>{product[key]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
