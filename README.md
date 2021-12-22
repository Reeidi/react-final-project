# Art Gallery

## Увод

Art Gallery е проект, създаден за арт център за деца, където те и техните родители могат да се запознаят със центъра и с преподавателите в него, да разглеждат творбите на други деца, както и да качват своите собствени произведения.

## Какво представлява?

Art Gallery е web application, базиран на `React JS` и използващ `Node.js` back-end с MongoDB база данни. Тематиката е уебсайт на арт център за деца.

## Функционалности

### `1.` Уеб приложението има няколко статични страници с информация за центъра, преподавателите и организираните събития.

### `2.` Възможност децата да споделят свои рисунки.
Информацията за рисунките се записва и в последствие изтегля от back-end-а. Само регистрирани потребители имат правото да качват снимки.

### `3.` Галерия с рисунките на децата.
Галерията е достъпна за регистрирани и нерегистрирани потребители.

### `4.` Харесване на рисунки.
Регистрираните потребители имат възможността да "харесват" рисунките в Галерията. Нерегистрираните потребители могат само да виждат колко харесвания има всяка от тях.

### `5.` "Моите рисунки".
Регистрираните потребители имат достъп до страница, съдържаща само техните рисунки.

## Екстри

### `1.` При качване или редакция на рисунка потребителя може да я види в реално време.

### `2.` Страницата за контакти освен адрес, телефон и имейл за връзка, съдържа и карта за да могат хората по-лесно да ни намерят.

#
# Имплементация

## Структура

Art Gallery е `React JS` проект, който комуникира по HTTP със back-end сървър и съответно страниците и тяхното съдържание са разделени на React компоненти.

### `1.` Основни системи
 - Error handling - обработването на грешки, възникнали при работа на приложението се случва основно чрез `ErrorBoundary` компонента, чиято работа е при грешка да показва специална страница.
 - Authentication - аутентикацията се състои от три съставни части:
   - `AuthContext`, който е **React Context**
   - `AuthProvider`, който е **React компонент**, чиято цел е да улесни използването на `AuthContext`
   - `useAuthContext`, което е **hook**, който също цели да улесни използването на `AuthContext`

    Основната логика се съдържа в `AuthProvider` компонента.

  - Routing
    - Приложението използва `React Router 6`. Използваните компоненти от библиотеката са:
      - Стандартния `BrowserRouter` компонент, сложен така, че да обхваща цялото приложение
      - `Routes` и `Route` компонентите, използвани в `App` компонента да конфигурират routing-a
    - Навигацията между страниците става чрез компонентите `Link` и `Navigate` и hook-a `useNavigate`.
    - Route guarding - става чрез компонента `RequireAuth` - позволява достъп до някои страници само на регистрирани потребители.

### `2.` Стилизация
Повечето компоненти имат собствен CSS модул за стилизация. Също така `index.js` import-ва няколко глобални CSS файла, наследени от използвания template.

### `3.` Допълнителни
Освен обособените компоненти, в приложението има и няколко други файла, разделени по съответните им папки - contexts, helpers, hooks, services. За интеграция с Google Maps е използван iframe в страницата за контакти.

#
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
