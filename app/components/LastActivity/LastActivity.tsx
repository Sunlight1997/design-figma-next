import { ActivityItem } from '../../utils/types';
import LastActivityItem from './LastActivityItem';

// type LastActivityProps = {
//   activities: ActivityItem[];
// }

const LastActivity = () => {
  const activities: ActivityItem[] = [
    {
      activity: 'Activity 1',
      point: 100,
      date: new Date(),
      txid: '0x1234567890',
      extra: 'https://example.com',
    },
    {
      activity: 'Activity 2',
      point: 200,
      date: new Date(),
      txid: '0x1234567890',
      extra: 'https://example.com',
    },
    {
      activity: 'Activity 2',
      point: 200,
      date: new Date(),
      txid: '0x1234567890',
      extra: 'https://example.com',
    },
    {
      activity: 'Activity 2',
      point: 200,
      date: new Date(),
      txid: '0x1234567890',
      extra: 'https://example.com',
    },
  ];
  return (
    <div className="clear mt-[40px] w-full">
      <div className="text-text-secondary">Last Activities</div>
      <table className="mt-[16px] w-full rounded-[12px] text-sm rtl:text-right">
        <thead className="rounded-t-[12px] border-b border-black bg-dark-ele2 text-left text-text-secondary">
          <th className="rounded-tl-[12px] px-6 py-3">Activities</th>
          <th className="px-6 py-3">Points</th>
          <th className="px-6 py-3">Date</th>
          <th className="px-6 py-3">TXID</th>
          <th className="rounded-tr-[12px] px-6 py-3"></th>
        </thead>
        <tbody>
          {activities.map((activity: ActivityItem, index) => {
            const d = {
              activity,
              lastItem: index === activities.length - 1,
            };
            return <LastActivityItem {...d} key={index} />;
          })}
        </tbody>
      </table>
    </div>
  );
};
export default LastActivity;
