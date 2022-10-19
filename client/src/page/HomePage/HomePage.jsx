//External Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const Home = lazy(() => import("../../components/Home/Home"));
const MasterLayout = lazy(() => import("../../components/MasterLayout"));

const HomePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout>
        <Home />
      </MasterLayout>
    </Suspense>
  );
};

export default HomePage;
