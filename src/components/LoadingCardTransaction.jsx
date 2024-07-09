import Skeleton from "react-loading-skeleton";

const LoadingCardTransaction = ({ count = 1 }) => {
  return new Array(count).fill(0).map((v, i) => (
    <div key={i} className="my-5">
      <Skeleton count={1} height={140} borderRadius={8} />
    </div>
  ));
};

export default LoadingCardTransaction;
