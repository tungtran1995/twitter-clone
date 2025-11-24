import { Link } from 'react-router-dom';

import Icon from '@/components/icons/icon';
import type { IconName } from '@/components/icons/icon-data';

import { accountItems } from './account-config';

const Account = () => {
  return (
    <>
      <div className="pt-3 pr-4 pb-3 pl-4 text-[13px]">
        See information about your account, download an archive of your data, of
        learn about your account deactivation options
      </div>
      <div>
        <ul>
          {accountItems.map((item, index) => (
            <Link
              to={item.path || '#'}
              key={index}
              className="flex items-center justify-between pt-3 pr-4 pb-3 pl-4"
            >
              <li className="flex">
                <div className="mr-4 flex h-12 w-12 items-center justify-center">
                  <Icon
                    name={item.icon as IconName}
                    className="h-[18.75px] w-[18.75px]"
                  />
                </div>
                <div className="flex shrink grow flex-col">
                  <span className="text-[15px]">{item.title}</span>
                  <span className="text-[13px]">{item.description}</span>
                </div>
              </li>
              <Icon
                name="ArrowRightIcon"
                className="h-[18.75px] text-[rgba(83,100,113,1.00)]"
              />
            </Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Account;
