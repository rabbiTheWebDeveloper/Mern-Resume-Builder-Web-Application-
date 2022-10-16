//External Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const Register = lazy(() => import("../../components/Auth/Register"));
const Layout = lazy(() => import("../../components/Layout"));

const RegisterPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Layout>
        <Register />
      </Layout>
    </Suspense>
  );
};

export default RegisterPage;
