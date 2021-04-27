import React from 'react';
import Select from 'react-select';


export const EpieceCard = (props) => {
    return <div className="card-wrapper">
        <div className={"component_card " + (props.showAction === "epiece" ? " active_card" : "")} onClick={() => props.onCardClick("epiece")}>
            <span className={props.showAction === "epiece" ? " active_svg" : " inactive-svg"}>
                <svg width="50" height="62" viewBox="0 0 50 62" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M46.6965 48.6H49.6965V45.6H46.6965V48.6ZM46.6965 59V62H49.6965V59H46.6965ZM3.33648 59H0.336484V62H3.33648V59ZM3.33648 3V-3.8147e-06H0.336484V3H3.33648ZM45.6565 3H48.6565V-3.8147e-06H45.6565V3ZM45.6565 13.4V16.4H48.6565V13.4H45.6565ZM16.2165 13.4V10.4H13.2165V13.4H16.2165ZM16.2165 25.56H13.2165V28.56H16.2165V25.56ZM42.2165 25.56H45.2165V22.56H42.2165V25.56ZM42.2165 35.64V38.64H45.2165V35.64H42.2165ZM16.2165 35.64V32.64H13.2165V35.64H16.2165ZM16.2165 48.6H13.2165V51.6H16.2165V48.6ZM43.6965 48.6V59H49.6965V48.6H43.6965ZM46.6965 56H3.33648V62H46.6965V56ZM6.33648 59V3H0.336484V59H6.33648ZM3.33648 6H45.6565V-3.8147e-06H3.33648V6ZM42.6565 3V13.4H48.6565V3H42.6565ZM45.6565 10.4H16.2165V16.4H45.6565V10.4ZM13.2165 13.4V25.56H19.2165V13.4H13.2165ZM16.2165 28.56H42.2165V22.56H16.2165V28.56ZM39.2165 25.56V35.64H45.2165V25.56H39.2165ZM42.2165 32.64H16.2165V38.64H42.2165V32.64ZM13.2165 35.64V48.6H19.2165V35.64H13.2165ZM16.2165 51.6H46.6965V45.6H16.2165V51.6Z" fill="black" />
                </svg>
            </span>
            <span>E-PIECE</span>
        </div>
        {props.showAction === "epiece" &&
            <div className="popover">
                <div className="header-section">
                    <h3>E-PIECE</h3>
                    <span className="close-btn" onClick={() => props.onCardClick("")}>x</span>
                </div>
                <p>The Upiece connector is used to connect between three adjacent tanks</p>
                <div className="tank-selector">
                    <div>
                        <label>From Tank</label>
                        <Select
                            options={props.tankList}
                            className="tank-list"
                            placeholder=""
                            onChange={(e) => props.onChangeOption("fromtank", e)}
                        />
                    </div>
                    <div>
                        <label>MidTank</label>
                        <Select
                            options={props.tankList}
                            className="tank-list"
                            placeholder=""
                            onChange={(e) => props.onChangeOption("midtank", e)}
                        />
                    </div>
                </div>
                <div>
                    <label>To Tank</label>
                    <Select
                        options={props.tankList}
                        className=""
                        placeholder=""
                        onChange={(e) => props.onChangeOption("totank", e)}
                    />
                </div>
                <div className="add-action">
                    <span>View Historic Data</span>
                    <button onClick={(e) => props.connectComponent("epiece")}>ADD</button>
                </div>
            </div>}
    </div>
};

