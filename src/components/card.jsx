import { CardContainer, CardBody, CardItem } from "./ui/3d-card";
export function ThreeDCardDemo({ Icon, Text1, Text2 }) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-[#f4f2e2] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[20rem] h-auto rounded-xl p-4 border">
        {" "}
        {/* Changed w-[30rem] to w-[20rem] and p-6 to p-4 */}
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {Icon}
          <div className="text-lg">{Text1}</div>{" "}
          {/* Changed text-xl to text-lg */}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-lg max-w-sm mt-2 dark:text-gray-500"
        >
          {Text2}
        </CardItem>
        <div className="flex justify-between items-center mt-10">
          {" "}
          {/* Changed mt-20 to mt-10 */}
          <CardItem
            translateZ={20}
            as="button"
            className="px-4 py-2 rounded-xl bg-[#ffd462] dark:bg-white dark:text-gray-500 text-[#052041] text-xs font-bold"
          >
            Sign up
          </CardItem>
        </div>
      </CardBody>
    </CardContainer>
  );
}
