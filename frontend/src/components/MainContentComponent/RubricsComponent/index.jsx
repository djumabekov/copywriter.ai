import { Link } from "react-router-dom";

export const Rubrics = () => {
  return (
    <section className="rubrics">
      <div className="text">Рубрики</div>
      <div className="grid">
        <div className="grid-block">
          <div className="rubric-name">
            <div className="rubric-title">Пост для блога</div>
            <div className="edit-img"></div>
          </div>
          <div className="descr">
            Создавай вовлекающий контент для своих соцсетей за считанные минуты
          </div>
          <div className="link">
            <Link to="/projects" className="link-name">
              Попробовать бесплатно
            </Link>
            <div className="arrow-up-blue-img"></div>
          </div>
        </div>
        <div className="grid-block">
          <div className="rubric-name">
            <div className="rubric-title">Реклама в соцсетях</div>
            <div className="smile-img"></div>
          </div>
          <div className="descr">
            Рекламные объявления в социальных сетях, подходят для таргетированной рекламы
          </div>
          <div className="link">
            <Link to="/projects" className="link-name">
              Попробовать бесплатно
            </Link>
            <div className="arrow-up-blue-img"></div>
          </div>
        </div>
        <div className="grid-block">
          <div className="rubric-name">
            <div className="rubric-title">Сторителлинг</div>
            <div className="sms-img"></div>
          </div>
          <div className="descr">
            Mощный инструмент для продвижения вашего бренда и привлечения новых клиентов
          </div>
          <div className="link">
            <Link to="/projects" className="link-name">
              Попробовать бесплатно
            </Link>
            <div className="arrow-up-blue-img"></div>
          </div>
        </div>
        <div className="grid-block">
          <div className="rubric-name">
            <div className="rubric-title">Email-рассылки</div>
            <div className="email-img"></div>
          </div>
          <div className="descr">Краткие и информативные тексты с призывом к действию</div>
          <div className="link">
            <Link to="/projects" className="link-name">
              Попробовать бесплатно
            </Link>
            <div className="arrow-up-blue-img"></div>
          </div>
        </div>
        <div className="grid-block">
          <div className="rubric-name">
            <div className="rubric-title">Текст для лендинга</div>
            <div className="list-img"></div>
          </div>
          <div className="descr">
            Максимально продающие тексты для веб-страниц, которые используются для продвижения
            конкретной продукции или услуги
          </div>
          <div className="link">
            <Link to="/projects" className="link-name">
              Попробовать бесплатно
            </Link>
            <div className="arrow-up-blue-img"></div>
          </div>
        </div>
        <div className="grid-block bg-blue ">
          <div className="rubric-name ">
            <div className="rubric-title fg-white">SEO-тесты</div>
            <div className="geo-img"></div>
          </div>
          <div className="descr fg-white">
            Оптимизиуруй сайт для поисковых систем и привлеки свежий трафик
          </div>
          <div className="link">
            <Link to="/projects" className="link-name fg-white">
              Попробовать бесплатно
            </Link>
            <div className="arrow-up-blue-img"></div>
          </div>
        </div>
        <div className="grid-block">
          <div className="rubric-name">
            <div className="rubric-title">Описание продукта</div>
            <div className="bag-img"></div>
          </div>
          <div className="descr">
            Создай описание продукта, которое попадет в цель и обеспечит высокую конверсию
          </div>
          <div className="link">
            <Link to="/projects" className="link-name">
              Попробовать бесплатно
            </Link>
            <div className="arrow-up-blue-img"></div>
          </div>
        </div>
        <div className="grid-block">
          <div className="rubric-name">
            <div className="rubric-title">Брейншторм</div>
            <div className="star-img"></div>
          </div>
          <div className="descr">
            Если у тебя нет идей для названий продукта, стартапа или просто не знаешь, о чем
            написать пост
          </div>
          <div className="link">
            <Link to="/projects" className="link-name">
              Попробовать бесплатно
            </Link>
            <div className="arrow-up-blue-img"></div>
          </div>
        </div>
        <div className="grid-block">
          <div className="rubric-name">
            <div className="rubric-title">Позиционирование</div>
            <div className="user-img"></div>
          </div>
          <div className="descr">
            Определи уникальность своего продукта или услуги и отстройся от конкурентов
          </div>
          <div className="link">
            <Link to="/projects" className="link-name">
              Попробовать бесплатно
            </Link>
            <div className="arrow-up-blue-img"></div>
          </div>
        </div>
        <div className="grid-block">
          <div className="rubric-name">
            <div className="rubric-title">Анализ ЦА</div>
            <div className="smile-img"></div>
          </div>
          <div className="descr">
            Узнай, кому нужен твой продукт, найди истинные боли и потребности каждого сегмента ЦА
          </div>
          <div className="link">
            <Link to="/projects" className="link-name">
              Попробовать бесплатно
            </Link>
            <div className="arrow-up-blue-img"></div>
          </div>
        </div>
        <div className="doubleblock">
          <div className="title">
            <div className="pro-img"></div>
            Freestyle
          </div>
          <div className="descr">Cпроси меня что угодно</div>

          <div className="link">
            <Link to="/projects" className="link-name">
              Попробовать
            </Link>
            <div className="arrow-left-white-img"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
