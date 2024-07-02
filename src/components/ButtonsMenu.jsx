const ButtonsMenu = ({nominal, setNominal,setShowNominal,setHeading,setShowPayment}) => {
  return(
    <div>
      <div className="grid grid-cols-2 w-full gap-5">
        {nominal.map((value,index)=>{
          return(
          <div key={index} className={`px-2 py-5 bg-slate-400 rounded-md w-full text-center cursor-pointer`} onClick={() => setShowPayment("")}>
            <p>{value}</p>
          </div>
          )
        })}
      </div>
        <button className="px-2 py-5 bg-red-400 rounded-md text-center text-white font-semibold cursor-pointer absolute bottom-5 left-[50%] translate-x-[-50%] w-[80%]"
        onClick={()=>{
          setNominal([]);
          setShowNominal(false);
          setHeading("Select Your Preferred Coin To Receive Your Crypto Loan");
        }}
        >Kembali</button>
  </div>
)
}

export default ButtonsMenu;