// import React from "react";
import styles from "./Main.module.scss";
import { MainCard } from "./Card";

export const MainCards = () => {
  const cards = [
    {
      id: 1,
      title: "Магическая Атмосфера",
      description:
        "В нашем заведении царит магическая атмосфера наполненная вкусными ароматами",
    },
    {
      id: 2,
      title: "Лучшее качество Еды",
      description: "Качество нашей Еды - отменное!",
    },
    {
      id: 3,
      title: "Недорогая Еда",
      description:
        "Стоимость нашей Еды зависит только от ее количества. Качество всегда на высоте!",
    },
  ];
  return (
    <div>
      <div className={styles.cards}>
        {cards.map((item) => (
          <MainCard
            key={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};
