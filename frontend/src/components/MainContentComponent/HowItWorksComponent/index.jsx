export const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="how-it-works-title">как это работает?</div>
      <div className="how-it-works-steps">
        <div className="step">
          <div className="step-img"></div>
          <div className="step-text">
            <div className="step-title">Выбери подходящий проект</div>
            <div className="short-underline"></div>
            <div className="step-descr">
              Если не подходит ничего из перечисленного, твой вариант Freestyle{' '}
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-text">
            <div className="step-title">Дай ИИ немного контекста</div>
            <div className="short-underline"></div>
            <div className="step-descr">
              О чем будет твой текст? Опиши ключевые характеристики и выбери тональность
            </div>
          </div>
          <div className="step-img"></div>
        </div>

        <div className="step">
          <div className="step-img"></div>
          <div className="step-text">
            <div className="step-title">Редактируй полученный текст</div>
            <div className="short-underline"></div>
            <div className="step-descr">
              Попроси ИИ сократить текст или поменять тональность, расширить какой-то пункт или
              перефразировать абзац
            </div>
          </div>
        </div>

        <div className="step">
          <div className="step-text">
            <div className="step-title">Публикуй и достигай целей!</div>
            <div className="short-underline"></div>
            <div className="step-descr">
              <div className="arrow-up-blue-img"></div>
            </div>
          </div>
          <div className="step-img"></div>
        </div>
      </div>
    </section>
  );
};
