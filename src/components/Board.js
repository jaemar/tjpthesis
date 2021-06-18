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

import board from "../images/board.png"
import studentPdf from "../pdfs/student.pdf";
import faqPdf from "../pdfs/faq.pdf";
import helpPdf from "../pdfs/help.pdf";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { ScreenCapture } from 'react-screen-capture';

import lab13a from "../images/graph/13a.png"
import lab13b from "../images/graph/13b.png"
import lab13c from "../images/graph/13c.png"
import lab14a from "../images/graph/14a.png"
import lab14b from "../images/graph/14b.png"
import lab14c from "../images/graph/14c.png"
import lab14d from "../images/graph/14d.png"
import lab41a from "../images/graph/41a.png"
import lab41b from "../images/graph/41b.png"
import lab41c from "../images/graph/41c.png"
import lab42a from "../images/graph/42a.png"
import lab42b from "../images/graph/42b.png"
import lab42c from "../images/graph/42c.png"
import lab43a from "../images/graph/43a.png"
import lab43b from "../images/graph/43b.png"
import lab43c from "../images/graph/43c.png"
import lab44a from "../images/graph/44a.png"
import lab44b from "../images/graph/44b.png"
import lab44c from "../images/graph/44c.png"
import psuOn from "../images/psuon.png"
import psuOff from "../images/psuoff.png"
import correctSequence from "../images/correctsequence.png"
import incorrectSequence from "../images/incorrectsequence.png"

var mainStyles = { position: "relative" };
var svgStyles = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };
var boardStyles = { width: "100%", display: "block" };
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
  const sequence = useSelector(state => state.nodes.sequence)
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
    textAlign: "center"
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
    case "42a":
      graphImage = lab42a
      break
    case "42b":
      graphImage = lab42b
      break
    case "42c":
      graphImage = lab42c
      break
    case "43a":
      graphImage = lab43a
      break
    case "43b":
      graphImage = lab43b
      break
    case "43c":
      graphImage = lab43c
      break
    case "44a":
      graphImage = lab44a
      break
    case "44b":
      graphImage = lab44b
      break
    case "44c":
      graphImage = lab44c
      break
    default:
      graphImage = lab13a
  }

  let psuStatus = psuOff
  if (powerToggleSource) {
    psuStatus = psuOn
  }

  let setCorrectSequence = null
  let setIncorrectSequence = null
  switch (sequence) {
    case true:
      setCorrectSequence = correctSequence
      break
    case false:
      setIncorrectSequence = incorrectSequence
      break
    default:
      setCorrectSequence = null
      setIncorrectSequence = null
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
            <foreignObject 
              x={xScale(11.2)}
              y={yScale(56.3)}
              height="130"
              width="150">
              <img src={setCorrectSequence} alt="" style={psuStyle} />
            </foreignObject>
            <foreignObject 
              x={xScale(2.3)}
              y={yScale(57.6)}
              height="92"
              width="150">
              <img src={setIncorrectSequence} alt="" style={psuStyle} />
            </foreignObject>
            <rect
              x={xScale(7.7)}
              y={yScale(60.2)}
              width="23" 
              height="23" 
              rx="10"
              opacity="0%"
            />
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
                id={jumper.index}
                isSelected={!jumper.isSelected}
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
              x={xScale(-131.7)}
              y={yScale(12.9)}
              height="63"
              width="728">
                <input type="text" style={inputNameStyle} /> 
            </foreignObject>
            <foreignObject 
              x={xScale(-126.4)}
              y={yScale(69.7)}
              height="70.7"
              width="195">
              <label style={outputStyle}>{output}</label>
            </foreignObject>
            <foreignObject 
              x={xScale(-80.6)}
              y={yScale(48)}
              height="125"
              width="165">
              <a href={studentPdf} style={linkStyle} target="_blank" rel="noreferrer"> </a>
            </foreignObject>
            <foreignObject 
              x={xScale(-53)}
              y={yScale(48)}
              height="125"
              width="165">
              <a href={faqPdf} style={linkStyle} target="_blank" rel="noreferrer"> </a>
            </foreignObject>
            <foreignObject 
              x={xScale(-106)}
              y={yScale(47.5)}
              height="187"
              width="156">
              <a href={helpPdf} style={linkStyle} target="_blank" rel="noreferrer"> </a>
            </foreignObject>
            <foreignObject 
              x={xScale(-130.7)}
              y={yScale(20.63)}
              height="321.4"
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
              //onClick={onStartCapture}
            />
            <rect
              x={xScale(-132.4)}
              y={yScale(47.7)}
              width="160" 
              height="194" 
              rx="25"
              opacity={wireType === "B" ? "0%" : disabledOpacity}
              onClick={() => dispatch(selectConnectionType("B"))}
            />
            <rect
              x={xScale(-130.4)}
              y={yScale(67.2)}
              width="247" 
              height="422" 
              rx="7"
              opacity={wireType === "M" ? "0%" : disabledOpacity}
              onClick={() => dispatch(selectConnectionType("M"))}
            />
            <rect
              x={xScale(-92.5)}
              y={yScale(80.9)}
              width="126" 
              height="90" 
              rx="15"
              opacity="0%"
              onClick={() => dispatch(selectMeterType("V"))}
            />
            <rect
              x={xScale(-92.5)}
              y={yScale(88.5)}
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
