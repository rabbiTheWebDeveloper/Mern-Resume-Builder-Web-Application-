//External Import
import { lazy, Suspense } from "react";

//Internal Lib Import
import LazyLoader from "../../components/Common/LazyLoader";
const EditProfile = lazy(() =>
  import("../../components/EditProfile/EditProfile"),
);
const MasterLayout = lazy(() => import("../../components/MasterLayout"));

const EditProfilePage = () => {
  return (
    <Suspense fallback={<LazyLoader />}>
      <MasterLayout>
        <EditProfile />
      </MasterLayout>
    </Suspense>
  );
};

export default EditProfilePage;
