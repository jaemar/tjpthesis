import {
  SELECT_NODE,
  SELECT_CONNECTION_TYPE,
  SELECT_LINE,
  SELECT_EXERCISE,
  JUMPER_TOGGLE,
  SELECT_METER_TYPE,
  OPEN_OSCILLOSCOPE,
  CLOSE_OSCILLOSCOPE,
  SCREEN_CAPTURE,
  POWER_TOGGLE,
  SWITCH_TOGGLE
} from '../constants/action-types.js'

const initialState = {
  terminals: [
    {x: 0, y: -20, index: 0},

    //
    {x: 68, y: 28, index: 1, isSelected: false},
    {x: 68, y: 34.8, index: 2, isSelected: false},
    {x: 68, y: 41.5, index: 3, isSelected: false},
    {x: 68, y: 48.3, index: 4, isSelected: false},

    //
    {x: 8.5, y: 67, index: 5, isSelected: false},
    {x: 15.6, y: 67, index: 6, isSelected: false},
    {x: 21.5, y: 67, index: 7, isSelected: false},

    // WYE
    {x: 122, y: 21.2, index: 8, isSelected: false},
    {x: 122, y: 24, index: 9, isSelected: false},
    {x: 121.9, y: 29, index: 10, isSelected: false},
    {x: 121.8, y: 31.4, index: 11, isSelected: false},
    {x: 121.7, y: 38.2, index: 12, isSelected: false},
    //
    {x: 121.7, y: 40.9, index: 13, isSelected: false},
    //
    {x: 126, y: 42.2, index: 14, isSelected: false},
    {x: 138, y: 45.6, index: 15, isSelected: false},
    {x: 142.8, y: 46.9, index: 16, isSelected: false},
    {x: 151.4, y: 49.3, index: 17, isSelected: false},
    {x: 156.4, y: 50.8, index: 18, isSelected: false},
    //
    {x: 87.2, y: 50.8, index: 19, isSelected: false},
    {x: 92, y: 49.4, index: 20, isSelected: false},
    {x: 101, y: 46.8, index: 21, isSelected: false},
    {x: 105.3, y: 45.6, index: 22, isSelected: false},
    {x: 117.2, y: 42.1, index: 23, isSelected: false},

    // DELTA
    {x: 192.8, y: 24.6, index: 24, isSelected: false},
    {x: 198.2, y: 28.9, index: 25, isSelected: false},
    {x: 205.2, y: 34.9, index: 26, isSelected: false},
    {x: 210.1, y: 39, index: 27, isSelected: false},
    {x: 215.6, y: 43.6, index: 28, isSelected: false},
    //
    {x: 220.8, y: 47.7, index: 29, isSelected: false},
    {x: 210.5, y: 47.7, index: 30, isSelected: false},
    {x: 196.8, y: 47.7, index: 31, isSelected: false},
    {x: 187, y: 47.7, index: 32, isSelected: false},
    {x: 176, y: 47.7, index: 33, isSelected: false},
    //
    {x: 166.5, y: 47.7, index: 34, isSelected: false},
    {x: 171.5, y: 43, index: 35, isSelected: false},
    {x: 178, y: 37.2, index: 36, isSelected: false},
    {x: 183, y: 33, index: 37, isSelected: false},
    {x: 188.3, y: 28.2, index: 38, isSelected: false},

    // Load Phase R
    // upper
    {x: 41.2, y: 60, index: 39, isSelected: false},
    {x: 56, y: 60, index: 40, isSelected: false},
    {x: 73.4, y: 60, index: 41, isSelected: false},
    {x: 90.6, y: 60, index: 42, isSelected: false},
    // lower
    {x: 41.2, y: 66.3, index: 43, isSelected: false},
    {x: 56, y: 66.3, index: 44, isSelected: false},
    {x: 73.4, y: 66.3, index: 45, isSelected: false},
    {x: 90.6, y: 66.3, index: 46, isSelected: false},

    // Load Phase S
    // upper
    {x: 108.4, y: 60, index: 47, isSelected: false},
    {x: 124.3, y: 60, index: 48, isSelected: false},
    {x: 139.9, y: 60, index: 49, isSelected: false},
    {x: 156.7, y: 60, index: 50, isSelected: false},
    // lower
    {x: 108.4, y: 66.3, index: 51, isSelected: false},
    {x: 124.3, y: 66.3, index: 52, isSelected: false},
    {x: 139.9, y: 66.3, index: 53, isSelected: false},
    {x: 156.7, y: 66.3, index: 54, isSelected: false},

    // Load Phase T
    // upper
    {x: 173.4, y: 60, index: 55, isSelected: false},
    {x: 189.4, y: 60, index: 56, isSelected: false},
    {x: 205.5, y: 60, index: 57, isSelected: false},
    {x: 222.5, y: 60, index: 58, isSelected: false},
    // lower
    {x: 173.4, y: 66.3, index: 59, isSelected: false},
    {x: 189.4, y: 66.3, index: 60, isSelected: false},
    {x: 205.5, y: 66.3, index: 61, isSelected: false},
    {x: 222.5, y: 66.3, index: 62, isSelected: false},

    // E
    {x: 41.2, y: 28, index: 63, isSelected: false},
    {x: 41.2, y: 35, index: 64, isSelected: false},
    {x: 41.2, y: 41.8, index: 65, isSelected: false},

    // S
    {x: 54.4, y: 28, index: 66, isSelected: false},
    {x: 54.4, y: 34.8, index: 67, isSelected: false},
    {x: 54.4, y: 41.5, index: 68, isSelected: false},

    // Oscilloscope
    {x: -5, y: 8.5, index: 69, isSelected: false},
    {x: 4, y: 8.5, index: 70, isSelected: false},
    {x: 13, y: 8.5, index: 71, isSelected: false},
  ],
  lines: [],
  jumpers: [
    {x: 127.6, y: 35, index: 0, isSelected: false},
    {x: 129, y: 46.5, index: 1, isSelected: false},
    {x: 108, y: 41, index: 2, isSelected: false},
    {x: 207, y: 30.3, index: 3, isSelected: false},
    {x: 204, y: 50.6, index: 4, isSelected: false},
    {x: 170, y: 38.7, index: 5, isSelected: false}
  ],
  meters: [
    {x: -119.56, y: 95.6, index: 0, isSelected: true},
    {x: -99.78, y: 95.6, index: 0, isSelected: true},
  ],
  oscilloscopes: [69, 70, 71], // change this base of oscilloscopes in terminals
  oscilloscopesEnabled: [],
  oscilloscopeConnections: [],
  exercises: {
    "1.1": {
      links: [[63, 64], [64, 65]],
      dmm: [[1, 2], [2, 3], [3, 1], [2, 1], [3, 2], [1, 3], [1, 4], [2, 4], [3, 4], [4, 1], [4, 2], [4, 3]],
      voltage: [24, 24, 24, -24, -24, -24, 13.8564, 13.8564, 13.8564, -13.8564, -13.8564, -13.8564],
      jumpersVoltage: [],
      currentDmm: [],
      current: [],
      jumpers: null,
      shouldTestSequence: false,
      ground: [4, 13],
      oscilloscopes: [],
      oscilloscopesValues: []
    },
    "1.2": {
      links: [[63, 66], [64, 67], [65, 68]],
      dmm: [[1, 2], [2, 3], [3, 1], [2, 1], [3, 2], [1, 3]],
      voltage: [24, 24, 24, -24, -24, -24],
      jumpersVoltage: [],
      currentDmm: [],
      current: [],
      jumpers: null,
      shouldTestSequence: false,
      ground: [],
      oscilloscopes: [],
      oscilloscopesValues: []
    },
    "1.3": {
      links: [[63, 64], [64, 65]],
      dmm: [],
      voltage: [],
      jumpersVoltage: [],
      currentDmm: [],
      current: [],
      jumpers: null,
      shouldTestSequence: false,
      ground: [4, 13],
      oscilloscopes: [[[1, 69], [2, 71], [4, 70]], [[2, 69], [3, 71], [4, 70]], [[3, 69], [1, 71], [4, 70]]],
      oscilloscopesValues: ["13a", "13b", "13c"]
      , },
    "1.4": {
      links: [[63, 64], [64, 65], [1, 5], [2, 6], [3, 7]],
      dmm: [],
      voltage: [],
      jumpersVoltage: [],
      currentDmm: [],
      current: [],
      jumpers: null,
      shouldTestSequence: true,
      ground: [4, 13],
      oscilloscopes: [[[1, 69], [4, 70]], [[2, 69], [4, 70]], [[3, 69], [4, 70]], [[1, 69], [2, 71], [4, 70]]],
      oscilloscopesValues: ["14a", "14b", "14c", "14d"]
    },
    "2.1": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 39], [10, 43], [16, 47], [17, 51], [20, 59], [21, 55]],
      dmm: [[1, 2], [2, 3], [3, 1], [2, 1], [3, 2], [1, 3], [1, 4], [2, 4], [3, 4], [4, 1], [4, 2], [4, 3]],
      voltage: [24, 24, 24, -24, -24, -24, 13.8564, 13.8564, 13.8564, -13.8564, -13.8564, -13.8564],
      jumpersVoltage: [[0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2], [0, 1, 2]],
      currentDmm: [[1, 8], [2, 18], [3, 19], [11, 12], [15, 14], [22, 23], [8, 1], [18, 2], [19, 3], [12, 11], [14, 15], [23, 22]],
      current: [0.05543, 0.05543, 0.05543, 0.05543, 0.05543, 0.05543, -0.05543, -0.05543, -0.05543, -0.05543, -0.05543, -0.05543],
      jumpersCurrent: [[0, 1, 2], [0, 1, 2], [0, 1, 2], [1, 2], [0, 2], [0, 1], [0, 1, 2], [0, 1, 2], [0, 1, 2], [1, 2], [0, 2], [0, 1]],
      shouldTestSequence: false,
      ground: [4, 13],
      oscilloscopes: [],
      oscilloscopesValues: []
    },
    "2.2": {
      links: [[63, 64], [64, 65], [1, 24], [2, 29], [3, 34], [27, 39], [40, 43], [28, 44], [32, 52], [48, 51], [33, 47], [38, 60], [56, 59], [37, 55]],
      dmm: [[1, 2], [2, 3], [3, 1], [2, 1], [3, 2], [1, 3]],
      voltage: [24, 24, 24, -24, -24, -24],
      jumpersVoltage: [[3, 4, 5], [3, 4, 5], [3, 4, 5], [3, 4, 5], [3, 4, 5], [3, 4, 5]],
      currentDmm: [[1, 24], [2, 29], [3, 34], [25, 26], [30, 31], [36, 35], [24, 1], [29, 2], [34, 3], [26, 25], [31, 30], [35,36]],
      current: [0.08313, 0.08313, 0.08313, 0.08313, 0.08313, 0.08313, -0.08313, -0.08313, -0.08313, -0.08313, -0.08313, -0.08313],
      jumpersCurrent: [[3, 4, 5], [3, 4, 5], [3, 4, 5], [4, 5], [3, 5], [3, 4], [3, 4, 5], [3, 4, 5], [3, 4, 5], [4, 5], [3, 5], [3, 4]],
      shouldTestSequence: false,
      ground: [],
      oscilloscopes: [],
      oscilloscopesValues: []
    },
    "2.3": {
      links: [[63, 66], [64, 67], [65, 68], [1, 8], [2, 18], [3, 19], [9, 39], [10, 43], [16, 47], [17, 51], [20, 59], [21, 55]],
      dmm: [],
      voltage: [],
      jumpersVoltage: [],
      currentDmm: [[1, 8], [2, 18], [3, 19], [11, 12], [15, 14], [22, 23], [8, 1], [18, 2], [19, 3], [12, 11], [14, 15], [23, 22]],
      current: [0.05543, 0.05543, 0.05543, 0.05543, 0.05543, 0.05543, -0.05543, -0.05543, -0.05543, -0.05543, -0.05543, -0.05543],
      jumpersCurrent: [[0, 1, 2], [0, 1, 2], [0, 1, 2], [1, 2], [0, 2], [0, 1], [0, 1, 2], [0, 1, 2], [0, 1, 2], [1, 2], [0, 2], [0, 1]],
      shouldTestSequence: false,
      ground: [],
      oscilloscopes: [],
      oscilloscopesValues: []
    },
    "2.4": {
      links: [[63, 66], [64, 67], [65, 68], [1, 24], [2, 29], [3, 34], [27, 39], [28, 43], [32, 51], [33, 47], [37, 55], [38, 59]],
      dmm: [],
      voltage: [],
      jumpersVoltage: [],
      currentDmm: [[1, 24], [2, 29], [3, 34], [25, 26], [30, 31], [36, 35], [24, 1], [29, 2], [34, 3], [26, 25], [31, 30], [35,36]],
      current: [0.05543, 0.05543, 0.05543, 0.096, 0.096, 0.096, -0.05543, -0.05543, -0.05543, -0.096, -0.096, -0.096],
      jumpersCurrent: [[3, 4, 5], [3, 4, 5], [3, 4, 5], [4, 5], [3, 5], [3, 4], [3, 4, 5], [3, 4, 5], [3, 4, 5], [4, 5], [3, 5], [3, 4]],
      shouldTestSequence: false,
      ground: [],
      oscilloscopes: [],
      oscilloscopesValues: []
    },
    "3.1": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 39], [10, 43], [16, 40], [44, 47], [17, 51], [20, 60], [56, 59], [52, 55], [21, 48]],
      dmm: [],
      voltage: [],
      jumpersVoltage: [],
      currentDmm: [[1, 8], [2, 18], [3, 19], [11, 12], [15, 14], [22, 23], [8, 1], [18, 2], [19, 3], [12, 11], [14, 15], [23, 22], [4, 13], [13, 4]],
      current: [0.05543, 0.02771, 0.0185, 0.05543, 0.02771, 0.0185, -0.05543, -0.02771, -0.0185, -0.05543, -0.02771, -0.0185, 0.00924, 0.00924],
      jumpersCurrent: [[0, 1, 2], [0, 1, 2], [0, 1, 2], [1, 2], [0, 2], [0, 1], [0, 1, 2], [0, 1, 2], [0, 1, 2], [1, 2], [0, 2], [0, 1], [0, 1, 2], [0, 1, 2]],
      shouldTestSequence: false,
      ground: [4, 13],
      oscilloscopes: [],
      oscilloscopesValues: []
    },
    "4.1": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 41], [10, 45], [16, 49], [17, 53], [20, 61], [21, 57]],
      dmm: [],
      voltage: [],
      jumpersVoltage: [],
      currentDmm: [],
      current: [],
      jumper: null,
      jumpers: [],
      shouldTestSequence: false,
      ground: [4, 13],
      oscilloscopes: [[[8, 69], [13, 70], [12, 71]], [[18, 69], [13, 70], [14, 71]], [[19, 69], [13, 70], [23, 71]]],
      oscilloscopesValues: ["41a", "41b", "41c"]
    },
    "4.2": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 42], [10, 46], [16, 50], [17, 54], [20, 62], [21, 58]],
      dmm: [],
      voltage: [],
      jumpersVoltage: [],
      currentDmm: [],
      current: [],
      jumper: null,
      jumpers: [],
      shouldTestSequence: false,
      ground: [4, 13],
      oscilloscopes: [[[8, 69], [13, 70], [12, 71]], [[18, 69], [13, 70], [14, 71]], [[19, 69], [13, 70], [23, 71]]],
      oscilloscopesValues: ["42a", "42b", "42c"]
    },
    "4.3": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 40], [41, 44], [42, 45], [10, 46], [16, 48], [49, 52], [50, 53], [17, 54], [20, 56], [57, 60], [58, 61], [21, 62]],
      dmm: [],
      voltage: [],
      jumpersVoltage: [],
      currentDmm: [],
      current: [],
      jumper: null,
      jumpers: [],
      shouldTestSequence: false,
      ground: [4, 13],
      oscilloscopes: [[[8, 69], [13, 70], [12, 71]], [[18, 69], [13, 70], [14, 71]], [[19, 69], [13, 70], [23, 71]]],
      oscilloscopesValues: ["43a", "43b", "43c"]
    },
    "4.4": {
      links: [[63, 64], [64, 65], [1, 24], [2, 29], [3, 34], [27, 40], [41, 44], [42, 45], [28, 46], [33, 48], [49, 52], [50, 53], [32, 54], [37, 56], [57, 60], [58, 61], [38, 62]],
      dmm: [],
      voltage: [],
      jumpersVoltage: [],
      currentDmm: [],
      current: [],
      jumper: null,
      jumpers: [],
      shouldTestSequence: false,
      ground: [],
      oscilloscopes: [[[24, 69], [29, 70], [28, 71]], [[29, 69], [34, 70], [33, 71]], [[34, 69], [24, 70], [38, 71]]],
      oscilloscopesValues: ["44a", "44b", "44c"]
    }
  },
  links: [],
  dmm: [],
  link: {from: null, to: null, type: null},
  isLinkStarted: false,
  wireType: "B",
  selectedExercise: "1.1",
  output: "",
  openGraph: false,
  oscilloscopeGraph: "13a",
  powerToggle: false,
  switchToggle: false,
  selectedJumpers: [],
  sequence: null
}
const nodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_EXERCISE:
      return {
        ...state,
        selectedExercise: action.payload,
        powerToggle: false,
        switchToggle: false,
      }
    case SELECT_NODE:
      const link = state.link
      let dmm = [...state.dmm]
      let links = [...state.links]
      let lines = [...state.lines]
      let wireType = state.wireType
      let oscilloscopesEnabled = [...state.oscilloscopesEnabled]
      let oscilloscopeConnections = [...state.oscilloscopeConnections]

      if (state.oscilloscopesEnabled.includes(action.payload)) {
        return {...state}
      }

      if (state.oscilloscopes.includes(action.payload) && !state.oscilloscopesEnabled.includes(action.payload)) {
        wireType = link.type = "O"
        oscilloscopesEnabled.push(action.payload)
      } else {
        wireType = state.wireType === "O" ? "B" : state.wireType
      }

      if (link.from === action.payload) {
        link.from = null
      } else {
        if (state.isLinkStarted) {
          if (state.oscilloscopesEnabled.includes(action.payload)) {
            return {...state}
          }
          if (link.from > action.payload && link.type !== "M") {
            link.to = link.from
            link.from = action.payload
          } else {
            link.to = action.payload
          }

          if (wireType !== "M") {
            lines.push(link)
          }

          if (link.type === "B") {
            links = [...state.links, [link.from, link.to]]
          }

          if (state.dmm.length === 0 && wireType === "M") {
            lines.push(link)
            dmm = [link.from, link.to]
          }

          if (link.type === "O") {
            oscilloscopeConnections = [...state.oscilloscopeConnections, [link.from , link.to]]
          }


          return {
            ...state,
            lines: lines,
            link: {from: null, to: null, type: wireType},
            isLinkStarted: !state.isLinkStarted,
            dmm: dmm,
            links: links,
            oscilloscopeConnections: oscilloscopeConnections,
            oscilloscopesEnabled: oscilloscopesEnabled
          }
        } else{
          link.from = action.payload
          link.type = wireType
        }
      }

      return {
        ...state,
        link: link,
        isLinkStarted: !state.isLinkStarted,
        dmm: dmm,
        oscilloscopesEnabled: oscilloscopesEnabled,
        wireType: wireType
      }
    case SELECT_LINE:
      const splicedLines = state.lines.splice(action.payload, 1)
      const splicedLine = splicedLines[0]
      let dmmLine = [...state.dmm]
      let splicedLineIndex = null
      let oscilloscopesEnabledLines = [...state.oscilloscopesEnabled]
      let lineOpenGraph = state.openGraph
      if (splicedLine.type === "M") {
        dmmLine = []
      } else {
        if (splicedLine.type === "O") {
          let fromIndex = state.oscilloscopesEnabled.indexOf(splicedLine.from)
          let toIndex = state.oscilloscopesEnabled.indexOf(splicedLine.to)
          lineOpenGraph = false
          if (fromIndex !== -1) {
            oscilloscopesEnabledLines.splice(fromIndex, 1)
          }
          if (toIndex !== -1) {
            oscilloscopesEnabledLines.splice(toIndex, 1)
          }
          splicedLineIndex = state.oscilloscopeConnections.map(String).indexOf([splicedLine.from, splicedLine.to].toString())
          state.oscilloscopeConnections.splice(splicedLineIndex, 1)
        } else {
          splicedLineIndex = state.links.map(String).indexOf([splicedLine.from, splicedLine.to].toString())
          state.links.splice(splicedLineIndex, 1)
        }
      }
      return {
        ...state,
        lines: [...state.lines],
        links: [...state.links],
        dmm: dmmLine,
        openGraph: lineOpenGraph,
        oscilloscopesEnabled: oscilloscopesEnabledLines,
        oscilloscopeConnections: [...state.oscilloscopeConnections]
      }
    case SELECT_CONNECTION_TYPE:
      return {
        ...state,
        wireType: action.payload
      }
    case JUMPER_TOGGLE:
      state.jumpers[action.payload].isSelected = !state.jumpers[action.payload].isSelected

      if (state.selectedJumpers.includes(action.payload)) {
        state.selectedJumpers.splice(state.selectedJumpers.indexOf(action.payload), 1)
      } else {
        state.selectedJumpers.push(action.payload)
      }

      state.selectedJumpers.sort(function(a, b) {
        return a - b;
      });

      return {
        ...state,
        jumpers: [...state.jumpers],
        selectedJumpers: [...state.selectedJumpers]
      }
    case SELECT_METER_TYPE:
      let output = ""

      // check power and switch
      if (!state.powerToggle || !state.switchToggle) {
        return {...state}
      }

      if (state.dmm.length === 0) {
        return {...state, output: "Error"}
      }

      if (action.payload === "V") {
        output = Voltage(state)
      } else {
        output = Current(state)
      }
      return {
        ...state,
        output: output
      }
    case OPEN_OSCILLOSCOPE:
      let exercise = state.exercises[state.selectedExercise]
      let exerciseOscilloscopes = exercise.oscilloscopes
      let exerciseOscilloscopesValues = exercise.oscilloscopesValues
      let connections = [...state.oscilloscopeConnections].map(String)
      let openGraph = false
      let oscilloscopeGraph = state.oscilloscopeGraph
      let diff = jackDiff(state)

      // check power and switch
      if (!state.powerToggle || !state.switchToggle) {
        return {...state}
      }

      if (exerciseOscilloscopes.length === 0) {
        return {...state}
      }

      for (let i = 0; i < exerciseOscilloscopes.length; i++) {
        let oscilloscopes = exerciseOscilloscopes[i]
        for (let x = 0; x < oscilloscopes.length; x++) {
          let strOscilloscopes = oscilloscopes.map(String)
          let diff = strOscilloscopes.filter(o => !connections.includes(o)).concat(connections.filter(c => !strOscilloscopes.includes(c)))
          if (diff.length === 0) {
            openGraph = true
            oscilloscopeGraph = exerciseOscilloscopesValues[i]
            break
          }
        }
        if (openGraph) {
          break
        }
      }

      if (diff.length !== 0) {
        openGraph = false
      }

      if (exercise.shouldTestSequence) {
        if (diff.length === 0 || (diff.length === 1 && diff.includes(exercise.ground.toString()))) {
          state.sequence = true
        } else {
          state.sequence = false
        }
      } else {
        state.sequence = null
      }

      return {
        ...state,
        openGraph: openGraph,
        oscilloscopeGraph: oscilloscopeGraph,
        sequence: state.sequence
      }
    case CLOSE_OSCILLOSCOPE:
      return {
        ...state,
        openGraph: false,
        openCapturedScreen: false
      }
    case SCREEN_CAPTURE:
      return {
        ...state,
        screenCapture: action.payload,
        openCapturedScreen: true
      }
    case POWER_TOGGLE:
      return {
        ...state,
        powerToggle: action.payload,
        switchToggle: false
      }
    case SWITCH_TOGGLE:
      if (!state.powerToggle) {
        return {...state}
      }

      return {
        ...state,
        switchToggle: action.payload
      }
    default:
      return {...state}

  }
}

const Voltage = (state) => {
  let exercise = state.exercises[state.selectedExercise]
  let dmm = exercise.dmm.map(String)
  let dmmIndex = dmm.indexOf(state.dmm.toString())
  let diff = jackDiff(state)
  let error = "Error"
  let voltage = null
  let jumpersVoltage = []

  if (dmmIndex === -1) {
    return error
  }

  if (diff.length === 0 || (diff.length === 1 && diff.includes(exercise.ground.toString()))) {
    voltage = exercise.voltage[dmmIndex]
  }

  if (exercise.jumpersVoltage.length > 0) {
    jumpersVoltage = exercise.jumpersVoltage[dmmIndex]
    if (jumpersVoltage.toString() !== state.selectedJumpers.toString()) {
      return error
    }
  }

  return voltage ? voltage : error
}

const Current = (state) => {
  let exercise = state.exercises[state.selectedExercise]
  let currentDmm = exercise.currentDmm.map(String)
  let dmmIndex = currentDmm.indexOf(state.dmm.toString())
  let diff = jackDiff(state)
  let error = "Error"
  let current = null
  let jumpersCurrent = []

  if (dmmIndex === -1) {
    return error
  }

  if (diff.length === 0 || (diff.length === 1 && diff.includes(exercise.ground.toString()))) {
    current = exercise.current[dmmIndex]
  }

  if (exercise.jumpersCurrent.length > 0) {
    jumpersCurrent = exercise.jumpersCurrent[dmmIndex]
    if (jumpersCurrent.toString() !== state.selectedJumpers.toString()) {
      return error
    }
  }

  return current ? current : error
}

const jackDiff = (state) => {
  let exercise = state.exercises[state.selectedExercise]
  let exerciseLinks = exercise.links.map(String)
  let links = state.links.map(String)
  return links.filter(link => !exerciseLinks.includes(link)).concat(exerciseLinks.filter(link => !links.includes(link)))
}
export default nodesReducer;
