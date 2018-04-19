const Instructions = ({ title, steps }) => 
  <section className="instructions">
    <h2>{title}</h2>
    {steps.map((step, index)=> 
      <p key={index}>{step}</p>)}
  </section>

export default Instructions
