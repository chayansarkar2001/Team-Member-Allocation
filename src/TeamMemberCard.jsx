import maleProfile from './images/maleProfile.jpg';
import femaleProfile from './images/femaleProfile.jpg';

const TeamMemberCard = ({el,selectedTeam,handleCardClick})=>{
  return (
    <div key={el.id} id={el.id} className={(el.teamName===selectedTeam ? "card m-2 standout" : "card m-2")} style={{cursor:"pointer"}} onClick={handleCardClick}>
      <img src={el.gender==='male'?maleProfile:femaleProfile} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title">Full Name: {el.fullName}</h5>
        <p className='card-text'><b>Designation: </b>{el.designation}</p>
      </div>
    </div>
  )
}
export default TeamMemberCard