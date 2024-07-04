import { HelmetProvider, Helmet } from "react-helmet-async";
const Admin = () => {
  const array = [1,2,3,4]
  return(
    <HelmetProvider>
      <Helmet>
        <title>Admin</title>
      </Helmet>
      <section className="flex justify-center h-[100vh] w-[100vw] bg-black">
        <section className="relative bg-white border border-black py-14 px-8 w-[640px] rounded-lg flex flex-col gap-5 items-center mx-auto max-h-screen overflow-x-auto no-scrollbar">
        <div className="flex h-full overflow-x-scroll">
          <div className="min-w-full border border-slate-300 px-5">
            <h1 className="text-center mb-5">admin page</h1>
            {array.map((value, index)=>{
              return(
              <div key={index} className="bg-slate-200 mb-3 grid grid-cols-8 gap-3 rounded-md px-3 py-2">
                <h1 className="col-span-2">no kontak</h1>
                <p className="col-span-6">08126312351623</p>
                <h1 className="col-span-2">Deskripsi</h1>
                <p className="col-span-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ipsa reiciendis maiores quasi dolorum, ab cum deserunt! Nesciunt, quia molestias.</p>
              </div>
              )
            })}
          </div>
          <div className="min-w-full border border-slate-300">
            <h1>admin page 2</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores aut nam explicabo beatae incidunt laboriosam modi, quidem, doloribus dolorum impedit minima aperiam quae odit voluptatem expedita? Beatae minus libero, vero commodi neque labore exercitationem dolor quasi possimus nesciunt pariatur vitae! Deleniti reprehenderit aut provident veritatis voluptas accusamus, ducimus labore, commodi inventore, fugiat repudiandae perferendis ex. Dignissimos obcaecati dolor eveniet totam natus corporis eius animi? Alias libero possimus quam at ut ipsa veritatis enim! Deleniti, asperiores? Quidem aliquam beatae architecto pariatur enim tenetur sit iure quisquam incidunt laboriosam quas, maxime fugiat illum sint nulla veritatis eaque sunt voluptas aperiam voluptate?</p>
          </div>
        </div>
        </section>
      </section>
    </HelmetProvider>
  )
}
export default Admin;