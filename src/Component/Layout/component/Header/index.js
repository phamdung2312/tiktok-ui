import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Menu from '~/Component/Popper/Menu';
// import HeadlessTippy from '@tippyjs/react/headless';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import Image from '~/Component/Image';
import {
    faPlus,
    faEllipsisVertical,
    faEarthAmericas,
    faCircleQuestion,
    faKeyboard,
    faUser,
    faCoins,
    faGear,
    faBookmark,
    faChartLine,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind'; // cài đặt thư viện className để có thể dùng tên selector dạng có dấu (-)
import image from '~/assets/images';
// import { Wrapper as PopperWrapp } from '~/Component/Popper';
// import Account from '~/Component/Account';
import Button from '~/Component/Button';
import { IconInbox, IconMessages } from '~/Component/Icons';
import Search2 from './Search2';
import { Link } from 'react-router-dom';
import routerConfig from '~/config/router';
// import { Form } from 'react-router-dom';
const cx = classNames.bind(styles);
const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAmericas} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcut',
    },
];

function Header() {
    const [currentUser, setCurrentUser] = useState(true);
    const LineTop = true;

    const MENU_ITEM_USER = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/profileUser',
        },
        {
            icon: <FontAwesomeIcon icon={faBookmark} />,
            title: 'Favorites',
            to: '/favorites',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Coins',
            to: '/coins',
        },
        {
            icon: <FontAwesomeIcon icon={faChartLine} />,
            title: 'View Analytics',
            to: '.View Analytics',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/Setting',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: currentUser,
            Style: LineTop,
        },
    ];
    // const [valueSearch, setValueSearch] = useState([]);
    const handleOnchange = (item) => {
        setCurrentUser(item.to === false);
    };
    // useEffect(() => {
    //     setTimeout(() => {
    //         setValueSearch([1, 2, 3]);
    //     }, 0);
    // }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link className={cx('logo-link')} to={routerConfig.home}>
                        <img src={image.logo} alt="Tiktok"></img>
                    </Link>
                </div>
                {/* Search */}
                <Search2 />
                <div className={cx('action')}>
                    {currentUser ? (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Up load
                            </Button>
                            <Tippy content="Message">
                                <button className={cx('btn-mess', 'action-item')}>
                                    <IconMessages />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox">
                                <button className={cx('btn-notification', 'action-item')}>
                                    <IconInbox />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                                Up load
                            </Button>
                            <Button primary>Log in</Button>
                        </>
                    )}

                    <Menu
                        hideOnClick={false}
                        items={currentUser ? MENU_ITEM_USER : MENU_ITEM}
                        onChange={handleOnchange}
                    >
                        {currentUser ? (
                            <div className={cx('user-Login', 'action-item')}>
                                <Image
                                    className={cx('user-img')}
                                    src="https://haycafe.vn/wp-content/uploads/2021/12/Hinh-anh-anime-phong-canh.jpg"
                                    // fallBack="https://img6.thuthuatphanmem.vn/uploads/2022/07/05/anh-4k-anime-cool-ngau_044842499.jpg"
                                    alt="Phạm Dũng"
                                ></Image>
                            </div>
                        ) : (
                            <button className={cx('btnMenu-more')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
