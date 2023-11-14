const Props = {
  memberData: {},
}

export const Position = (Props) => {
  const answer = Props.memberData.terms.pop().type;
  let correct = null;

  function handleClick (event) {
    if (answer === event.target.value) {
      console.log('true');
      correct=true;
      event.target.style.backgroundColor = 'green';
    } else {
      console.log('false');
      correct=false;
      event.target.style.backgroundColor = 'red';
    }
  }


  return (
    <div className="container m-8 flex">
      <div className="row-auto">
        <p>What is this person's position?</p>
        <div className="columns-2">
          <button 
            type="button" 
            onClick={handleClick} 
            value="rep"
          > 
            Representative 
          </button>

          <button 
            type="button" 
            onClick={handleClick} 
            value="sen"
          > 
            Senator 
          </button>
        </div>
      </div>
    </div>
  )
}