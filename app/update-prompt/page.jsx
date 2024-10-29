import dynamic from "next/dynamic";
import { Suspense } from "react";

const EditPrompt = dynamic(() => import("@components/EditPrompt"), {
  suspense: true,
});

const Page = () => {
  return (
    <Suspense>
      <EditPrompt />
    </Suspense>
  );
};

export default Page;
