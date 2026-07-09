import { getCabins } from "@/app/lib/data-service";
import CabinCard from "@/app/components/cabins/CabinCard";

async function CabinLists() {
  const cabins = await getCabins();

  if (cabins.length === 0) return null;

  return (
    <>
      {cabins.length > 0 && (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
          {cabins.map((cabin) => (
            <CabinCard cabin={cabin} key={cabin.id} />
          ))}
        </div>
      )}
    </>
  );
}

export default CabinLists;
