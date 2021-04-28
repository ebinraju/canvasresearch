import React from 'react';
import Select from 'react-select';


export const UpieceCard = (props) => {
    return <div className="card-wrapper">
        <div className={"component_card " + (props.showAction === "upiece" ? " active_card" : "")} onClick={() => props.onCardClick("upiece")}>
            <span className={props.showAction === "upiece" ? " active_svg" : " inactive-svg"}>
                <svg width="51" height="86" viewBox="0 0 51 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M50.4596 42.518C50.4596 66 35.1803 85.0359 16.3323 85.0359H0V64.5103H10.9695C23.086 64.5103 32.9084 54.6642 32.9084 42.5183C32.9084 30.3724 23.086 20.5262 10.9695 20.5262H0V2.57492e-05L16.3323 0C35.1803 0 50.4596 19.0359 50.4596 42.518Z" />
                    </mask>
                    <path d="M0 85.0359H-3V88.0359H0V85.0359ZM0 64.5103V61.5103H-3V64.5103H0ZM0 20.5262H-3V23.5262H0V20.5262ZM0 2.57492e-05L-4.72974e-06 -2.99997L-3 -2.99997V2.57492e-05H0ZM16.3323 0V-3H16.3323L16.3323 0ZM16.3323 88.0359C37.4192 88.0359 53.4596 67.0076 53.4596 42.518H47.4596C47.4596 64.9923 32.9414 82.0359 16.3323 82.0359V88.0359ZM0 88.0359H16.3323V82.0359H0V88.0359ZM-3 64.5103V85.0359H3V64.5103H-3ZM0 67.5103H10.9695V61.5103H0V67.5103ZM10.9695 67.5103C24.7497 67.5103 35.9084 56.3142 35.9084 42.5183H29.9084C29.9084 53.0141 21.4223 61.5103 10.9695 61.5103V67.5103ZM35.9084 42.5183C35.9084 28.7224 24.7497 17.5262 10.9695 17.5262V23.5262C21.4223 23.5262 29.9084 32.0224 29.9084 42.5183H35.9084ZM10.9695 17.5262H0V23.5262H10.9695V17.5262ZM-3 2.57492e-05V20.5262H3V2.57492e-05H-3ZM16.3323 -3L-4.72974e-06 -2.99997L4.72974e-06 3.00003L16.3323 3L16.3323 -3ZM53.4596 42.518C53.4596 18.0283 37.4192 -3 16.3323 -3V3C32.9414 3 47.4596 20.0436 47.4596 42.518H53.4596Z" stroke-width="3" mask="url(#path-1-inside-1)" />
                </svg>
            </span>
            <span>U-PIECE</span>
        </div>
        {props.showAction === "upiece" &&
            <div className="popover">
                <div className="header-section">
                    <h3>U-Piece</h3>
                    <span className="close-btn" onClick={() => props.onCardClick("")}>x</span>
                </div>
                <p>The Upiece connector is used to connect between adjacent tanks</p>
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
                        <label>To Tank</label>
                        <Select
                            options={props.tankList}
                            className="tank-list"
                            placeholder=""
                            onChange={(e) => props.onChangeOption("totank", e)}
                        />
                    </div>
                </div>
                <div className="add-action">
                    <span>View Historic Data</span>
                    <button onClick={() => props.connectComponent('upiece')}>ADD</button>
                </div>
            </div>}
    </div>
};

