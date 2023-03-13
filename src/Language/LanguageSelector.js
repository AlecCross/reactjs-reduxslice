import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectLanguage } from './languageSlice'

function LanguageSelector() {
    const selectedLanguage = useSelector((state) => state.language.selectedLanguage)
    const dispatch = useDispatch()

    const handleLanguageChange = (e) => {
        dispatch(selectLanguage(e.target.value))
    }

    return (
        <div >
            <label>
                Select your preferred programming language:
                <select onChange={handleLanguageChange} >
                    <option value="JavaScript">JavaScript</option>
                    <option value="Python">Python</option>
                    <option value="Java">Java</option>
                </select>
            </label>
        </div>
    )
}

export default LanguageSelector

// Цей код - приклад використання бібліотеки Redux та функціональних компонентів в React.
// useSelector та useDispatch - це React hooks, які дозволяють забрати деякі дані з Redux store та надіслати дії до Redux store в функціональних компонентах.
// useSelector приймає функцію, яка вибирає певну частину стану з Redux store, яка необхідна для компонента. У даному випадку, функція передається, щоб отримати значення selectedLanguage з частини стану, що управляється languageSlice.
// useDispatch - це hook, який повертає функцію dispatch. Ця функція використовується для відправки дій (actions) до Redux store.
// handleLanguageChange - це функція, яка викликає dispatch для відправлення дії selectLanguage до Redux store зі значенням, яке було вибрано у select елементі.
// languageSlice - це slice, що описує частину стану додатка, яка відповідає за обрану мову програмування. createSlice - це функція з бібліотеки @reduxjs/toolkit, яка допомагає спростити створення slice та відповідних дій.
// selectLanguage - це дія (action), яку можна відправляти до Redux store. Ця дія містить тип "language/selectLanguage" та дані payload, які містять вибрану мову програмування.
// У редукторі selectLanguage обробляє дію selectLanguage та оновлює частину стану selectedLanguage з вибраною мовою програмування.
// Отже, код реалізує можливість вибору мови програмування та зберігає вибрану мову в Redux store.
