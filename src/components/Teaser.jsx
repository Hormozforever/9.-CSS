export default function Teaser({
  image,
  title,
  children,
  highlight = false,
  headingLevel = 2,
}) {
  const cssClasses = `teaser ${highlight ? 'teaser--highlight' : ''}`;

  const HeadingTag = `h${headingLevel}`;

  return (
    <article className={cssClasses}>
      {image && <div className="teaser__image">{image}</div>}
      <div className="teaser__content">
        {title && <HeadingTag className="teaser__title">{title}</HeadingTag>}
        {children}
      </div>
    </article>
  );
}
