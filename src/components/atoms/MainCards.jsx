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
      <div className="w-full flex flex-wrap gap-10 justify-center">
        {cards.map((item) => (
          <div
            key={item.id}
            className="w-96 h-72 bg-bordo rounded-lg shadow-2xl cursor-pointer transition duration-500 relative transform hover:-translate-y-3"
          >
            <div className="w-full h-56 flex justify-center items-center">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover rounded-lg brightness-50 hover:brightness-100 transition duration-500"
              />
            </div>
            <div className="flex justify-center items-end ">
              <p className="text-white text-lg text-center  font-semibold mb-2 mt-1">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainCards;
