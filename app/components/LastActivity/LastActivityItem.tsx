import { ActivityItem } from '@/app/utils/types';
import cx from 'classnames';
import RoundBadge from '../RoundBadge';

type LastActivityItemProps = {
  activity: ActivityItem;
  lastItem: boolean;
};

const LastActivityItem = (props: LastActivityItemProps) => {
  return (
    <tr
      className={cx(
        'odd:bg-dark-ele1 even:bg-dark-ele2',
        props.lastItem ? 'rounded-b-[12px]' : 'border-b',
      )}
    >
      <td
        className={cx(
          'px-6 py-4 text-text-primary',
          props.lastItem ? 'rounded-bl-[12px]' : '',
        )}
      >
        {props.activity.activity}
      </td>
      <td className="px-6 py-4">
        <RoundBadge>{props.activity.point}</RoundBadge>
      </td>
      <td className="px-6 py-4 text-text-secondary">
        {props.activity.date.toLocaleString()}
      </td>
      <td className="px-6 py-4 text-text-secondary">{props.activity.txid}</td>
      <td
        className={cx(
          'px-6 py-4 text-text-secondary',
          props.lastItem ? 'rounded-br-[12px]' : '',
        )}
      >
        <a href={props.activity.extra}>extra</a>
      </td>
    </tr>
  );
};

export default LastActivityItem;
