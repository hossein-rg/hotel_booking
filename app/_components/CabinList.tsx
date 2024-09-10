import CabinCard from "@/app/_components/CabinCard";
import { getCabins } from "../_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

async function CabinList({ filter }: { filter: string }) {
    // noStore();
    const cabins = await getCabins();
    interface CabinType {
        id: string;
        name: string;
        maxcapacity: number;
        regularprice: number;
        discount: number;
        image: string;
    }

    let displayCabins: CabinType[] = [];
    if (filter == "all") displayCabins = cabins;
    else if (filter == "small") displayCabins = cabins.filter((cabin) => cabin.maxcapacity <= 3);
    else if (filter == "medium") displayCabins = cabins.filter((cabin) => cabin.maxcapacity >= 4 && cabin.maxcapacity <= 7);
    else if (filter == "large") displayCabins = cabins.filter((cabin) => cabin.maxcapacity >= 8)
    return <div>
        {displayCabins?.length > 0 && (
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
                {displayCabins?.map((cabin) => (
                    <CabinCard cabin={cabin} key={cabin.id} />
                ))}
            </div>
        )}
    </div>;
}

export default CabinList;
