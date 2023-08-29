import Image from "next/image";
import { PageLayout } from "@/components/PageLayout";

export default function Home() {
  return (
    <PageLayout>
      <div className="flex justify-center h-full">
        <div className="border rounded-xl w-11/12 h-5/6 flex flex-col items-center justify-center mt-4">
          <p className="font-bold text-6xl mb-4">Abbot Appraisals</p>
          <p className="font-semibold text-2xl">Jason Erdos</p>
        </div>
      </div>
    </PageLayout>
  );
}
