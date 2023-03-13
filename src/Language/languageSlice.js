import { createSlice } from '@reduxjs/toolkit'

const languageSlice = createSlice({
    name: 'language',
    initialState: { selectedLanguage: null },
    reducers: {
        selectLanguage: (state, action) => {
            state.selectedLanguage = action.payload
        },
    },
})

export const { selectLanguage } = languageSlice.actions
export default languageSlice.reducer

// У вашому прикладі selectLanguage є ім'ям генератора дії (action creator) та ім'ям дії, 
// яка виконується редуктором, однак вони могли б мати різні назви, якщо вам здається, 
// що це зробить код більш зрозумілим. 
// Наприклад, замість selectLanguage генератор дії можна було б назвати updateSelectedLanguage, 
// а дію, яку виконує редуктор, - setSelectedLanguage. Однак, слід мати на увазі, 
// що імена дій та генераторів дій є частинами публічного API Redux store, 
// тому назви повинні бути зрозумілими та нессти відповідний зміст.
