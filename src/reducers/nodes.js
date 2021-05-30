import {
  SELECT_NODE,
  SELECT_CONNECTION_TYPE,
  SELECT_LINE,
  SELECT_EXERCISE,
  JUMPER_TOGGLE,
  SELECT_METER_TYPE
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

    // jumpers
  ],
  lines: [],
  jumpers: [
    {x: 127.6, y: 35, index: 0, isSelected: true},
    {x: 129, y: 46.5, index: 1, isSelected: true},
    {x: 108, y: 41, index: 2, isSelected: true},
    {x: 207, y: 30.3, index: 3, isSelected: true},
    {x: 204, y: 50.6, index: 4, isSelected: true},
    {x: 170, y: 38.7, index: 5, isSelected: true}
  ],
  exercises: {
    "1.1": {
      links: [[63, 64], [64, 65]],
      dmm: [[1, 2], [2, 3], [3, 1], [2, 1], [3, 2], [1, 3], [1, 4], [2, 4], [3, 4], [4, 1], [4, 2], [4, 3]],
      voltage: [24, 24, 24, -24, -24, -24, 13.8564, 13.8564, 13.8564, -13.8564, -13.8564, -13.8564],
      current: [],
      jumper: null,
      shouldTestSequence: false,
      ground: []
    },
    "1.2": {
      links: [[63, 66], [64, 67], [65, 68]],
      dmm: [[1, 2], [2, 3], [3, 1], [2, 1], [3, 2], [1, 3]],
      voltage: [24, 24, 24, -24, -24, -24],
      current: [],
      jumper: null,
      shouldTestSequence: false,
      ground: []
    },
    "1.3": {
      links: [[63, 64], [64, 65]],
      dmm: [],
      voltage: [],
      current: [],
      jumper: null,
      shouldTestSequence: false,
      ground: []
    },
    "1.4": {
      links: [[63, 64], [64, 65], [1, 5], [2, 6], [3, 7]],
      dmm: [],
      voltage: [],
      current: [],
      jumper: null,
      shouldTestSequence: true,
      ground: []
    },
    "2.1": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 39], [10, 43], [16, 47], [17, 51], [20, 59], [21, 55]],
      dmm: [[1, 2], [2, 3], [3, 1], [2, 1], [3, 2], [1, 4], [1, 4], [2, 4], [3, 4], [4, 1], [4, 2], [4, 3]],
      voltage: [24, 24, 24, -24, -24, -24, 13.8564, 13.8564, 13.8564, -13.8564, -13.8564, -13.8564],
      current: [],
      jumper: null,
      shouldTestSequence: false,
      ground: [4, 13]
    },
    "2.2": {
      links: [[63, 64], [64, 65], [1, 24], [2, 29], [3, 34], [27, 39], [40, 43], [28, 44], [32, 52], [48, 51], [33, 47], [38, 60], [56, 59], [37, 55]],
      dmm: [[1, 2], [2, 3], [3, 1], [2, 1], [3, 2], [1, 3]],
      voltage: [24, 24, 24, -24, -24, -24],
      current: [],
      jumper: null,
      shouldTestSequence: false,
      ground: []
    },
    "2.3": {
      links: [[63, 66], [64, 67], [65, 68], [1, 8], [2, 18], [3, 19], [9, 39], [10, 43], [16, 47], [17, 51], [20, 59], [21, 55]],
      dmm: [[1, 8], [2, 18], [3, 19]],
      voltage: [],
      current: [],
      jumper: null,
      shouldTestSequence: false,
      ground: []
    },
    "2.4": {
      links: [[63, 66], [64, 67], [65, 68], [1, 24], [2, 29], [3, 34], [27, 39], [28, 43], [32, 51], [33, 47], [37, 55], [38, 59]],
      dmm: [],
      voltage: [],
      current: [],
      jumper: null,
      shouldTestSequence: false,
      ground: []
    },
    "3.1": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 39], [10, 43], [16, 40], [44, 47], [17, 51], [20, 60], [56, 59], [52, 55], [21, 48]],
      dmm: [],
      voltage: [],
      current: [],
      jumper: null,
      ground: [4, 13]
    },
    "3.2": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 39], [10, 43], [16, 47], [17, 51], [20, 59], [21, 55], [1, 56], [4, 60]],
      dmm: [],
      voltage: [],
      current: [],
      jumper: null,
      ground: [4, 13]
    },
    "4.1": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 41], [10, 45], [16, 49], [17, 53], [20, 61], [21, 57]],
      dmm: [],
      voltage: [],
      current: [],
      jumper: null,
      ground: [4, 13]
    },
    "4.2": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 42], [10, 46], [16, 50], [17, 54], [20, 62], [21, 58]],
      dmm: [],
      voltage: [],
      current: [],
      jumper: null,
      shouldTestSequence: false,
      ground: []
    },
    "4.3": {
      links: [[63, 64], [64, 65], [1, 8], [2, 18], [3, 19], [9, 40], [41, 44], [42, 45], [10, 46], [16, 48], [49, 52], [50, 53], [17, 54], [20, 56], [57, 60], [58, 61], [21, 62]],
      dmm: [],
      voltage: [],
      current: [],
      jumper: null,
      ground: [4, 13]
    },
    "4.4": {
      links: [[63, 64], [64, 65], [1, 24], [2, 29], [3, 34], [27, 40], [41, 44], [42, 45], [28, 46], [33, 48], [49, 52], [50, 53], [32, 54], [37, 56], [57, 60], [58, 61], [38, 62]],
      dmm: [],
      voltage: [],
      current: [],
      jumper: null,
      shouldTestSequence: false,
      ground: []
    }
  },
  links: [],
  dmm: [],
  link: {from: null, to: null, type: null},
  isLinkStarted: false,
  wireType: "B",
  selectedExercise: "1.1",
  output: ""
}
const nodesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_EXERCISE:
      return {
        ...state,
        selectedExercise: action.payload
      }
    case SELECT_NODE:
      const link = state.link
      let dmm = [...state.dmm]
      let links = [...state.links]
      let lines = [...state.lines]

      if (link.from === action.payload) {
        link.from = null
      } else {
        if (state.isLinkStarted) {
          if (link.from > action.payload && link.type !== "M") {
            link.to = link.from
            link.from = action.payload
          } else {
            link.to = action.payload
          }

          if (state.wireType !== "M") {
            links = [...state.links, [link.from, link.to]]
          }

          if (state.dmm.length === 0 && state.wireType === "M") {
            lines.push(link)
            dmm = [link.from, link.to]
          } else if(state.wireType !== "M") {
            lines.push(link)
          }

          return {
            ...state,
            lines: lines,
            link: {from: null, to: null, type: state.wireType},
            isLinkStarted: !state.isLinkStarted,
            dmm: dmm,
            links: links
          }
        } else{
          link.from = action.payload
          link.type = state.wireType
        }
      }

      return {
        ...state,
        link: link,
        isLinkStarted: !state.isLinkStarted,
        dmm: dmm
      }
    case SELECT_LINE:
      const splicedLines = state.lines.splice(action.payload, 1)
      const splicedLine = splicedLines[0]
      let dmmLine = [...state.dmm]
      let splicedLineIndex = null
      if (splicedLine.type === "M") {
        dmmLine = []
      } else {
        splicedLineIndex = state.links.map(String).indexOf([splicedLine.from, splicedLine.to].toString())
        state.links.splice(splicedLineIndex, 1)
      }
      return {
        ...state,
        lines: [...state.lines],
        links: [...state.links],
        dmm: dmmLine
      }
    case SELECT_CONNECTION_TYPE:
      return {
        ...state,
        wireType: action.payload
      }
    case JUMPER_TOGGLE:
      state.jumpers[action.payload].isSelected = !state.jumpers[action.payload].isSelected

      for (let i = 0; i < state.jumpers.length; i++) {
        if (i !== action.payload) {
          state.jumpers[i].isSelected = true
        }
      }
      return {
        ...state,
        jumpers: [...state.jumpers]
      }
    case SELECT_METER_TYPE:
      let output = ""
      if (state.dmm.length === 0) {
        return {...state, output: "Error"}
      }

      if (action.payload === "V") {
        output = Voltage(state)
      }
      return {
        ...state,
        output: output
      }
    default:
      return {...state}

  }
}

const Voltage = (state) => {
  let exercise = state.exercises[state.selectedExercise]
  let exerciseLinks = exercise.links.map(String)
  let links = state.links.map(String)
  let dmm = exercise.dmm.map(String)
  let diff = links.filter(link => !exerciseLinks.includes(link)).concat(exerciseLinks.filter(link => !links.includes(link)))
  let error = "Error"
  let voltage = null
  if (diff.length === 0) {
    voltage = exercise.voltage[dmm.indexOf(state.dmm.toString(0))]
    return voltage ? voltage : error
  }

  return error
}
export default nodesReducer;
