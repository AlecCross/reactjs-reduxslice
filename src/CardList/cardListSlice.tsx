import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/stote";

interface ICard {
    id: string;
    content?: string;
}

interface CardListState {
    cards: ICard[];
    draggedIndex: number | null;
    indicatorIndex: number | null;
}

const initialState: CardListState = {
    cards: [
        { id: "card-1", content: "Card 1" },
        { id: "card-2", content: "Card 2" },
        { id: "card-3", content: "Card 3" },
        { id: "card-4", },
        { id: "card-5", },
        { id: "card-6", },
    ],
    draggedIndex: null,
    indicatorIndex: null,
};

export const cardListSlice = createSlice({
    name: "cardList",
    initialState,
    // Поле `reducers` дозволяє визначати редуктори та генерувати відповідні дії
    reducers: {
        setCards: (state, action: PayloadAction<ICard[]>) => {
            state.cards = action.payload;
        },
        // Використовуйте тип PayloadAction, щоб оголосити вміст `action.payload`
        setDraggedIndex: (state, action: PayloadAction<number | null>) => {
            state.draggedIndex = action.payload;
        },
        // Використовуйте тип PayloadAction, щоб оголосити вміст `action.payload`
        setIndicatorIndex: (state, action: PayloadAction<number | null>) => {
            state.indicatorIndex = action.payload;
        },
        swapCards: (state) => {
            if (state.draggedIndex !== null && state.indicatorIndex !== null) {
                const newCards = state.cards.slice();
                [newCards[state.draggedIndex], newCards[state.indicatorIndex]] = [newCards[state.indicatorIndex], newCards[state.draggedIndex]];
                state.cards = newCards;
            }
            state.draggedIndex = null;
            state.indicatorIndex = null;
        },
    },
});

export const { setCards, setDraggedIndex, setIndicatorIndex, swapCards } = cardListSlice.actions;
// Наведена нижче функція називається селектором і дозволяє вибрати значення
// стан. Селектори також можна визначити вбудовано, де вони використовуються замість них
// у файлі фрагмента.
export const selectCards = (state: RootState) => state.counter;
export const selectDraggedIndex = (state: RootState) => state.counter;
export const selectIndicatorIndex = (state: RootState) => state.counter;

export default cardListSlice.reducer;
