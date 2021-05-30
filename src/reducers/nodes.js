const initialState = {
  terminals: [
    {x: 0, y: -20, index: 0},

    //
    {x: 68, y: 28, index: 1},
    {x: 68, y: 34.8, index: 2},
    {x: 68, y: 41.5, index: 3},
    {x: 68, y: 48.3, index: 4},

    //
    {x: 8.5, y: 67, index: 5},
    {x: 15.6, y: 67, index: 6},
    {x: 21.5, y: 67, index: 7},

    // WYE
    {x: 122, y: 21.2, index: 8},
    {x: 122, y: 24, index: 9},
    {x: 121.9, y: 29, index: 10},
    {x: 121.8, y: 31.4, index: 11},
    {x: 121.7, y: 38.2, index: 12},
    //
    {x: 121.7, y: 40.9, index: 13},
    //
    {x: 126, y: 42.2, index: 14},
    {x: 138, y: 45.6, index: 15},
    {x: 142.8, y: 46.9, index: 16},
    {x: 151.4, y: 49.3, index: 17},
    {x: 156.4, y: 50.8, index: 18},
    //
    {x: 87.2, y: 50.8, index: 19},
    {x: 92, y: 49.4, index: 20},
    {x: 101, y: 46.8, index: 21},
    {x: 105.3, y: 45.6, index: 22},
    {x: 117.2, y: 42.1, index: 23},

    // DELTA
    {x: 192.8, y: 24.6, index: 24},
    {x: 198.2, y: 28.9, index: 25},
    {x: 205.2, y: 34.9, index: 26},
    {x: 210.1, y: 39, index: 27},
    {x: 215.6, y: 43.6, index: 28},
    //
    {x: 220.8, y: 47.7, index: 29},
    {x: 210.5, y: 47.7, index: 30},
    {x: 196.8, y: 47.7, index: 31},
    {x: 187, y: 47.7, index: 32},
    {x: 176, y: 47.7, index: 33},
    //
    {x: 166.5, y: 47.7, index: 34},
    {x: 171.5, y: 43, index: 35},
    {x: 178, y: 37.2, index: 36},
    {x: 183, y: 33, index: 37},
    {x: 188.3, y: 28.2, index: 38},

    // Load Phase R
    // upper
    {x: 41.2, y: 60, index: 39},
    {x: 56, y: 60, index: 40},
    {x: 73.4, y: 60, index: 41},
    {x: 90.6, y: 60, index: 42},
    // lower
    {x: 41.2, y: 66.3, index: 43},
    {x: 56, y: 66.3, index: 44},
    {x: 73.4, y: 66.3, index: 45},
    {x: 90.6, y: 66.3, index: 46},

    // Load Phase S
    // upper
    {x: 108.4, y: 60, index: 47},
    {x: 124.3, y: 60, index: 48},
    {x: 139.9, y: 60, index: 49},
    {x: 156.7, y: 60, index: 50},
    // lower
    {x: 108.4, y: 66.3, index: 51},
    {x: 124.3, y: 66.3, index: 52},
    {x: 139.9, y: 66.3, index: 53},
    {x: 156.7, y: 66.3, index: 54},

    // Load Phase T
    // upper
    {x: 173.4, y: 60, index: 55},
    {x: 189.4, y: 60, index: 56},
    {x: 205.5, y: 60, index: 57},
    {x: 222.5, y: 60, index: 58},
    // lower
    {x: 173.4, y: 66.3, index: 59},
    {x: 189.4, y: 66.3, index: 60},
    {x: 205.5, y: 66.3, index: 61},
    {x: 222.5, y: 66.3, index: 62},

    // E
    {x: 41.2, y: 28, index: 63},
    {x: 41.2, y: 35, index: 64},
    {x: 41.2, y: 41.8, index: 65},

    // S
    {x: 54.4, y: 28, index: 66},
    {x: 54.4, y: 34.8, index: 67},
    {x: 54.4, y: 41.5, index: 68},

    // Oscilloscope
    {x: -5, y: 8.5, index: 66},
    {x: 4, y: 8.5, index: 67},
    {x: 13, y: 8.5, index: 68},
  ],
  links: [],
  jumpers: []
}
const nodesReducer = (state = initialState, action) => {
  return state
}
export default nodesReducer;
