type parameters = { params: { slug: string } };
export default function KategoriPage(props: parameters) {
  const { params } = props;
  console.log(params);
  
  return (
    <div>
      <h1>Ini Produk kategori </h1>
      <h2 className="bg-blue-800 text-white">Slug {params.slug}</h2>
    </div>
  );
}
