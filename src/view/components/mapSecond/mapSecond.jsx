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
    const [newPlace, setNewPlace] = useState(null)
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

    const [image, setImage] = useState({ preview: "", raw: "" });

    const handleChange = e => {
        if (e.target.files.length) {
            setImage({
                preview: URL.createObjectURL(e.target.files[0]),
                raw: e.target.files[0]
            });
        }
    };

    const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw);

        await fetch("YOUR_URL", {
            method: "POST",
            headers: {
                "Content-Type": "multipart/form-data"
            },
            body: formData
        });
    };



    if (loading) return "Loading...";
    if (error) return "Error!";

    const handleMarkerClick = (id, lat, long) => {
        setSelectedLocation(id);
        setViewport({ ...viewport, latitude: lat, longitude: long });
    };

    const handleAddClick = (e) => {
        const [longitude, latitude] = e.lngLat;
        setNewPlace({
            lat: latitude,
            long: longitude,
        });
    };
    const coordinates = searchResults.map((result) => ({
        longitude: result.long,
        latitude: result.lat,
    }));
    const center = getCenter(coordinates);






    return (
        <div className="map-container">
            <ReactMapGL
                mapStyle="mapbox://styles/ablabekovvv/cks792p3q0atv17pf3yi14rn5"
                mapboxApiAccessToken={accesKey}
                {...viewport}
                onViewportChange={(viewport) => setViewport(viewport)}
                onDblClick={handleAddClick}
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
                            closeOnClick={false}
                                closeButton={true}
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
                            <HeartIcon width={30} height={30} />
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
                        {newPlace && (
                            <>
                            <Marker
                                latitude={newPlace.lat}
                                longitude={newPlace.long}
                            >
                                <p
                                    role="img"
                                    onClick={() => handleMarkerClick(newPlace.lat, newPlace.long)}
                                    className={css.marker}
                                    aria-label="push-pin"
                                >📍</p>
                            </Marker>
                            <Popup
                            onClose={() => setSelectedLocation({})}
                            closeOnClick={true}
                            latitude={newPlace.lat}
                            longitude={newPlace.long}
                        >
                                <div className={css.card__search}>
                                    <div className={css.card_image}>
                                        <label htmlFor="upload-button">
                                            {image.preview ? (
                                                <img src={image.preview} alt="dummy" width="100%" height="100%" className={css.card_image} />
                                            ) : (
                                                <>
            <span className="fa-stack fa-2x mt-3 mb-2">
              <i className="fas fa-circle fa-stack-2x" />
              <i className="fas fa-store fa-stack-1x fa-inverse" />
            </span>
                                                    <h5 className="text-center">Upload your photo</h5>
                                                </>
                                            )}
                                        </label>
                                        <input
                                            type="file"
                                            id="upload-button"
                                            style={{ display: "none" }}
                                            onChange={handleChange}
                                        />
                                        <br />
                                        <button onClick={handleUpload}>Upload</button>
                                    </div>

                                    <div className={css.card__inner}>
                                        <div className={css.card_location}>
                                            <p>{result.location}</p>
                                            <HeartIcon width={30} height={30} />
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
                            </>
                        )}
                    </div>
                ))}
            </ReactMapGL>
        </div>
    )
}
export default MapSecond;
