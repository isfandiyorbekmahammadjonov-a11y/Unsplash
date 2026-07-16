import { createSlice } from "@reduxjs/toolkit";
const data = JSON.parse(localStorage.getItem("gallery"));
console.log(data);
const initialState = {
  gallery: data,
};
export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    dowlands: (state, action) => {
      const item = state.gallery.find((item) => item.id === action.payload);
      if (item) {
        item.downloaded = true;
      }
      localStorage.setItem("gallery", JSON.stringify(state.gallery));
    },
    like: (state, action) => {
      const item = state.gallery.find((item) => item.id === action.payload);
      if (item) {
        item.liked = !item.liked;
      }
      localStorage.setItem("gallery", JSON.stringify(state.gallery));
    },
  },
});
export const { dowlands, like } = gallerySlice.actions;
export default gallerySlice.reducer;
