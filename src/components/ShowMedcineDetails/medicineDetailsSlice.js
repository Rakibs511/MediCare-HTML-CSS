import { createSlice } from "@reduxjs/toolkit"

const initialState={
    showMedicineDetails:false,
}

export const medicineDetailsSlice=createSlice({
    name:'MedicineDetails',
    initialState,
    reducers:{
        setShowMedicineDetails:(state)=>{
            state.showMedicineDetails=!state.showMedicineDetails;
        }
    }
})

export const {setShowMedicineDetails}=medicineDetailsSlice.actions;
export default medicineDetailsSlice.reducer;