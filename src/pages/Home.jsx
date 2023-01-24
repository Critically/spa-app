import React from "react";

function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
        width: "60%",
        margin: "auto",
      }}
    >
      Тестовое задание React Проверяем начальные навыки: react, react-router
      <br />
      Реализовать приложение со следующими страницами:
      <br />
      • / - Главная: страница с неким текстом. <br />
      • /news - Страница с новостями: Перечень блоков с картинкой, заголовком и
      кратким текстом (без перехода в детальную страницу).
      <br /> Список тянуть по API (можно с https://newsapi.org/) c постраничной
      навигацией. <br />
      На сайте, в шапке или подвале реализовать ссылки: <br />• На главную (/){" "}
      <br />• Новости (/news)
      <br /> Дизайн не важен, но адаптив обязателен (в адаптиве выводим новости
      в 2 колонки) для десктопа 3 колонки. Для новостей сделать свою компоненту.
    </div>
  );
}

export default Home;