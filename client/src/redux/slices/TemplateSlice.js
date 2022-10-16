//External import
import { createSlice } from "@reduxjs/toolkit";

//Internal Import
import template1 from "../../assets/images/template/1.png";
import template2 from "../../assets/images/template/2.png";

const TemplateSlice = createSlice({
  name: "Template",
  initialState: {
    TemplateList: [
      {
        _id: 1,
        title: "Simple Template 1",
        thumbnail: template1,
        design: "",
      },
      {
        _id: 2,
        title: "Simple Template 2",
        thumbnail: template2,
      },
    ],
  },
  reducers: {
    SetTemplateList(state, action) {
      state.TemplateList = action.payload;
    },
    RemoveTemplateList(state, action) {
      state.TemplateList = [];
    },
  },
});

export const { SetTemplateList, RemoveTemplateList } = TemplateSlice.actions;
export default TemplateSlice.reducer;
