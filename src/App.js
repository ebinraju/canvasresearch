import React, { useState, useEffect } from 'react';
import { ElbowCard } from './shapesComponents/Elbow';
import { JumberCard } from './shapesComponents/Jumber';
import { UpieceCard } from './shapesComponents/Upiece';
import { YpieceCard } from './shapesComponents/Ypiece';
import { EpieceCard } from './shapesComponents/Epiece';
import { useCanvas } from './hooks/useCanvas';
import mockData from '../src/sampleData/mockData';
import './App.css';

function App() {

  const [componentsData, setComponentsData, canvasRef, canvasWidth, canvasHeight, supplyLineData, setSupplyLineData, tankData, setTankData] = useCanvas();
  const [activeCard, setActiveCard] = useState("");
  const [supplyLine, setSupplyLine] = useState("");
  const [fromTank, setFromTank] = useState("");
  const [toTank, setToTank] = useState("");
  const [midTank, setMidTank] = useState("");

  const onCardClick = (card) => {
    setActiveCard(card);
  }
  const connectComponent = (shape) => {
    var tank1 = tankData.find(x => x.id === fromTank.value);
    var midtank = tankData.find(x => x.id === midTank.value);
    var tank2 = tankData.find(x => x.id === toTank.value);
    var line = supplyLineData.find(x => x.id === supplyLine.value);
    let dataIs;
    if (shape === 'elbow') {
      var commonLineIndex = supplyLineData.findIndex(x => x.id === line.id);
      var horizontalTankIndex = tankData.findIndex(x => x.id === line.id);
      dataIs = { shape: "Elbow", type: "Elbow", id: "Elbow1", yAxis: tank1.y, chanelAxis: line.x, color: tank1.color, line: line.id };
      let tankDataCopy = tankData;
      let verticalLine = supplyLineData;
      tankDataCopy[horizontalTankIndex].color = tank1.color;
      verticalLine[commonLineIndex].color = tank1.color;
      setTankData([...tankData]);
      setSupplyLineData([...verticalLine]);
    } else if (shape === 'jumber') {
      dataIs = { shape: "jumber", type: "Jpiece", startXAxis: tank1.x, startYAxis: tank1.y, endYAxis: tank2.y, color: "#78b1ff" }
    } else if (shape === 'upiece') {
      dataIs = { shape: "Upiece", type: "Upiece", startXAxis: tank1.x, startYAxis: tank1.y, endXAxis: tank2.x, endYAxis: tank2.y, color: "#D27D00" }
    } else if (shape === 'ypiece') {
      dataIs = { shape: "Ypiece", type: "Ypiece", startXAxis: tank1.x, startYAxis: tank1.y, endXAxis: tank2.x, endYAxis: tank2.y, color: "#78b1ff" }
    } else if (shape === 'epiece') {
      dataIs = { shape: "Epiece", type: "Epiece", startXAxis: tank1.x, tank1: tank1.y, tank2: midtank.y, tank3: tank2.y, color: "#78b1ff" }
    }
    setComponentsData([...componentsData, dataIs]);
    setActiveCard("");
  }
  const onChangeOption = (type, event) => {
    if (type === "line") {
      setSupplyLine(event);
    } else if (type === "fromtank") {
      setFromTank(event);
    } else if (type === "totank") {
      setToTank(event);
    } else if (type === "midtank") {
      setMidTank(event);
    }
  }
  useEffect(() => {
    // setComponentsData([]);
    setSupplyLineData([
      { x: 320, y: 30, color: "#DCDCDC	", text: "Port COMMON LINE", id: "port" },
      { x: 660, y: 50, color: "#DCDCDC	", text: "Middle COMMON LINE", id: "middle" },
      { x: 935, y: 50, color: "#DCDCDC	", text: "Starboard COMMON LINE", id: "starboard" },
    ]);
    setTankData([
      { x: 250, y: 10, color: "#DCDCDC	", text: "PORT COMMON LINE", type: "supplyTank", id: "port" },
      { x: 250, y: 70, color: "#2F80ED", text: "1s", type: 'tank', id: "1s" },
      { x: 250, y: 120, color: "#6CD9A5", text: "1p", type: 'tank', id: "1p" },
      { x: 250, y: 170, color: "#219653", text: "2s", type: 'tank', id: "2s" },
      { x: 250, y: 220, color: "#DCDCDC	", text: "MIDDLE COMMON LINE", type: "supplyTank", id: "middle" },
      { x: 250, y: 290, color: "#D27D00", text: "2p", type: 'tank', id: "2p" },
      { x: 250, y: 340, color: "#D27D00", text: "3s", type: 'tank', id: "3s" },
      { x: 250, y: 390, color: "#D27D00", text: "3p", type: 'tank', id: "3p" },
      { x: 250, y: 440, color: "#2F80ED", text: "4s", type: 'tank', id: "4s" },
      { x: 250, y: 490, color: "#2F80ED", text: "4p", type: 'tank', id: "4p" },
      { x: 250, y: 540, color: "#2F80ED", text: "5s", type: 'tank', id: "5s" },
      { x: 250, y: 590, color: "#DCDCDC	", text: "STARBOARD COMMON LINE", type: "supplyTank", id: "starboard" },
    ]);
  }, []);
  const download = () => {
    var canvas = document.getElementById('canvasid');
    var image = canvas.toDataURL();
    var a = document.createElement('a');
    a.href = image;
    a.download = "manifold.jpeg";
    document.body.appendChild(a);
    a.click();
  }
  return (<div>
    <main className="App-main" >
      <div>
        <ElbowCard
          connectComponent={connectComponent}
          showAction={activeCard}
          onCardClick={onCardClick}
          onChangeOption={onChangeOption}
          commonLineOptions={mockData.commonLine}
          tankList={mockData.tankList}

        />
        <JumberCard
          connectComponent={connectComponent}
          showAction={activeCard}
          onCardClick={onCardClick}
          onChangeOption={onChangeOption}
          commonLineOptions={mockData.commonLine}
          tankList={mockData.tankList}

        />
        <UpieceCard
          connectComponent={connectComponent}
          showAction={activeCard}
          onCardClick={onCardClick}
          onChangeOption={onChangeOption}
          commonLineOptions={mockData.commonLine}
          tankList={mockData.tankList}

        />
        <YpieceCard
          connectComponent={connectComponent}
          showAction={activeCard}
          onCardClick={onCardClick}
          onChangeOption={onChangeOption}
          commonLineOptions={mockData.commonLine}
          tankList={mockData.tankList}

        />
        <EpieceCard
          connectComponent={connectComponent}
          showAction={activeCard}
          onCardClick={onCardClick}
          onChangeOption={onChangeOption}
          commonLineOptions={mockData.commonLine}
          tankList={mockData.tankList}
        />
        <button onClick={() => { download() }}>Download</button>
      </div>
      <canvas
        className="App-canvas"
        id="canvasid"
        ref={canvasRef}
        width={canvasWidth}
        height={canvasHeight} />
    </main>
  </div>
  );

};

export default App;