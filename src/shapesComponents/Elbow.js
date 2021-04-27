import React from 'react';
import Select from 'react-select';


export const ElbowCard = (props) => {
    return <div className="card-wrapper">
        <div className={"component_card " + (props.showAction === "elbow" ? " active_card" : "")} onClick={() => props.onCardClick("elbow")}>
            <span className={props.showAction === "elbow" ? " active_svg" : " inactive-svg"}>
                <svg width="64" height="56" viewBox="0 0 64 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M62.5 53.5286C29.0547 52.8546 2.4333 29.7623 1.52407 1.5H22.9064C23.3921 7.4378 25.8553 15.6178 31.8628 22.4572C37.9963 29.4401 47.731 34.916 62.5 35.2632V53.5286Z" stroke-width="3" />
                </svg>
            </span>
            <span>ELBOW</span>
        </div>
        {props.showAction === "elbow" &&
            <div className="popover">
                <div className="header-section">
                    <h3>Elbow</h3>
                    <span className="close-btn" onClick={() => props.onCardClick("")}>x</span>
                </div>
                <p>The Elbow connector is used for only adjacent tanks</p>
                <label>Choose any one</label>
                <Select
                    // options={props.commonLineOptions}
                    onChange={(e) => props.onChangeOption("line", e)}
                    width="200"
                    placeholder="Connect a specific tank to a common line"
                />
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
                        <label>To Common Line</label>
                        <Select
                            options={props.commonLineOptions}
                            className="tank-list"
                            placeholder=""
                            onChange={(e) => props.onChangeOption("line", e)}
                        />
                    </div>
                </div>
                <div className="add-action">
                    <span>View Historic Data</span>
                    <button onClick={() => props.connectComponent("elbow")}>ADD</button>
                </div>
            </div>}
    </div>
};

