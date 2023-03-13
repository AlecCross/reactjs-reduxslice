import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from "./app/stote"
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// ReduxSlice - це функція, що допомагає швидко створити reducer для стору Redux. 
//В вашому випадку, файл languageSlice.js містить створений з допомогою функції createSlice reducer для обробки дій, пов'язаних із вибором мови програмування.
// При створенні reducer за допомогою createSlice, функція автоматично генерує дії (actions), що відповідають різним частинам стану (state) і редуктор (reducer), який обробляє ці дії і повертає новий стан згідно з дією, яку було виконано.
// У вашому коді selectedLanguage є частиною стану, що зберігається в Redux Store. 
//LanguageSelector.js підключається до стору Redux, використовуючи useSelector і useDispatch, щоб зчитувати поточний вибраний стан мови та відправляти дії на зміну стану відповідно.
// У випадку зміни вибраної мови програмування handleLanguageChange викликає dispatch(selectLanguage(e.target.value)), яка відправляє дію до редуктора languageReducer з викликом методу selectLanguage, який змінює вибрану мову у стані, що зберігається в Redux Store. Цей стан потім може використовуватись у всьому додатку, де є підключення до Redux Store, для забезпечення спільного стану між різними компонентами.
