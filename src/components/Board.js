import React from "react";
import { scaleLinear } from "d3-scale";
import Circle from "./Circle.js"
import { useSelector, useDispatch } from 'react-redux';
import {
  selectLine,
  selectConnectionType,
  selectMeterType,
  selectNode,
  jumperToggle,
  openOscilloscope,
  closeOscilloscope,
  captureScreen,
  powerToggle,
  switchToggle
} from '../actions';
import SelectOption from "../components/SelectOption";

import board from "../images/board9.png"
import studentPdf from "../pdfs/student.pdf";
import faqPdf from "../pdfs/faq.pdf";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ScreenCapture } from 'react-screen-capture';

import lab13a from "../images/graph/1.3a.png"
import lab13b from "../images/graph/1.3b.png"
import lab13c from "../images/graph/1.3c.png"
import lab14a from "../images/graph/1.4a.png"
import lab14b from "../images/graph/1.4b.png"
import lab14c from "../images/graph/1.4c.png"
import lab14d from "../images/graph/1.4d.png"
import lab41a from "../images/graph/4.1a.png"
import lab41b from "../images/graph/4.1b.png"
import lab41c from "../images/graph/4.1c.png"
import psuOn from "../images/psuon.png"
import psuOff from "../images/psuoff.png"

var mainStyles = { position: "relative" };
var svgStyles = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
var boardStyles = { width: "100%" };
var width = 666
var height = 1340

function Map() {
  const openGraph = useSelector(state => state.nodes.openGraph)
  const closeModal = () => dispatch(closeOscilloscope())
  const terminals = useSelector(state => state.nodes.terminals)
  const lines = useSelector(state => state.nodes.lines)
  const jumpers = useSelector(state => state.nodes.jumpers)
  const meters = useSelector(state => state.nodes.meters)
  const wireType = useSelector(state => state.nodes.wireType)
  const output = useSelector(state => state.nodes.output)
  const oscilloscopeGraph = useSelector(state => state.nodes.oscilloscopeGraph)
  const openCapturedScreen = useSelector(state => state.nodes.openCapturedScreen)
  const screenCaptureSource = useSelector(state => state.nodes.screenCapture)
  const powerToggleSource = useSelector(state => state.nodes.powerToggle)
  const switchToggleSource = useSelector(state => state.nodes.switchToggle)
  const dispatch = useDispatch();
  const disabledOpacity = "50%";
  const inputNameStyle = {
    height: "100%",
    width: "100%",
    fontSize: "24px"
  }
  const outputStyle = {
    display: "block",
    height: "100%",
    width: "100%",
    background: "#FFF",
    fontSize: "24px",
    textAlign: "center",
    marginTop: "18px"
  }
  const linkStyle = {
    display: "block",
    height: "100%",
    width: "100%"
  }
  const psuStyle = {
    height: "100%",
  }

  var xScale = scaleLinear()
    .domain([0, 100])
    .range([0, width]);
  var yScale = scaleLinear()
    .domain([0, 100])
    .range([0, height]);

  let graphImage = lab13a
  switch (oscilloscopeGraph) {
    case "13a":
      graphImage = lab13a
      break
    case "13b":
      graphImage = lab13b
      break
    case "13c":
      graphImage = lab13c
      break
    case "14a":
      graphImage = lab14a
      break
    case "14b":
      graphImage = lab14b
      break
    case "14c":
      graphImage = lab14c
      break
    case "14d":
      graphImage = lab14d
      break
    case "41a":
      graphImage = lab41a
      break
    case "41b":
      graphImage = lab41b
      break
    case "41c":
      graphImage = lab41c
      break
    default:
      graphImage = lab13a
  }

  let psuStatus = psuOff
  if (powerToggleSource) {
    psuStatus = psuOn
  }

  const handleScreenCapture = screenCapture => {
    graphImage = screenCapture
    dispatch(captureScreen(screenCapture))
  }

  return (
    <ScreenCapture onEndCapture={handleScreenCapture}>
      {({ onStartCapture }) => (
        <div id="map" style={mainStyles}>
          <img src={board} alt="board" style={boardStyles} />
          <svg
            style={svgStyles}
            width="100%"
            height="100%"
            viewBox={`0 0 ${width} ${height}`}
            preserveAspectRatio="xMidYMid meet"
          >
            {lines.map((line, i) => (
              <line
                key={i}
                x1={xScale(terminals[line.from].x)}
                x2={xScale(terminals[line.to].x)}
                y1={yScale(terminals[line.from].y)}
                y2={yScale(terminals[line.to].y)}
                strokeWidth={5}
                stroke={line.type === 'B' ? "blue" : line.type === 'M' ? "red": "black"}
                onClick={() => dispatch(selectLine(i))}
              />
            ))}
            {terminals.map((terminal, i) => (
              <Circle
                key={i}
                nodeId={terminal.index}
                cx={xScale(terminal.x)}
                cy={yScale(terminal.y)}
                r="7"
                id={terminal.index}
                isSelected={true}
                action={selectNode}
              />
            ))}
            {jumpers.map((jumper, i) => (
              <Circle
                key={i}
                nodeId={jumper.index}
                cx={xScale(jumper.x)}
                cy={yScale(jumper.y)}
                r="7"
                id={jumper.id}
                isSelected={jumper.isSelected}
                action={jumperToggle}
              />
            ))}
            {meters.map((meter, i) => (
              <Circle
                key={i}
                nodeId={meter.index}
                cx={xScale(meter.x)}
                cy={yScale(meter.y)}
                r="15"
                id={meter.id}
                isSelected={false}
                action={jumperToggle}
              />
            ))}
            <foreignObject 
              x={xScale(120.4)}
              y={yScale(1)}
              height="250"
              width="750">
              <SelectOption />
            </foreignObject>
            <foreignObject 
              x={xScale(-131)}
              y={yScale(12.8)}
              height="64"
              width="728">
                <input type="text" style={inputNameStyle} /> 
            </foreignObject>
            <foreignObject 
              x={xScale(-125.7)}
              y={yScale(69.3)}
              height="71"
              width="195">
              <label style={outputStyle}>{output}</label>
            </foreignObject>
            <foreignObject 
              x={xScale(-80)}
              y={yScale(47.8)}
              height="125"
              width="165">
              <a href={studentPdf} download style={linkStyle}> </a>
            </foreignObject>
            <foreignObject 
              x={xScale(-52.5)}
              y={yScale(47.8)}
              height="125"
              width="165">
              <a href={faqPdf} download style={linkStyle}> </a>
            </foreignObject>
            <foreignObject 
              x={xScale(-130)}
              y={yScale(20.43)}
              height="321"
              width="750">
              <img src={psuStatus} alt="" style={psuStyle} />
            </foreignObject>
            <rect
              x={xScale(-126.5)}
              y={yScale(26)}
              width="72" 
              height="160" 
              rx="10"
              opacity="0%"
              onClick={() => dispatch(powerToggle(!powerToggleSource))}
            />
            <rect
              x={xScale(-7.8)}
              y={yScale(78.2)}
              width="47" 
              height="47" 
              rx="10"
              opacity={switchToggleSource ? "0%": disabledOpacity}
              onClick={() => dispatch(switchToggle(!switchToggleSource))}
            />
            <rect
              x={xScale(-11)}
              y={yScale(2.4)}
              width="40" 
              height="40" 
              rx="10"
              opacity="0%"
              onClick={() => dispatch(openOscilloscope())}
            />
            <rect
              x={xScale(224.4)}
              y={yScale(87.4)}
              width="52" 
              height="53" 
              rx="10"
              opacity="0%"
              onClick={onStartCapture}
            />
            <rect
              x={xScale(-132)}
              y={yScale(47.3)}
              width="160" 
              height="194" 
              rx="25"
              opacity={wireType === "B" ? "0%" : disabledOpacity}
              onClick={() => dispatch(selectConnectionType("B"))}
            />
            <rect
              x={xScale(-106)}
              y={yScale(47.3)}
              width="160" 
              height="191" 
              rx="25"
              opacity={wireType === "J" ? "0%" : disabledOpacity}
              onClick={() => dispatch(selectConnectionType("J"))}
            />
            <rect
              x={xScale(-129.9)}
              y={yScale(66.8)}
              width="247" 
              height="422" 
              rx="7"
              opacity={wireType === "M" ? "0%" : disabledOpacity}
              onClick={() => dispatch(selectConnectionType("M"))}
            />
            <rect
              x={xScale(-92.5)}
              y={yScale(80.3)}
              width="126" 
              height="90" 
              rx="15"
              opacity="0%"
              onClick={() => dispatch(selectMeterType("V"))}
            />
            <rect
              x={xScale(-92.5)}
              y={yScale(88)}
              width="126" 
              height="90" 
              rx="15"
              opacity="0%"
              onClick={() => dispatch(selectMeterType("A"))}
            />
          </svg>
          <Popup open={openGraph} closeOnDocumentClick onClose={closeModal}>
            <div className="modal">
              <img src={graphImage} alt="graph" />
            </div>
          </Popup>
          <Popup open={openCapturedScreen} closeOnDocumentClick onClose={closeModal}>
            <div className="modal">
              <img src={screenCaptureSource} alt="graph" />
            </div>
          </Popup>
        </div>
      )}
    </ScreenCapture>
  );
}

export default Map
