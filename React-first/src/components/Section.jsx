const Section = (props) => {
  return (
    <section>
      {/* <h1>Hello this first section part</h1> */}
      <h3>Fruits List {props.serial}:</h3>
      <ol>
        <li>{props.fruit1}</li>
        <li>{props.fruit2}</li>
        <li>{props.fruit3}</li>
        <li>{props.fruit4}</li>
        <li>{props.fruit5}</li>
      </ol>
      <hr></hr>
    </section>
  );
};

export default Section;
