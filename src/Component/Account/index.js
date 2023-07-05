import styles from './Account.module.scss';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function Account() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('Container-img')}>
                <img
                    src="https://i.ex-cdn.com/mgn.vn/files/content/2022/06/11/body-junvu-1-1406.jpg"
                    className={cx('avatar')}
                    alt="JunVu"
                ></img>
            </div>
            <div className={cx('info')}>
                <h4 className={cx('username')}>
                    JunVu.offical
                    <FontAwesomeIcon className={cx('icon-check')} icon={faCircleCheck} />
                </h4>
                <span className={cx('decription')}>Vũ Phương Anh</span>
            </div>
        </div>
    );
}

export default Account;
