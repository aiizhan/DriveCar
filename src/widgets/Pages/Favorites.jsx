import Container from "../../shared/helpers/Container";

const Favorites = () => {
  return (
    <Container>
      <div className=" p-10 text-white flex flex-col">
        <div className="  flex items-center w-full max-w-7xl mb-6">
          <div className="w-[500px] h-[1px] bg-white"></div> {/* Левая линия */}
          <h1 className="px-4 text-2xl font-bold text-center whitespace-nowrap">
            О КОМПАНИИ
          </h1>
          <div className="w-[500px] h-[1px] bg-white"></div> {/* Правая линия */}
        </div>
        {/* Линия с заголовком по центру */}

        {/* Текст о компании */}
        <p className=" text-xl mt-10">
          Добро пожаловать в Бишкек AUTO – Авторынок – это онлайн авторынок, где собрана подробная
          информация о подержанных и новых машинах, ценах и доступных комплектациях. У нас вы сможете
          разместить бесплатные объявления о покупке, аренде, продаже авто, коммерческого транспорта,
          спецтехники и авто услуг по всему Кыргызстану. На сайте вы сможете подобрать легковые автомобили
          с пробегом, новые, на обмен и в рассрочку. Продажа авто в Бишкеке с фото, в рассрочку и дешево.
        </p>
        <div className=" mt-10 text-lg">
           <p>Телефон: +996 XXX XXX XXX</p>
          <p>Email: info@bishkekrealestate.kg</p>
          <p>Адрес: г. Бишкек, ул. Ленина, д. 123</p>
        </div>

        <p className="mt-8">С уважением,</p>
        <p>Команда Бишкек AUTO</p>
      </div>
    </Container>
  );
};

export default Favorites;
