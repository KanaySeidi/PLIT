const MainCards = () => {
  const cards = [
    {
      id: 1,
      title: "FRONT-END",
      img: "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=400",
    },
    {
      id: 2,
      title: "BACK-END",
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "Мобильная разработка",
      img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Мехатроника и робототехника",
      img: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 5,
      title: "Технология Дизайна",
      img: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 6,
      title: "Системный администратор",
      img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 7,
      title: "Информационная безопастность",
      img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 8,
      title: "Автослесарь по ремонту автомобилей",
      img: "https://avatars.mds.yandex.net/i?id=99444fc9fba513351b623474c3bfbf45ccade337-9541119-images-thumbs&n=13",
    },
    {
      id: 9,
      title: "Эксплуатация,техническое обслуживание и ремонт спец техники",
      img: "https://avatars.mds.yandex.net/i?id=c1f8eb382f66f9dd43d013eb7c33bc63_l-5162789-images-thumbs&n=13",
    },
  ];

  return (
    <>
      <div className="w-full px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
          {cards.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="aspect-[4/3] w-full">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 brightness-75 group-hover:brightness-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-lg sm:text-xl font-semibold text-center leading-tight">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MainCards;
