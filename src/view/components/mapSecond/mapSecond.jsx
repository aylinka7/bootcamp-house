import * as React from 'react';
import { useState, useEffect } from 'react';
import ReactMapGL, {Marker, Popup} from 'react-map-gl';
import axios from "axios";
import {getCenter} from "geolib";
import css from "./mapsecond.module.css"
import {HeartIcon} from "@heroicons/react/outline";
import {StarIcon} from "@heroicons/react/solid";

function MapSecond() {

    const accesKey = "pk.eyJ1IjoiYWJsYWJla292dnYiLCJhIjoiY2tzYmlhN3loMDZvejJ1cXE2cjMwM2YxNSJ9.zfkNeVL4Uce1xPzFIJgwNg"
    const [viewport, setViewport] = useState({
        width: "100%",
        height: "100%",
        latitude: 42.859498263045126,
        longitude: 74.60786724799624,
        zoom:11
    });
    const [selectedLocation, setSelectedLocation] = useState({})
    const [searchResults, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        axios("https://60f1235338ecdf0017b0fa5e.mockapi.io/card")
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching data: ", error);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);



    if (loading) return "Loading...";
    if (error) return "Error!";

    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    const center = getCenter(coordinates);

    console.log(selectedLocation)


    return (
        <div className="map-container">
            <ReactMapGL
                mapStyle="mapbox://styles/ablabekovvv/cks792p3q0atv17pf3yi14rn5"
                mapboxApiAccessToken={accesKey}
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
            >
                {searchResults.map((result) => (
                    <div key={result.long}>
                        <Marker longitude={result.long} latitude={result.lat} offsetLeft={-20} offsetTop={-10}>
                            <p
                                role="img"
                                onClick={() => setSelectedLocation(result)}
                                className={css.marker}
                                aria-label="push-pin"
                            >📍</p>
                        </Marker>

                        {selectedLocation.long === result.long && (
                            <Popup
                                onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                                latitude={result.lat}
                                longitude={result.long}
                            >
                                <div className={css.card__search}>
                                <div className={css.card_image}>
                                    <img src={result.img} height={80} width={300} className={css.card_image} />
                                </div>

                                <div className={css.card__inner}>
                                    <div className={css.card_location}>
                                        <p>{result.location}</p>
                                        <HeartIcon width={5} height={5} />
                                    </div>
                                    <h4 className={css.card__title}>{result.description}</h4>
                                    <p className={css.card__description}>{result.title}</p>
                                    <div className={css.card__rating}>
                                        <p className={css.card_star}>
                                            <StarIcon width={30} height={30}/>
                                            {result.star}
                                        </p>
                                        <div>
                                            <p className={css.card_price}>
                                                {result.price}
                                            </p>
                                            <p className={css.card_total}>
                                                {result.total}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </Popup>
                        )}
                    </div>
                ))}
            </ReactMapGL>
        </div>
    )
}
export default MapSecond;
