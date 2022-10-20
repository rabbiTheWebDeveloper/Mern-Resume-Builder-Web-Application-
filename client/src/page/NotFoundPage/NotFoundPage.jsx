//External Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const NotFound = lazy(() => import("../../components/NotFound/NotFound"));
const MasterLayout = lazy(() => import("../../components/MasterLayout"));

const NotFoundPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout>
        <NotFound />
      </MasterLayout>
    </Suspense>
  );
};

export default NotFoundPage;
