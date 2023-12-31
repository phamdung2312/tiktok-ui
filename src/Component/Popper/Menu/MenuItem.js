import classNames from 'classnames/bind';
import Button from '~/Component/Button';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ data, onClick }) {
    return (
        <Button className={cx('Menu-item', { TopLine: true })} leftIcon={data.icon} to={data.to} onClick={onClick}>
            {data.title}
        </Button>
    );
}

export default MenuItem;
