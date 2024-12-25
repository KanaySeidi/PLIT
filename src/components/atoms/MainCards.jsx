const MainCards = () => {
  return (
    <div className="w-64 h-64 bg-bordo rounded-lg">
      <div className="w-56 h-56 flex justify-center items-center">
        <img
          src="https://images.pexels.com/photos/461064/pexels-photo-461064.jpeg?auto=compress&cs=tinysrgb&w=400"
          alt=""
          className="w-full h-full object-cover rounded-lg brightness-50 hover:brightness-100"
        />
      </div>
      <div className="flex justify-center items-end">
        <p className="text-white text-lg font-semibold mb-4">FRONT-END</p>
      </div>
    </div>
  );
};

export default MainCards;
