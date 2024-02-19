type parameters = { params: { slugs: string } };
export default function ParamBanyakPage(props: parameters) {
  const { params } = props;
  console.log(params);
  
  return (
    <div>
      <h1>Ini Produk kategori </h1>
      <h2 className="bg-blue-800 text-white">Slug {params.slugs[0]}</h2>
      <h2 className="bg-blue-800 text-white">Slug {params.slugs[1]}</h2>
    </div>
  );
}
