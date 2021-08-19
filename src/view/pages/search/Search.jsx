import React, { useEffect, useState }  from 'react';
import css from "./search.module.css"
import queryString from "query-string"
import {Link, useLocation} from 'react-router-dom'
import {format} from "date-fns";
import {CssBaseline, Grid, InputBase} from '@material-ui/core';

import { getPlacesData, getWeatherData } from '../../../api/travelAdvisorAPI';
import axios from 'axios'
import InfoCard from "../../components/infoCard/InfoCard";
import MapSecond from "../../components/mapSecond/mapSecond";
import SearchIcon from "@material-ui/icons/Search";
import {Autocomplete} from "@react-google-maps/api";
import classes from "../../components/mapSecond/styles"

function Search() {

    const { search } = useLocation();
    const values = queryString.parse(search);

    const [type, setType] = useState('restaurants');
    const [rating, setRating] = useState('');

    const [coords, setCoords] = useState({});
    const [bounds, setBounds] = useState(null);

    const [weatherData, setWeatherData] = useState([]);
    const [filteredPlaces, setFilteredPlaces] = useState([]);
    const [places, setPlaces] = useState([]);

    const [autocomplete, setAutocomplete] = useState(null);
    const [childClicked, setChildClicked] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: { latitude, longitude } }) => {
            setCoords({ lat: latitude, lng: longitude });
        });
    }, []);

    useEffect(() => {
        const filtered = places.filter((place) => Number(place.rating) > rating);

        setFilteredPlaces(filtered);
    }, [rating]);

    useEffect(() => {
        if (bounds) {
            setIsLoading(true);

            getWeatherData(coords.lat, coords.lng)
                .then((data) => setWeatherData(data));

            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    // setPlaces(data.filter((place) => place.name && place.num_reviews > 0));
                    setFilteredPlaces([]);
                    setRating('');
                    setIsLoading(false);
                });
        }
    }, [bounds, type]);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCoords({ lat, lng });
    };
    const startDate = values.startDate
    const endDate = values.endDate
    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy")
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy")
    const range = `${formattedStartDate} - ${formattedEndDate}`;
        return (
            <>
            {/*<div className={css.search__container}>*/}
            {/*    <main className={css.main}>*/}
            {/*        <section>*/}
            {/*            <p className={css.search__subtitle}>Более 300 вариантов жилья*/}
            {/*                для {values.noOfGuests} жителей {range}</p>*/}
            {/*            <h1 className={css.search__title}>{values.location}: жилье</h1>*/}
            {/*            <div className={css.search__filter}>*/}
            {/*                <p className={css.search__filter__btn}>Бесплатная отмена</p>*/}
            {/*                <p className={css.search__filter__btn}>Тип жилья</p>*/}
            {/*                <p className={css.search__filter__btn}>Цена</p>*/}
            {/*                <p className={css.search__filter__btn}>кровати и комнаты</p>*/}
            {/*                <p className={css.search__filter__btn}>Больше</p>*/}
            {/*            </div>*/}
            {/*    </main>*/}
            {/*</div>*/}
        <CssBaseline />
        <Grid container spacing={3} style={{ width: '100%' }}>
            <Grid item xs={12} md={4}>
                <InfoCard
                    isLoading={isLoading}
                    childClicked={childClicked}
                    places={filteredPlaces.length ? filteredPlaces : places}
                    type={type}
                    setType={setType}
                    rating={rating}
                    setRating={setRating}
                />
            </Grid>
            <Grid item xs={12} md={8} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <MapSecond
                    // onPlaceChanged={onPlaceChanged} onLoad={onLoad}
                    setChildClicked={setChildClicked}
                    setBounds={setBounds}
                    setCoords={setCoords}
                    coords={coords}
                    places={filteredPlaces.length ? filteredPlaces : places}
                    weatherData={weatherData}
                />
            </Grid>

        </Grid>
                {/*<Autocomplete onLoad={onLoad} onPlaceChanged={onPlaceChanged}>*/}
                {/*    <div className={classes.search}>*/}
                {/*        <div className={classes.searchIcon}>*/}
                {/*            <SearchIcon />*/}
                {/*        </div>*/}
                {/*        <InputBase placeholder="Search…" classes={{ root: classes.inputRoot, input: classes.inputInput }} />*/}
                {/*    </div>*/}
                {/*</Autocomplete>*/}
        </>
        );
}

export default Search;
