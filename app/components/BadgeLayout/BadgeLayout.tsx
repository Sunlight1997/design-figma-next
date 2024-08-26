import Badge from '../Badge/Badge';
import './style.css';

const BadgeLayout = () => {
  return (
    <div className="w-full">
      <div className="rounded-t-[12px] border-b-[2px] border-b-dark bg-dark-ele3 p-2 text-white">
        Community Badge
      </div>
      <div className="hide-scroll bg-dark-ele1">
        <div className="inline-block w-max p-4">
          <Badge
            title="Liquidity Machine"
            icon={0}
            isActive={true}
            value="200 Points"
          ></Badge>
          <Badge
            title="Liquidity Machine"
            icon={0}
            isActive={true}
            value="1.15x Points"
          ></Badge>
          <Badge
            title="Liquidity Machine"
            icon={0}
            isActive={false}
            value="150 Points"
          ></Badge>
          <Badge
            title="Liquidity Machine"
            icon={0}
            isActive={false}
            value="500 Points"
          ></Badge>
          <Badge
            title="Liquidity Machine"
            icon={0}
            isActive={false}
            value="1000 Points"
          ></Badge>
          <Badge
            title="Liquidity Machine"
            icon={0}
            isActive={false}
            value="2x"
          ></Badge>
          <Badge
            title="Liquidity Machine"
            icon={0}
            isActive={false}
            value="2x"
          ></Badge>
        </div>
      </div>
    </div>
  );
};

export default BadgeLayout;
