import TeamMemberCard from './TeamMemberCard';

const TeamMembers = ({employees,handleCardClick,selectedTeam})=>{
  return (
    <>
      { employees.map((el)=><TeamMemberCard el={el} selectedTeam={selectedTeam} handleCardClick={handleCardClick}/>)
        
      }
    </>
  )
}
export default TeamMembers