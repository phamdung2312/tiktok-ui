import { faCircleXmark, faSpinner } from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapp } from '~/Component/Popper';
import Account from '~/Component/Account';
import { IconSearch } from '~/Component/Icons';
import './Search2.module.scss';
import classNames from 'classnames/bind';
import styles from './Search2.module.scss';
import { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useDebouce from '~/hooks/useDebouce';
import * as searchServices from '~/apiServices/searchServices';

const cx = classNames.bind(styles);
function Search2() {
    const [valueSearch, setValueSearch] = useState('');
    const [sreachResult, setSreachResult] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [loadding, setLoading] = useState(false);

    const deBounce = useDebouce(valueSearch, 500);

    const userRefInput = useRef();

    const handleShowResult = () => {
        setShowResult(true);
    };
    const handleonClickOutside = () => {
        setShowResult(false);
    };
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ')) {
            setValueSearch(searchValue);
        }
    };

    useEffect(() => {
        if (!deBounce.trim()) {
            setSreachResult([]);
            return;
        }
        const fectAPI = async () => {
            setLoading(true);
            const result = await searchServices.search(deBounce);
            console.log(result);
            setSreachResult(result);
            setLoading(false);
        };
        fectAPI();
    }, [deBounce]);
    const handleClear = () => {
        setValueSearch('');
        userRefInput.current.focus();
        setSreachResult([]);
    };
    return (
        <HeadlessTippy
            visible={showResult && sreachResult.length > 0}
            interactive
            onClickOutside={handleonClickOutside}
            render={(attrs) => (
                <div value className={cx('search-box')} tabIndex="-1" {...attrs}>
                    <PopperWrapp>
                        <h4 className={cx('search-header')}>Account Name</h4>
                        {sreachResult.map((result) => (
                            <Account key={result.id} data={result}></Account>
                        ))}
                    </PopperWrapp>
                </div>
            )}
        >
            <div className={cx('search')}>
                <input
                    ref={userRefInput}
                    value={valueSearch}
                    type="text"
                    placeholder="Search "
                    className={cx('search-input')}
                    onChange={handleChange}
                    onFocus={handleShowResult}
                ></input>
                {!!valueSearch && !loadding && (
                    <button className={cx('btn-clear')} onClick={handleClear}>
                        {/* btn clear
                        btn loading
                     */}
                        <FontAwesomeIcon className={cx('clear')} icon={faCircleXmark} />
                    </button>
                )}
                {loadding && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}

                <button className={cx('btn-search')}>
                    <IconSearch />
                </button>
                <></>
            </div>
        </HeadlessTippy>
    );
}

export default Search2;
