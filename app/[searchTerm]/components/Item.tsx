import Link from "next/link";

type Props = {
  result: Result;
};

export default function Item({ result }: Props) {
  const itemTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
          target="_blank"
          className="text-xl font-bold underline text-black"
        >
          {result.title}
        </Link>
      </h2>
      <p className="text-black">{result.extract}</p>
    </div>
  );

  return result?.thumbnail?.source ? (
    <article className="m-4 max-w-lg">
      <div className="flex flex-row gap-4">
        <div className="flex flex-col justify-center">
          <img
            src={result.thumbnail.source}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
            alt={result.title}
            loading="lazy"
          />
        </div>
        {itemTextCol}
      </div>
    </article>
  ) : (
    <article className="m-4 max-w-lg">{itemTextCol}</article>
  );
}
