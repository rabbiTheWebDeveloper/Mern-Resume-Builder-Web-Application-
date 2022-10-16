//External Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const VetifyOtp = lazy(() => import("../../components/Recovery/VetifyOtp"));
const Layout = lazy(() => import("../../components/Layout"));

const VetifyOtpPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Layout>
        <VetifyOtp />
      </Layout>
    </Suspense>
  );
};

export default VetifyOtpPage;
