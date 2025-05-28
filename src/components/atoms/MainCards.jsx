import { Link } from "react-router-dom";

const MainCards = () => {
  const cards = [
    {
      id: 1,
      title: "FRONT-END",
      img: "https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=400",
      path: "/fr",
    },
    {
      id: 2,
      title: "BACK-END",
      img: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/br",
    },
    {
      id: 3,
      title: "Мобильная разработка",
      img: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/md",
    },
    {
      id: 4,
      title: "Мехатроника и робототехника",
      img: "https://images.pexels.com/photos/1476321/pexels-photo-1476321.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/mr",
    },
    {
      id: 5,
      title: "Технология Дизайна",
      img: "https://images.pexels.com/photos/57690/pexels-photo-57690.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/td",
    },
    {
      id: 6,
      title: "Системный администратор",
      img: "https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/sa",
    },
    {
      id: 7,
      title: "Информационная безопасность",
      img: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
      path: "/in",
    },
    {
      id: 8,
      title: "Автослесарь по ремонту автомобилей",
      img: "https://avatars.mds.yandex.net/i?id=99444fc9fba513351b623474c3bfbf45ccade337-9541119-images-thumbs&n=13",
      path: "/am",
    },
    {
      id: 9,
      title: "Эксплуатация, техническое обслуживание и ремонт спец техники",
      img: "https://avatars.mds.yandex.net/i?id=c1f8eb382f66f9dd43d013eb7c33bc63_l-5162789-images-thumbs&n=13",
      path: "/ex",
    },
  ];

  return (
<div className="w-full flex flex-wrap gap-6 justify-center p-6 bg-gray-100">
  {cards.map((item) => (
    <Link
      to={item.path}
      key={item.id}
      aria-label={`Navigate to ${item.title} page`}
    >
      <div className="w-80 h-60 rounded-xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl relative group">
        {/* Image Section */}
        <img
          src={item.img}
          alt={item.title}
          className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition duration-300"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent"></div>
        {/* Text Section */}
        <div className="absolute bottom-0 w-full p-3">
          <p className="text-white text-base sm:text-lg font-semibold text-center line-clamp-2">
            {item.title}
          </p>
        </div>
      </div>
    </Link>
  ))}
</div>
  );
};

export default MainCards;
