import React from 'react';
import Select from 'react-select';


export const JumberCard = (props) => {
    return <div className="card-wrapper">
        <div className={"component_card " + (props.showAction === "jumber" ? " active_card" : "")} onClick={() => props.onCardClick("jumber")}>
            <span className={props.showAction === "jumber" ? " active_svg" : " inactive-svg"}>
                <svg width="111" height="77" viewBox="0 0 111 77" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M64.7733 28.8977C61.1336 31.8983 56.2981 33.9576 50.4437 32.1353C43.6552 30.0222 40.7172 24.215 38.8478 20.5198L38.8476 20.5195L38.846 20.5163C38.7394 20.3056 38.6363 20.1019 38.5362 19.9061C36.3297 15.5914 35.1823 14.0643 32.8914 13.6206C30.2034 13.1 27.4054 14.295 24.2554 19.1914C21.1285 24.0518 18.6367 31.2421 16.7375 39.0634C14.8625 46.7853 13.6638 54.6939 12.9341 60.7089C12.9042 60.9549 12.8752 61.1976 12.8469 61.4368H14.0754V73.8217H0.347656V61.4368H2.78034C2.85041 60.8176 2.92583 60.1727 3.00688 59.5046C3.7629 53.2728 5.01898 44.9441 7.01987 36.7038C8.99661 28.563 11.8018 20.0665 15.8454 13.781C19.8658 7.53162 26.1115 2.12172 34.7928 3.80306C42.284 5.25391 45.3732 11.3054 47.3115 15.1023L47.4395 15.3529C49.7198 19.812 50.916 21.809 53.4157 22.5871C55.0566 23.0979 56.4559 22.7945 58.4123 21.1817C60.5765 19.3974 62.6105 16.6513 65.1378 13.239L65.3227 12.9893C67.676 9.81264 70.6198 5.84171 74.1886 3.36566C76.0794 2.05378 78.3459 1.00636 80.9883 0.759807C83.6665 0.50991 86.3197 1.12156 88.8877 2.47652C95.7103 6.0763 100.011 12.7094 102.77 19.7212C105.552 26.7905 107.019 34.8739 107.779 42.3328C108.543 49.831 108.615 56.9286 108.5 62.1328C108.484 62.8547 108.464 63.5414 108.442 64.189H110.169V76.5738H96.4417V64.189H98.4358C98.4613 63.4819 98.484 62.7205 98.502 61.9112C98.6115 56.9714 98.5399 50.3097 97.8303 43.3467C97.1167 36.3445 95.7793 29.2649 93.4648 23.3827C91.1276 17.443 88.0406 13.3361 84.2211 11.3209C83.1071 10.7331 82.385 10.6729 81.9173 10.7166C81.4138 10.7635 80.7636 10.975 79.8891 11.5818C77.9272 12.943 75.9461 15.4483 73.3581 18.9419C73.1991 19.1565 73.0375 19.3752 72.8734 19.5974C70.6349 22.6285 67.9219 26.302 64.7733 28.8977Z" fill="black" />
                    <rect x="98.1992" y="66" width="10" height="9" fill="white" />
                    <path d="M6.96875 70.3582C6.96875 70.3582 11.103 4.30779 33.8417 8.71168C43.7909 10.6386 42.2519 24.3487 51.9292 27.361C66.9199 32.0272 71.8255 -0.872582 86.554 6.89855C107.838 18.1286 103.091 70.3582 103.091 70.3582" stroke="white" stroke-width="5" />
                    <rect x="2.19922" y="63" width="10" height="9" fill="#FDFDFF" />
                </svg>
            </span>
            <span>JUMBER</span>
        </div>
        {props.showAction === "jumber" &&
            <div className="popover">
                <div className="header-section">
                    <h3>JUMBER</h3>
                    <span className="close-btn" onClick={() => props.onCardClick("")}>x</span>
                </div>
                <p>The Jumber connector is used to connect between any tanks</p>
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
                    <button onClick={() => props.connectComponent("jumber")}>ADD</button>
                </div>
            </div>}
    </div>
};

