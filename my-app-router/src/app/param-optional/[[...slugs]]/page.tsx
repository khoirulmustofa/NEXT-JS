type detailParamOptionalProps = { params: { slugs: string[] } };
export default function ParamOptionalPage(props: detailParamOptionalProps) {
  const { params } = props;
  console.log(params);

  let content;

  if (params.slugs && params.slugs.length > 0) {
    content = (
      <div>
        <h1>Ini param optional</h1>
        <h2 className="bg-blue-800 text-white">Slug {params.slugs[0]}</h2>
      </div>
    );
  } else if (params.slugs && params.slugs.length > 1) {
    content = (
      <div>
        <h1>Ini param optional</h1>
        <h2 className="bg-blue-800 text-white">Slug {params.slugs[1]}</h2>
      </div>
    );
  } else {
    content = (
      <div>
        <h1>Ini param optional</h1>
        <p>Tidak ada slug yang tersedia.</p>
      </div>
    );
  }

  return content;
  
}