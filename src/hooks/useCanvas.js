import { useState, useEffect, useRef } from 'react';

// Scaling Constants for Canvas
export const canvasWidth = window.innerWidth * .8;
export const canvasHeight = window.innerHeight * 1.3;
const COMPONENTDISPLACEMENT = {
  ElbowXAxis: 50,
  ElbowYAxis: -20,
}
// const SHIFT_VALUE = 780;
export function useCanvas() {
  const canvasRef = useRef(null);
  const [componentsData, setComponentsData] = useState([]);
  const [supplyLineData, setSupplyLineData] = useState([]);
  const [tankData, setTankData] = useState([]);
  const [shiftValue, setShiftValue] = useState(0);

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
        RenderElbowComponent(ctx, coordinate, shiftValue)
      } else if (coordinate.shape === "Upiece") {
        drawUComponent(ctx, coordinate, shiftValue)
      } else if (coordinate.shape === "Ypiece") {
        drawYComponent(ctx, coordinate, shiftValue)
      } else if (coordinate.shape === "Epiece") {
        drawEComponent(ctx, coordinate, shiftValue)
      } else if (coordinate.shape === "jumber") {
        drawJComponent(ctx, coordinate, shiftValue)
      }
    });
    window.addEventListener("keydown", downHandler);
  });
  const downHandler = ({ key }) => {
    if (key === "ArrowRight") {
      setShiftValue(780);
    } else if (key === "ArrowLeft") {
      setShiftValue(0);
    }
  }
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

const drawUComponent = (ctx, location, shiftValue) => {
  let shapeDisp = shiftValue === 0 ? 1 : -1;
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = location.color;
  ctx.moveTo(location.startXAxis + shiftValue, location.startYAxis + 6);
  ctx.bezierCurveTo(location.startXAxis + shiftValue - (40 * shapeDisp), location.startYAxis + 6, location.startXAxis + shiftValue - (40 * shapeDisp), location.endYAxis + 8, location.startXAxis + shiftValue, location.endYAxis + 8);
  ctx.stroke();
}

const drawYComponent = (ctx, location, shiftValue) => {
  let shapeDisp = shiftValue === 0 ? 1 : -1;
  let RectShapeDisp = shiftValue === 0 ? 75 : -30;
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = location.color;
  ctx.moveTo(location.startXAxis + shiftValue, location.startYAxis + 6);
  ctx.bezierCurveTo(location.startXAxis + shiftValue - (40 * shapeDisp), location.startYAxis + 6, location.startXAxis + shiftValue - (40 * shapeDisp), location.endYAxis + 8, location.startXAxis + shiftValue, location.endYAxis + 8);
  ctx.fillStyle = location.color;
  ctx.fillRect(location.startXAxis + shiftValue - RectShapeDisp, (location.startYAxis + location.endYAxis) / 2, 45, 10);
  ctx.stroke();
}

const drawEComponent = (ctx, location, shiftValue) => {
  let shapeDisp = shiftValue === 0 ? 40 : 0;
  let vShapeDisp = shiftValue === 0 ? 40 : -28;
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.fillStyle = location.color;
  ctx.fillRect(location.startXAxis + shiftValue -  shapeDisp, location.tank1, 40, 12);
  ctx.fillRect(location.startXAxis + shiftValue - shapeDisp, location.tank2, 40, 12);
  ctx.fillRect(location.startXAxis + shiftValue - shapeDisp, location.tank3, 40, 12);
  ctx.fillRect(location.startXAxis + shiftValue - vShapeDisp, location.tank1, 12, location.tank3 - location.tank1);
  ctx.stroke();
}

const drawJComponent = (ctx, location, shiftValue) => {
  let startXAxis = location.startXAxis + shiftValue; let startYAxis = location.startYAxis + 8; let endYAxis = location.endYAxis + 8;
  // let startXAxis = 270; let startYAxis = 10; let endYAxis = 300;
  let difference = (endYAxis - startYAxis) / 5;
  let differenceAvg = ((endYAxis - startYAxis) / 5) / 2;
  let shapeDisp = shiftValue === 0 ? 1 : - 1;
  ctx.beginPath();
  ctx.lineWidth = 10;
  ctx.strokeStyle = location.color;
  ctx.moveTo(startXAxis, startYAxis);
  ctx.bezierCurveTo(startXAxis - (40 * shapeDisp), startYAxis + (difference * 1) - difference, startXAxis - (55 * shapeDisp), startYAxis + (difference * 1) - differenceAvg, startXAxis - (55 * shapeDisp), startYAxis + (difference * 1));
  ctx.bezierCurveTo(startXAxis - (55 * shapeDisp), (startYAxis + (difference * 2)) - (differenceAvg), startXAxis - (40 * shapeDisp), (startYAxis + (difference * 2)) - (differenceAvg / 2), startXAxis - (28 * shapeDisp), startYAxis + (difference * 2));
  ctx.bezierCurveTo(startXAxis - (20 * shapeDisp), (startYAxis + (difference * 3)) - (differenceAvg + (differenceAvg / 2)), startXAxis - (20 * shapeDisp), (startYAxis + (difference * 3)) - (differenceAvg), startXAxis - (28 * shapeDisp), startYAxis + (difference * 3));
  ctx.bezierCurveTo(startXAxis - (40 * shapeDisp), (startYAxis + (difference * 4)) - (differenceAvg), startXAxis - (55 * shapeDisp), (startYAxis + (difference * 4)) - (differenceAvg / 2), startXAxis - (55 * shapeDisp), startYAxis + (difference * 4));
  ctx.bezierCurveTo(startXAxis - (55 * shapeDisp), endYAxis, startXAxis, endYAxis, startXAxis, startYAxis + (difference * 5));
  ctx.stroke();
  // ctx.restore()
}

export const drawTank = (ctx, location) => {
  ctx.lineWidth = 1;
  ctx.fillStyle = location.color;
  ctx.fillRect(location.x + 40, location.y, 675, 15);
  ctx.strokeRect(location.x, location.y, 780, 15);
  ctx.fillStyle = '#219653';
  ctx.fillText(location.text, location.x - 70, location.y + 10);
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
