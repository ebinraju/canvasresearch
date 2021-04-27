import React, { useState, useEffect, useRef } from 'react';


// Scaling Constants for Canvas
export const canvasWidth = window.innerWidth * .9;
export const canvasHeight = window.innerHeight * 1.3;
const COMPONENTDISPLACEMENT = {
  ElbowXAxis: 50,
  ElbowYAxis: -20,
}
let tankData = [
  { x: 270, y: 10, color: "#D27D00", text: "PORT COMMON LINE", type: "supplyTank", id: "port" },
  { x: 270, y: 70, color: "#78b1ff", text: "1s", type: 'tank', id: "1s" },
  { x: 270, y: 120, color: "#78b1ff", text: "1p", type: 'tank', id: "1p" },
  { x: 270, y: 170, color: "#219653", text: "2s", type: 'tank', id: "2s" },
  { x: 270, y: 220, color: "#219653", text: "MIDDLE COMMON LINE", type: "supplyTank", id: "middle" },
  { x: 270, y: 290, color: "#D27D00", text: "2p", type: 'tank', id: "2p" },
  { x: 270, y: 340, color: "#D27D00", text: "3s", type: 'tank', id: "3s" },
  { x: 270, y: 390, color: "#D27D00", text: "3p", type: 'tank', id: "3p" },
  { x: 270, y: 440, color: "#78b1ff", text: "4s", type: 'tank', id: "4s" },
  { x: 270, y: 490, color: "#78b1ff", text: "4p", type: 'tank', id: "4p" },
  { x: 270, y: 540, color: "#78b1ff", text: "5s", type: 'tank', id: "5s" },
  { x: 270, y: 590, color: "#6CD9A5", text: "STARBOARD COMMON LINE", type: "supplyTank", id: "starboard" },
];
let supplyLineData = [
  { x: 320, y: 30, color: "#D27D00", text: "Port COMMON LINE", id: "port" },
  { x: 660, y: 50, color: "#219653", text: "Middle COMMON LINE", id: "middle" },
  { x: 945, y: 50, color: "#6CD9A5", text: "Starboard COMMON LINE", id: "starboard" },
]
// let componentsData = ;

export function drawTank(ctx, location) {
  ctx.fillStyle = location.color;
  ctx.fillRect(location.x + 40, location.y, 675, 15);
  ctx.strokeRect(location.x, location.y, 780, 15);
  ctx.fillStyle = '#219653';
  ctx.fillText(location.text, location.x - 20, location.y + 10);
  ctx.fillText(location.text, location.x + 790, location.y + 10);
  // .restore(): Canvas 2D API restores the most recently saved canvas state
  ctx.restore();
};
export function drawSupplyTank(ctx, location) {
  ctx.fillStyle = location.color;
  ctx.font = '14px serif';
  ctx.fillRect(location.x, location.y, 780, 30);
  ctx.fillStyle = 'white';
  ctx.fillText(location.text, location.x + 320, location.y + 20);
  ctx.restore();
};
export function verticalDraw(ctx, location) {
  ctx.fillStyle = location.color;
  ctx.fillRect(location.x, location.y, 16, 540);
  ctx.fillStyle = 'white';
  ctx.restore();
};


export const Canvas = (props) => {
  console.log("aaaa",props);
  const canvasRef = useRef(null);
  const [componentsData, setComponentsData] = useState([]);

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext('2d');
    // clear the canvas area before rendering the coordinates held in state
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // draw all coordinates held in state
    tankData.forEach((coordinate) => {
      if (coordinate.type === "tank") {
        drawTank(ctx, coordinate);
      }
    });
    supplyLineData.forEach((coordinate) => { verticalDraw(ctx, coordinate) });
    tankData.forEach((coordinate) => {
      if (coordinate.type !== "tank") {
        drawSupplyTank(ctx, coordinate);
      }
    });
    componentsData.forEach((coordinate) => {
      if (coordinate.shape === "Elbow") {
        RenderElbowComponent(ctx, coordinate)
      } else if (coordinate.shape === "Upiece") {
        drawUComponent(ctx, coordinate)
      } else if (coordinate.shape === "Ypiece") {
        drawYComponent(ctx, coordinate)
      } else if (coordinate.shape === "Epiece") {
        drawEComponent(ctx, coordinate)
      } else if (coordinate.shape === "jumber") {
        drawJComponent(ctx, coordinate)
      }
    });
  });
  return [componentsData, setComponentsData, canvasRef, canvasWidth, canvasHeight];
}

const RenderElbowComponent = (ctx, location) => {
  ctx.beginPath();
  ctx.lineWidth = 9;
  ctx.strokeStyle = location.color;
  ctx.moveTo(location.chanelAxis, location.yAxis + COMPONENTDISPLACEMENT.ElbowYAxis);
  ctx.bezierCurveTo(location.chanelAxis + 38, location.yAxis - 15, location.chanelAxis + 38, location.yAxis - 15, location.chanelAxis + + COMPONENTDISPLACEMENT.ElbowXAxis, location.yAxis + 7);
  ctx.stroke();
}


const drawUComponent = (ctx, location) => {
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = location.color;
  ctx.moveTo(location.startXAxis + 30, location.startYAxis + 6);
  ctx.bezierCurveTo(location.startXAxis - 10, location.startYAxis + 6, location.startXAxis - 10, location.endYAxis + 8, location.startXAxis + 30, location.endYAxis + 8);
  ctx.stroke();
}

const drawYComponent = (ctx, location) => {
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = location.color;
  ctx.moveTo(location.startXAxis + 30, location.startYAxis + 6);
  ctx.bezierCurveTo(location.startXAxis - 10, location.startYAxis + 6, location.startXAxis - 10, location.endYAxis + 8, location.startXAxis + 30, location.endYAxis + 8);
  ctx.fillStyle = location.color;
  ctx.fillRect(location.startXAxis - 40, (location.startYAxis + location.endYAxis) / 2, 45, 10);
  ctx.stroke();
}

const drawEComponent = (ctx, location) => {
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.fillStyle = location.color;
  ctx.fillRect(location.startXAxis - 10, location.tank1, 40, 12);
  ctx.fillRect(location.startXAxis - 10, location.tank2, 40, 12);
  ctx.fillRect(location.startXAxis - 10, location.tank3, 40, 12);
  ctx.fillRect(location.startXAxis - 10, location.tank1, 12, 100);
  ctx.stroke();
}

const drawJComponent = (ctx, location) => {
  let startXAxis = 290; let startYAxis = 100; let endYAxis = 350;
  ctx.beginPath();
  ctx.lineWidth = 10;

  // ctx.moveTo(270, 97);
  // ctx.bezierCurveTo(236, 97, 215, 94, 213, 109);
  // ctx.bezierCurveTo(210, 130, 226, 133, 229, 149);
  // ctx.bezierCurveTo(233, 169, 219, 165, 214, 190);
  // ctx.bezierCurveTo(211, 205, 235, 204, 270, 203);
  // ctx.stroke();
  ctx.moveTo(location.startXAxis, location.startYAxis);
  ctx.bezierCurveTo(location.startXAxis - 40, location.startYAxis, location.startXAxis - 33, location.startYAxis, location.startXAxis - 40, location.startYAxis + 13);
  ctx.bezierCurveTo(location.startXAxis - 30, ((location.startYAxis + location.endYAxis) / 2) - 13, location.startXAxis - 35, ((location.startYAxis + location.endYAxis) / 2) - 23, location.startXAxis - 10, (location.startYAxis + location.endYAxis) / 2);
  ctx.bezierCurveTo(location.startXAxis - 13, ((location.startYAxis + location.endYAxis) / 2) + 13, location.startXAxis - 35, ((location.startYAxis + location.endYAxis) / 2) + 13, location.startXAxis - 40, location.endYAxis - 13);
  ctx.bezierCurveTo(location.startXAxis - 40, location.endYAxis, location.startXAxis - 33, location.endYAxis, location.startXAxis, location.endYAxis);
  ctx.stroke();
}

