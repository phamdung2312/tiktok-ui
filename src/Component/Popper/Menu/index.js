import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { Wrapper as PopperWrapp } from '~/Component/Popper';
import MenuItem from './MenuItem';
import Tippy from '@tippyjs/react/headless';
import Header from './Header';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFc = () => {};

function Menu({ children, items = [], hideOnClick, onChange = defaultFc }) {
    const [history, setHistory] = useState([{ data: items }]);
    const current = history[history.length - 1];
    const listMenuItem = () => {
        return current.data.map((item, index) => {
            const isChildren = !!item.children;
            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isChildren) {
                            setHistory((pre) => [...pre, item.children]);
                        } else {
                            onChange(item);
                        }
                    }}
                />
            );
        });
    };
    return (
        <Tippy
            placement={'bottom-end'}
            delay={[0, 700]} //delay [thực hiện hover(ms),khi dí chuột khỏi box (ms) ]
            interactive
            hideOnClick={hideOnClick}
            onHidden={() => setHistory((pre) => pre.slice(0, 1))}
            render={(attrs) => (
                <div className={cx('Menu-container')} tabIndex="-1" {...attrs}>
                    <PopperWrapp className={cx('Menu-icon_item')}>
                        {history.length > 1 && (
                            <Header
                                title={current.title}
                                onBack={() => setHistory((pre) => pre.slice(0, pre.length - 1))}
                            ></Header>
                        )}
                        {listMenuItem()}
                    </PopperWrapp>
                </div>
            )}
        >
            {children}
        </Tippy>
    );
}

export default Menu;
