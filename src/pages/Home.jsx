import { useState } from "react";
import ButtonsMenu from "../components/ButtonsMenu";

const Home = () => {
  const [showTerm, setShowTerm] = useState(false);
  const [showNominal, setShowNominal] = useState(false);
  const [showPayment, setShowPayment] = useState('-translate-y-[200%]');
  const [nominal, setNominal] = useState([]);
  const [heading, setHeading] = useState("Select Your Preferred Coin To Receive Your Crypto Loan")

  const walletMenu = [
    {
      nama : ['USDT','Tether USDT'],
      nominal : ["1000 USDT","2000 USDT","3000 USDT","4000 USDT"]
    },
    {
      nama : ['BNB','BNB Smart Chain'],
      nominal : ["1000 BNB","2000 BNB","3000 BNB","4000 BNB"]
    },
    {
      nama : ['BTC','Bitcoin'],
      nominal : ["1000 BTC","2000 BTC","3000 BTC","4000 BTC"]
    },
    {
      nama : ['ETH','Ethereum'],
      nominal : ["1000 ETH","2000 ETH","3000 ETH","4000 ETH"]
    },
  ]

  return(
    <>
      <div className="text-center">
        <h1>Selamat Datang Di Loan Crypto</h1>
        <p>Cek <span className="text-blue-500 cursor-pointer" onClick={()=>{setShowTerm(!showTerm)}}>Syarat dan ketentuan</span></p>
        <p>{heading}</p>
      </div>
      <div className="w-full">
        {showNominal == true  ? '' : 
          <div className="grid grid-cols-2 w-full gap-5">
            {walletMenu.map((value,index)=>{
            return(
            <div key={index} className={`px-2 py-5 bg-slate-400 rounded-md w-full text-center cursor-pointer`} onClick={()=>{
              setNominal(value.nominal);
              setShowNominal(true);
              setHeading("Select How Much Loan You Want To Get")
            }}>
              <p>{value.nama[0]}</p>
              <p>{value.nama[1]}</p>
            </div>
            )
          })}
          </div>
        }
        {showNominal == true ? 
        <ButtonsMenu nominal={nominal} setNominal={setNominal} setShowNominal={setShowNominal} setHeading={setHeading} setShowPayment={setShowPayment}/> :
        ''
        }


      </div>

      <div className={`absolute bg-white px-5 ${showPayment} transition-all duration-300 h-[92vh]`}>
        <h1 className="text-center font-bold">Network Fee Payment</h1>
        <p>A network fee is required for the loan process to be completed. Pay the required fee to receive your loan.</p>
        <h1 className="font-bold mt-2">Network Fee Payment Address</h1>
        <p>Pay the network fee to any of the token wallet address :</p>
        <h2>𝐔𝐒𝐃𝐓 (𝐓𝐫𝐨𝐧):</h2>
        <p>T9zikMDBtFx9XTvrqLHqwbMrz1gBPNudJW</p>
        <h2>𝐔𝐒𝐃𝐓(𝐁𝐄𝐏𝟐𝟎):</h2>
        <p>0xA6345BaAB2d18E5e5Eb8A445CcBf3E7E16834104</p>
        <h2>𝐓𝐑𝐎𝐍(𝐓𝐑𝐗):</h2>
        <p>T9zikMDBtFx9XTvrqLHqwbMrz1gBPNudJW</p>
        <h2>𝐁𝐓𝐂:</h2>
        <p>bc1q7wy3j6sx4w4tcrj5w7rxw9tq4xcxcguxlxykp3</p>
        <h2>𝐁𝐍𝐁:</h2>
        <p>0xA6345BaAB2d18E5e5Eb8A445CcBf3E7E16834104</p>
        <h2>𝐄𝐓𝐇:</h2>
        <p>0xA6345BaAB2d18E5e5Eb8A445CcBf3E7E16834104</p>

        <form action="" className="grid mb-10">
          <label htmlFor="wallet-address" className="font-bold mt-2">Input Your Wallet Address Here To Receive The Loan :</label>
          <input type="text" id="wallet-address" className="border border-slate-400 rounded-md px-2 py-2"/>
          <label htmlFor="wallet-address" className="font-bold mt-2">Input Your Fee Payment hash Here :</label>
          <p className="text-red-500 text-sm">*Proses validasi membutuhkan waktu sekitar 1-2 jam</p>
          <input type="text" id="wallet-address" className="border border-slate-400 rounded-md px-2 py-2"/>
          <button className="bg-green-500 text-white font-semibold py-2 rounded-md mt-5">Send</button>
        </form>
      </div>

      <div className={`absolute bg-white px-5 grid ${showTerm ? '':'hidden'}`}>
        <h1 className="text-center mb-5">Syarat & Ketentuan</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor quasi non deleniti quam explicabo saepe veritatis nostrum quas commodi! Quaerat quod ea molestias. Expedita nihil enim iste. Doloribus quas unde voluptas obcaecati quisquam eveniet voluptates, harum nobis libero magnam voluptatibus! Id esse at delectus commodi repellendus ex in ea, quibusdam facilis pariatur dolorem voluptas aperiam odit saepe dolores quasi molestiae accusantium quod! Quis perspiciatis dolorem similique nihil ab inventore, quae iste provident autem atque, est architecto libero quibusdam obcaecati soluta nesciunt at quo labore! Magnam ea, aut praesentium consequuntur quae voluptatum quaerat deleniti. Saepe recusandae quaerat nesciunt autem praesentium? Natus explicabo vel maiores voluptatum cum consequatur veniam, officiis nihil, corrupti iusto, molestias doloribus illum voluptates nemo minus tenetur ducimus non libero? Ipsa laborum consequuntur eveniet veritatis non exercitationem magni necessitatibus iure eos sint porro vitae labore aperiam, quas rerum molestias nihil adipisci sequi reprehenderit aspernatur. Totam facere laborum, animi voluptas labore nihil assumenda consectetur cumque fuga eligendi dolorem natus similique, repudiandae quod veniam veritatis sit ab nulla corrupti odit itaque obcaecati quaerat omnis! Quam eligendi voluptatem rem debitis ipsam fugiat numquam, blanditiis nesciunt saepe quibusdam aliquid vero ipsum dignissimos autem repellendus, nulla necessitatibus incidunt, architecto corporis. Reprehenderit illo recusandae laborum in, soluta exercitationem laboriosam natus impedit enim. A, sed. Repudiandae, porro mollitia aspernatur distinctio consectetur at harum inventore! Eligendi voluptate voluptas repellendus odio repellat assumenda aliquam. Eius numquam laboriosam distinctio fugiat esse facere, quam, minima natus autem veniam aliquid, voluptatum at qui nisi inventore incidunt! Tempore, in cumque! Quaerat veniam impedit cum in? Voluptates non ducimus, magni amet, explicabo, velit natus quisquam error molestiae praesentium cupiditate quae totam minima a sequi doloremque vitae assumenda quis! Fuga nesciunt dolores iste aliquid quo, vero libero cumque possimus beatae perspiciatis voluptates necessitatibus, quidem ducimus hic deserunt quisquam, eaque similique id. Eius repellat autem, consequuntur harum deserunt consequatur assumenda ullam nisi facilis tempore nostrum suscipit necessitatibus, pariatur, debitis aut numquam quo distinctio adipisci. Quae maiores illo hic earum quis reiciendis dolorem itaque, deleniti odio sapiente quos! Odio nam, labore quidem exercitationem deserunt maxime aliquam. Quisquam aliquid enim et soluta, quae pariatur expedita velit nobis. Ipsum quam provident tenetur laboriosam qui nobis tempora odio! Eligendi, architecto ut. Nam quis harum ipsa provident vero quisquam quod, nulla in hic sint explicabo assumenda minima pariatur qui incidunt rem. Quasi, repellat quas! Minima sint ipsam fuga ab officiis? Fuga consectetur illum ad quidem dignissimos mollitia, qui quia voluptatum ea, a voluptatem suscipit saepe. Quibusdam earum, quod, hic placeat inventore ducimus recusandae, asperiores modi sapiente tempore laudantium atque odit nam rerum tempora repudiandae quidem quisquam nihil obcaecati voluptatum necessitatibus excepturi vero ab facilis? Beatae, reiciendis numquam nemo illo totam esse nihil pariatur id debitis sint quibusdam vel nesciunt dolor dignissimos iusto qui ab optio maiores a autem placeat, expedita est sapiente odit. Ratione ducimus minima perspiciatis dolore odit. Vitae sequi voluptatem aperiam. Consectetur adipisci sit earum aspernatur. In iste obcaecati aperiam odio libero debitis eveniet saepe dolor quibusdam. Tempore, aliquid sit nisi perferendis voluptatem consectetur, asperiores, nobis dolore inventore sapiente hic aut suscipit quae sunt ratione! Laboriosam dignissimos eius rerum accusantium itaque ullam dolorem quisquam laudantium, aperiam laborum nisi est maxime, expedita sunt deserunt numquam iste esse ducimus, blanditiis sequi ipsam vero? Voluptas nesciunt unde autem itaque placeat reiciendis, similique excepturi aperiam voluptate veritatis! Ut repellat sunt veritatis explicabo sapiente aliquid impedit accusantium, incidunt, hic adipisci architecto quod eum qui aut consectetur sed deserunt vero? Nihil suscipit eveniet beatae nostrum cum perspiciatis minima. Consequatur dolore deleniti assumenda ducimus, placeat dignissimos in architecto eligendi delectus. Nemo omnis quae quod impedit fugiat. Eligendi porro velit ducimus in numquam esse labore molestiae. Sequi explicabo, quos eligendi numquam quam dolor! Quis, repellat! Temporibus ducimus, quos nesciunt nihil assumenda totam expedita voluptate laboriosam ipsam perferendis ad reiciendis libero. Esse, non. Nisi pariatur aliquam facilis perferendis impedit earum, eveniet alias nam id dolore tenetur perspiciatis minima a, expedita molestiae minus atque error quisquam rerum ea magnam asperiores voluptas. Quia explicabo, ratione eum impedit minus nihil ipsum ipsam iure nam magnam repellat illum, ut alias error, fugiat cum eveniet numquam eaque veritatis vel libero a nulla qui unde. Praesentium sapiente consequuntur corporis? Distinctio labore ratione animi corrupti sint error ullam qui soluta ipsam harum earum dolorum deserunt vel modi voluptas corporis, ad similique. Laudantium porro quae nihil ab, voluptatibus quisquam earum nisi sit placeat explicabo velit omnis odit quas fugit. Earum voluptatibus, tempora reprehenderit ipsum natus exercitationem. Itaque quisquam illo sit, at autem voluptas. Veniam possimus ipsam cum eos dolores asperiores, quidem id est provident, et ipsum autem illum, ullam nulla optio quis corrupti tenetur accusantium aut voluptatibus! Quae non quas tempora consectetur delectus nostrum in veniam dolor laborum, commodi obcaecati beatae eveniet unde cupiditate sunt animi deserunt. Nulla obcaecati consequatur vel repudiandae? Facilis molestias atque laboriosam error facere nulla ea magni vero, animi officiis ullam, itaque nostrum voluptatem fugiat in id nemo excepturi quaerat sunt molestiae consectetur! Voluptatibus commodi ullam, facilis quas quo aliquam repudiandae, ipsa excepturi temporibus praesentium est hic sunt impedit quia maxime officiis possimus iste! Similique, enim maxime? Magni quos, ipsum harum corporis quibusdam rem, animi odio enim excepturi voluptates perspiciatis commodi quae. Tempora deserunt alias eum ipsa placeat corporis laudantium. Minima pariatur, reiciendis necessitatibus explicabo quas nam aperiam a recusandae commodi eligendi distinctio veniam, corrupti id blanditiis tempore perferendis vel incidunt, officiis beatae nemo laborum. Dolor labore earum porro cum nemo quas consequatur sunt, molestiae qui architecto minima repellendus facilis nesciunt quo in corporis consectetur magnam, explicabo, provident laborum fugit placeat libero! Modi, at quae quod reprehenderit non, autem sed eius dolor magni ducimus, ipsum nemo odit sint exercitationem inventore placeat quia eos ad reiciendis distinctio possimus molestias. Quas alias quos odit temporibus repellat qui veritatis sit cum corporis reiciendis deleniti voluptatum architecto vel repudiandae quis impedit nihil sed est, iusto ut consequuntur. Quod asperiores exercitationem autem quo provident aperiam repellendus pariatur temporibus laborum vero laboriosam facere omnis consectetur nesciunt placeat aliquid atque consequuntur sint error, eos quae nulla sit ea enim! Quibusdam totam qui maxime quae quaerat, accusamus cupiditate?</p>
        <button className="bg-green-500 text-white px-8 py-2 rounded-md w-fit mx-auto my-5" onClick={()=>{setShowTerm(!showTerm)}}>OK</button>
      </div>
    </>
  )
}

export default Home;