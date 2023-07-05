import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { faCircleXmark, faSpinner, faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind'; // cài đặt thư viện className để có thể dùng tên selector dạng có dấu (-)
import image from '~/assets/images';
import { Wrapper as PopperWrapp } from '~/Component/Popper';
import Account from '~/Component/Account';
import Button from '~/Component/Button';
// import { Form } from 'react-router-dom';
const cx = classNames.bind(styles);
function Header() {
    const [valueSearch, setValueSearch] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setValueSearch([]);
        }, 0);
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={image.logo} alt="Tiktok"></img>
                </div>
                <Tippy
                    visible={valueSearch.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-box')} tabIndex="-1" {...attrs}>
                            <PopperWrapp>
                                <h4 className={cx('search-header')}>Account Name</h4>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                                <Account></Account>
                            </PopperWrapp>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            type="text"
                            placeholder="Please enter your search "
                            className={cx('search-input')}
                        ></input>

                        <button className={cx('btn-clear')}>
                            {/* btn clear
                        btn loading
                     */}
                            <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        </button>
                        <button className={cx('btn-search')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                        <></>
                    </div>
                </Tippy>
                <div className={cx('action')}>
                    {/* <Button rounded href={'https://fullstack.edu.vn/'}>
                        Log in
                    </Button> */}
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Up load
                    </Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
