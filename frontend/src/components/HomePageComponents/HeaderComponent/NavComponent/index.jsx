export const Nav = () => {
  return (
    <nav className="nav">
      <div className="logo"></div>
      <div className="nav-buttons">
        <div className="free-consult-btn">
          <span className="free-consult-btn-name">Бесплатная консультация</span>
          <div className="free-consult-btn-square">
            <div className="free-consult-btn-img"></div>
          </div>
        </div>
        <div className="enter-btn">
          <span className="enter-btn-name">Вход</span>
          <div className="enter-btn-square">
            <div className="enter-btn-btn-img"></div>
          </div>
        </div>
        <div className="show-menu-btn"></div>
      </div>
    </nav>
  );
};
