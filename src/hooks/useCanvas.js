import { useState, useEffect, useRef } from 'react';

// Scaling Constants for Canvas
export const canvasWidth = window.innerWidth * .9;
export const canvasHeight = window.innerHeight * 1.3;
const COMPONENTDISPLACEMENT = {
  ElbowXAxis: 50,
  ElbowYAxis: -20,
}

export function useCanvas() {
  const canvasRef = useRef(null);
  const [componentsData, setComponentsData] = useState([]);
  const [supplyLineData, setSupplyLineData] = useState([]);
  const [tankData, setTankData] = useState([]);

  useEffect(() => {
    const canvasObj = canvasRef.current;
    const ctx = canvasObj.getContext('2d');
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    tankData.forEach((coordinate) => {
      if (coordinate.type === "tank") { drawTank(ctx, coordinate); }
    });
    supplyLineData.forEach((coordinate) => { verticalDraw(ctx, coordinate) });
    tankData.forEach((coordinate) => {
      if (coordinate.type !== "tank") { drawSupplyTank(ctx, coordinate) }
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
  return [componentsData, setComponentsData, canvasRef, canvasWidth, canvasHeight, supplyLineData, setSupplyLineData, tankData, setTankData];
}

const RenderElbowComponent = (ctx, location) => {
  ctx.beginPath();
  ctx.lineWidth = 9;
  ctx.strokeStyle = location.color;
  if (location.line === "starboard") {
    ctx.moveTo(location.chanelAxis + 10, location.yAxis - 15);
    ctx.bezierCurveTo(location.chanelAxis + 0, location.yAxis - 20, location.chanelAxis - 35, location.yAxis - 15, location.chanelAxis - 30, location.yAxis + 6);
  } else {
    ctx.moveTo(location.chanelAxis, location.yAxis + COMPONENTDISPLACEMENT.ElbowYAxis);
    ctx.bezierCurveTo(location.chanelAxis + 38, location.yAxis - 15, location.chanelAxis + 38, location.yAxis - 15, location.chanelAxis + COMPONENTDISPLACEMENT.ElbowXAxis, location.yAxis + 7);
  }
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
  let startXAxis = location.startXAxis + 15; let startYAxis = location.startYAxis + 8; let endYAxis = location.endYAxis + 8;
  // let startXAxis = 270; let startYAxis = 70; let endYAxis = 290;
  //360 270 180 90 45
  //210 105+70=175   70+70=140   52.5+70=122.5
  //half at 105+70=175 
  //105 52,5+170
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = location.color;

  // ctx.moveTo(startXAxis + 15, startYAxis);
  // ctx.bezierCurveTo(252, 70, 252, 122.5, 252, 130);
  // ctx.bezierCurveTo(252, 140, 270, 175, 270, 190);
  // ctx.bezierCurveTo(270, 200, 252, 222.5, 252, 250);
  // ctx.bezierCurveTo(252, 265, 252, endYAxis, startXAxis + 15, endYAxis);
  ctx.moveTo(startXAxis, startYAxis);
  ctx.bezierCurveTo(startXAxis - 40, startYAxis, startXAxis - 33, startYAxis, startXAxis - 40, startYAxis + 13);
  ctx.bezierCurveTo(startXAxis - 30, ((startYAxis + endYAxis) / 2) - 13, startXAxis - 40, ((startYAxis + endYAxis) / 2) - 23, startXAxis - 15, (startYAxis + endYAxis) / 2);
  ctx.bezierCurveTo(startXAxis - 18, ((startYAxis + endYAxis) / 2) + 13, startXAxis - 35, ((startYAxis + endYAxis) / 2) + 13, startXAxis - 40, endYAxis - 13);
  ctx.bezierCurveTo(startXAxis - 40, endYAxis, startXAxis - 33, endYAxis, startXAxis, endYAxis);
  ctx.stroke();
}

export const drawTank = (ctx, location) => {
  ctx.lineWidth = 1;
  ctx.fillStyle = location.color;
  ctx.fillRect(location.x + 40, location.y, 675, 15);
  ctx.strokeRect(location.x, location.y, 780, 15);
  ctx.fillStyle = '#219653';
  ctx.fillText(location.text, location.x - 40, location.y + 10);
  ctx.fillText(location.text, location.x + 790, location.y + 10);
  ctx.restore();
};

export const drawSupplyTank = (ctx, location) => {
  ctx.fillStyle = location.color;
  ctx.font = '14px serif';
  ctx.fillRect(location.x, location.y, 780, 30);
  ctx.fillStyle = 'white';
  ctx.fillText(location.text, location.x + 320, location.y + 20);
  ctx.restore();
};

export const verticalDraw = (ctx, location) => {
  ctx.fillStyle = location.color;
  ctx.fillRect(location.x, location.y, 16, 540);
  ctx.fillStyle = 'white';
  ctx.restore();
};
