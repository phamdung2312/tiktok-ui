import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Image from '../Image';
const cx = classNames.bind(styles);
function Account({ data }) {
    return (
        <Link to={`/@${data.nickname}`} className={cx('wrapper')}>
            <div className={cx('Container-img')}>
                <Image src={data.avatar} className={cx('avatar')} alt={data.full_name}></Image>
            </div>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    {data.full_name}
                    {data.tick && <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />}
                </h4>
                <span className={cx('decription')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

export default Account;
