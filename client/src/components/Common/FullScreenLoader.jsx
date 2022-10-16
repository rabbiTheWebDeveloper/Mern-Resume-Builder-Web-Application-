//External Import
import { useSelector } from "react-redux";

const FullScreenLoader = () => {
  const loader = useSelector((state) => state.Loader.IsLoading);

  return (
    <div className={loader ? "loading__overlay" : "d-none"}>
      <div className="indeterminate"></div>
    </div>
  );
};

export default FullScreenLoader;
