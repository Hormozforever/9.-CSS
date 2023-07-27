// import './InfoBox.scss';
import classes from './InfoBox.module.scss';
console.log("classes",classes);
export default function InfoBox({ title = '', headingLevel = 2, children }) {
  const HeadingTag = `h${headingLevel}`;

  return (
    <section className={classes.box}>
      {title && <HeadingTag className={classes.boxTitle}>{title}</HeadingTag>}
      <div>{children}</div>
    </section>
  );
}
