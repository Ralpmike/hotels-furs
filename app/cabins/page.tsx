import CabinPage from "../components/cabins/CabinPage";

export const metadata = {
  title: "Cabins",
  description: "Cabins page",
};

export default async function page() {
  return <CabinPage />;
}
