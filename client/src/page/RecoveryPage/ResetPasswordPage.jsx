//External Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const ResetPassword = lazy(() => import("../../components/Recovery/ResetPassword"));
const Layout = lazy(() => import("../../components/Layout"));

const ResetPasswordPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Layout>
        <ResetPassword />
      </Layout>
    </Suspense>
  );
};

export default ResetPasswordPage;
