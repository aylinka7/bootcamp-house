import React, {useEffect, useState} from "react";
import css from "./header.module.css";
import Logo from "../../../assets/img/logo.svg";
import {SearchIcon, GlobeAltIcon, MenuIcon, UserCircleIcon, UsersIcon} from "@heroicons/react/solid";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from 'react-date-range';
import {Link, useHistory, useLocation} from "react-router-dom";
import queryString from "query-string"
import {format} from "date-fns";


export function Header({placeholder}) {
    const { search } = useLocation();
    const values = queryString.parse(search);
    const [searchInput, setSearchInput] = useState("");
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [noOfGuests, setNoOfGuests] = useState(1)


    const location = values.location;
    const guest = values.noOfGuests;

    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy")
    let history = useHistory();
    function handleClick() {
        history.push(`/search?location=${searchInput}&startDate=${startDate.toISOString()}&endDate=${endDate.toISOString()}&noOfGuests=${noOfGuests}`);
        resetInput();
    }


    const handleSelect = (ranges) => {
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    };

    const resetInput = () => {
        setSearchInput("")
    }

    const selectionRange ={
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    return (

            <header className={css.header}>
                <div className="container">
                    <div className={css.header__inner}>
                <div className={css.logo}>
                    <Link to="/">
                    <img src={Logo} height={15} alt=""/>
                    </Link>
                </div>
                <div className={css.search}>
                    <input
                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}
                        type="text" placeholder={ values.location? `${location} | ${formattedStartDate} — ${formattedEndDate} | ${guest} гостей`:"начните ваш поиск..."}/>
                    <SearchIcon className={css.search_img} />
                </div>
                <div className={css.header__left}>
                    <Link to="/login"><p>
                        Сдайте жилье
                    </p></Link>
                    <GlobeAltIcon className={css.global} />
                    <Link to="/login"><div className={css.auth}>
                        <MenuIcon className={css.menu}/>
                        <UserCircleIcon className={css.user} />
                    </div>
                    </Link>

                </div>

                </div>

                </div>
                {searchInput && (
                    <div className={css.calendar}>
                        <DateRangePicker ranges={[selectionRange]}
                                         minDate={new Date()}
                                         rangeColors={["#d4c17f"]}
                                         onChange={handleSelect}
                        />
                        <div className={css.quest}>
                            <h2 className={css.quest__value}>
                                Количество гостей
                            </h2>

                            <UsersIcon className={css.users} />
                            <input
                                className={css.input__calendar}
                                value={noOfGuests}
                                onChange={(e) => setNoOfGuests(e.target.value)}
                                type="number"
                                min={1}
                            />
                        </div>
                        <div className={css.search__btns}>
                            <button onClick={resetInput} className={css.cancel__btn}>Отмена</button>
                            <button onClick={()=>{
                                handleClick();
                            }} className={css.search__btn}>Поиск</button>
                        </div>
                    </div>
                )}
            </header>
    );
}



