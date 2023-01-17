import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import movieApi from "../../common/apis/movieApi";
// import { APIKey } from "../../common/apis/MovieApiKey";

const initialState = {
    series: {},
}



const webseriesSlice = createSlice({
  name: "webSeries",
  initialState,
  reducers: {
    addWebseries: (state, { payload}) => {
        state.series = payload; 
    }
    },
  });

  export const { addWebseries } = webseriesSlice.actions;
  export const getAllWebseries = (state ) =>  state.series.series;
  export default webseriesSlice.reducer;