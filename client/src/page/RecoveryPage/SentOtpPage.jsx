//External Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const SentOtp = lazy(() => import("../../components/Recovery/SentOtp"));
const Layout = lazy(() => import("../../components/Layout"));

const SentOtpPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Layout>
        <SentOtp />
      </Layout>
    </Suspense>
  );
};

export default SentOtpPage;
