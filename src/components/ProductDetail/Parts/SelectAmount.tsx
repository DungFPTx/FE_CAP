import {useState} from "react";
import {useOnlyUpdateEffect} from "../../../utils/hook/useUpdateEffect";

const SelectAmount = ({setAmountFunc}) => {
  const [count, setCount] = useState(1);

  const add = () => {
    setCount(c => {
      return c + 1;
    });
  };

  const substract = () => {
    setCount(c => {
      if (c - 1 > 0) return c - 1;
      return c;
    });
  };

  useOnlyUpdateEffect(() => {
    setAmountFunc("amount", count);
  }, [count]);

  return (
    <>
      <div className="detail-info-count-add-count">
        <i onClick={substract} className="fa-solid fa-minus " />
        <span>{count}</span>
        <i onClick={add} className="fa-solid fa-plus " />
      </div>
    </>
  );
};

export default SelectAmount;
