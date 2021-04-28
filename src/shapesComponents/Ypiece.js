import React from 'react';
import Select from 'react-select';

export const YpieceCard = (props) => {
    return <div className="card-wrapper">
        <div className={"component_card " + (props.showAction === "ypiece" ? " active_card" : "")} onClick={() => props.onCardClick("ypiece")}>
            <span className={props.showAction === "ypiece" ? " active_svg" : " inactive-svg"}>
                <svg width="97" height="85" viewBox="0 0 97 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <mask id="path-1-inside-1" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M48.5358 55.4271C44.1027 72.3636 31.323 84.602 16.249 84.602H0V2.57492e-05L16.249 0C32.5919 0 46.2379 14.3855 49.4742 33.5472H96.0382V55.4271H48.5358ZM10.9139 64.1812C22.9687 64.1812 32.741 54.3852 32.741 42.3013C32.741 30.2174 22.9687 20.4215 10.9139 20.4215H0.000442505V64.1812H10.9139Z" />
                    </mask>
                    <path d="M48.5358 55.4271V52.4271H46.2199L45.6335 54.6674L48.5358 55.4271ZM0 84.602H-3V87.602H0V84.602ZM0 2.57492e-05L-4.754e-06 -2.99997L-3 -2.99997V2.57492e-05H0ZM16.249 0V-3H16.249L16.249 0ZM49.4742 33.5472L46.5161 34.0468L46.9384 36.5472H49.4742V33.5472ZM96.0382 33.5472H99.0382V30.5472H96.0382V33.5472ZM96.0382 55.4271V58.4271H99.0382V55.4271H96.0382ZM0.000442505 20.4215V17.4215H-2.99956V20.4215H0.000442505ZM0.000442505 64.1812H-2.99956V67.1812H0.000442505V64.1812ZM45.6335 54.6674C41.4302 70.7263 29.5498 81.602 16.249 81.602V87.602C33.0962 87.602 46.7752 74.0009 51.438 56.1867L45.6335 54.6674ZM16.249 81.602H0V87.602H16.249V81.602ZM3 84.602V2.57492e-05H-3V84.602H3ZM4.754e-06 3.00003L16.249 3L16.249 -3L-4.754e-06 -2.99997L4.754e-06 3.00003ZM16.249 3C30.6596 3 43.4364 15.8121 46.5161 34.0468L52.4323 33.0476C49.0394 12.9588 34.5241 -3 16.249 -3V3ZM49.4742 36.5472H96.0382V30.5472H49.4742V36.5472ZM93.0382 33.5472V55.4271H99.0382V33.5472H93.0382ZM96.0382 52.4271H48.5358V58.4271H96.0382V52.4271ZM29.741 42.3013C29.741 52.7352 21.305 61.1812 10.9139 61.1812V67.1812C24.6324 67.1812 35.741 56.0352 35.741 42.3013H29.741ZM10.9139 23.4215C21.305 23.4215 29.741 31.8675 29.741 42.3013H35.741C35.741 28.5674 24.6324 17.4215 10.9139 17.4215V23.4215ZM0.000442505 23.4215H10.9139V17.4215H0.000442505V23.4215ZM3.00044 64.1812V20.4215H-2.99956V64.1812H3.00044ZM10.9139 61.1812H0.000442505V67.1812H10.9139V61.1812Z" fill="black" mask="url(#path-1-inside-1)" />
                </svg>
            </span>
            <span>Y-PIECE</span>
        </div>
        {props.showAction === "ypiece" &&
            <div className="popover">
                <div className="header-section">
                    <h3>Y-Piece</h3>
                    <span className="close-btn" onClick={() => props.onCardClick("")}>x</span>
                </div>
                <p>The Upiece connector is used to connect between any tanks</p>
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
                    <button onClick={() => props.connectComponent('ypiece')}>ADD</button>
                </div>
            </div>}
    </div>
};

