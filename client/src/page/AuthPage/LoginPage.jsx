//External Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const Login = lazy(() => import("../../components/Auth/Login"));
const Layout = lazy(() => import("../../components/Layout"));

const LoginPage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <Layout>
        <Login />
      </Layout>
    </Suspense>
  );
};

export default LoginPage;
