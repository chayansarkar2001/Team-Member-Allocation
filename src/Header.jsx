const Header = ({teamName,teamMemberCount})=>{
  
    return(
      <header className='container'>
        <div className="row justify-content-center mt-3 mb-4">
          <div className="col-8">
            <h1>Team Meamber Allocation</h1>
            <h3>{teamName} has {teamMemberCount} {teamMemberCount<2?'Member':'Members'}</h3>
          </div>
        </div>
      </header>
    )
  }
  export default Header