import MetricItem from '../MetricItem';

const Progress = () => {
  return (
    <div className="px-2">
      <div className="flex justify-between">
        <div className="text-[14px]">
          <span className="text-white">How to Earn: </span>
          <span className="text-text-secondary">
            Complete the actions for the badge, no specific order needed.
          </span>
        </div>
        <div className="flex">
          <div className="mr-[5px] flex h-[24px] w-[101px] items-center justify-center rounded-[32px] bg-dark-ele3 text-[12px] text-text-secondary">
            1/3 Completed
          </div>
          <div className="flex h-[24px] w-[138px] items-center justify-center rounded-[32px] bg-primary-dark text-[12px] text-primary-light">
            Total Earning: 3000
          </div>
        </div>
      </div>
      <div>
        <MetricItem
          value="Provide at least $50 Liquidity to USTD/ETH"
          isCompleted={true}
        />
      </div>
    </div>
  );
};

export default Progress;
